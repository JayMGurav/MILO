import { ProgressContainer, ProgressBarDiv } from './ProgressBar.styles';

function ProgressBar({
  progress,
  width = 100,
}: {
  progress: number;
  width?: number;
}) {
  return (
    <ProgressContainer width={width}>
      <ProgressBarDiv
        animate={{
          width: `${progress}%`,
        }}
      />
    </ProgressContainer>
  );
}

export default ProgressBar;
