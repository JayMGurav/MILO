import firebase from '@firebase/app';
import '@firebase/storage';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const storage = firebase.storage();

export const storageRef = storage.ref();
export const profileImageRef = storageRef.child('profile_images');

export default storage;
