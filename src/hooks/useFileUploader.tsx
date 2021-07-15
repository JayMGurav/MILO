import { storageRef } from '@/utils/firebase';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const progressPercentage = (total: number, transferred: number) => {
  return Math.floor((transferred / total) * 100);
};

function useFileUploader(folderName: string) {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [url, setURL] = useState<string | ArrayBuffer>('');

  function handleFileChange(e) {
    const file = e.target.files[0];
    const FReader = new FileReader();
    setFile(file);
    FReader.readAsDataURL(file);
    FReader.onload = function (FREvent) {
      const previewUrl = FREvent.target.result;
      setURL(previewUrl);
    };
  }

  async function upload(customMetadata = {}) {
    const uuid = uuidv4();
    // let imageUrl = '';
    const fileRef = storageRef.child(folderName).child(uuid);
    const uploadTask = fileRef.put(file, { customMetadata });
    uploadTask.on(
      'state_changed',
      function progress({ totalBytes, bytesTransferred }) {
        setUploadProgress(progressPercentage(totalBytes, bytesTransferred)); // progress of upload
      },
      console.error,
      async function onComplete() {
        const url = await fileRef.getDownloadURL();
        setFile(null);
        setURL(url);
      }
    );

    await uploadTask;
    const uploadedImageUrl = await fileRef.getDownloadURL();
    return uploadedImageUrl;
  }

  return { url, uploadProgress, upload, handleFileChange };
}

export default useFileUploader;
