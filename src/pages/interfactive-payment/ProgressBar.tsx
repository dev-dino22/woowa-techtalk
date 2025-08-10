import styled from "@emotion/styled";

type ProgressBarProps = {
  totalSteps: number;
  currentStep: number;
};

const ProgressBar = ({ totalSteps, currentStep }: ProgressBarProps) => {
  const percent = Math.min(
    100,
    totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0
  );

  return (
    <BarContainer role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}>
      <BarFill percent={percent} />
    </BarContainer>
  );
};

export default ProgressBar;

const BarContainer = styled.div`
  width: 90%;
  height: 4px;
  overflow: hidden;

  background-color: #e0e0e0;
  border-radius: 4px;
`;

const BarFill = styled.div<{ percent: number }>`
  width: ${({ percent }) => percent}%;
  height: 100%;

  background-color: ${({ theme }) => theme.PALETTE.gray[70]};

  transition: width 0.3s ease;
`;
