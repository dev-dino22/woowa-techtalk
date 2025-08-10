import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import type { ReactNode } from "react";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number; 
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.4,
}: FadeInProps) {
  return (
    <S.Wrapper delay={delay} duration={duration}>
      {children}
    </S.Wrapper>
  );
}

const S = {
    Wrapper: styled.div<{ delay: number; duration: number }>`
      animation: ${fadeIn} ${({ duration }) => duration}s ease-out
        ${({ delay }) => delay}s forwards;
        opacity: 0;
    `,
}