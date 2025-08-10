import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Children, type ReactNode } from "react";

const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50%);
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
  gap?: number;   
};

function SlideUpText({
  children,
  delay = 0,
  duration = 0.5,
  gap = 0.1,
}: SlideUpTextProps) {
  const childArray = Children.toArray(children);

  return (
    <>
      {childArray.map((child, index) => (
        <S.Wrapper
          key={index}
          delay={delay + index * gap}
          duration={duration}
        >
          {child}
        </S.Wrapper>
      ))}
    </>
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

