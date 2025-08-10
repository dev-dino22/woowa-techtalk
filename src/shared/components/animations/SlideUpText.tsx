import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { type ReactNode } from "react";

const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

type SlideUpTextProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
};

function SlideUpText({
  children,
  delay = 0,
  duration = 0.6,
}: SlideUpTextProps) {
  return (
    <S.Wrapper delay={delay} duration={duration}>
      {children}
    </S.Wrapper>
  );
}

export default SlideUpText;

const S = {
  Wrapper: styled.span<{ delay: number; duration: number }>`
    display: inline-block;

    animation: ${slideUp} ${({ duration }) => duration}s ease-out
      ${({ delay }) => delay}s both;
  `,
}

