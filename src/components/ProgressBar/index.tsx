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
        initial={{
          width: 0,
        }}
        animate={{
          width: `${progress}%`,
        }}
      />
    </ProgressContainer>
  );
}

export default ProgressBar;
