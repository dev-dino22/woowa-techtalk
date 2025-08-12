import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Children, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

const directionMap: Record<Direction, { axis: "X" | "Y"; distance: number }> = {
  up:    { axis: "Y", distance: 50 },
  down:  { axis: "Y", distance: -50 },
  left:  { axis: "X", distance: 50 },
  right: { axis: "X", distance: -50 },
};

const getSlideKeyframes = (direction: Direction) => {
  const { axis, distance } = directionMap[direction];
  return keyframes`
    0% {
      opacity: 0;
      transform: translate${axis}(${distance}%);
    }
    100% {
      opacity: 1;
      transform: translate${axis}(0);
    }
  `;
};

type Props = {
  children: ReactNode
  delay?: number;
  duration?: number;
  gap?: number;
  direction?: Direction;
};

function SlideIn({
  children,
  delay = 0,
  duration = 0.5,
  gap = 0.1,
  direction = "up",
}: Props) {
  const childArray = Children.toArray(children);

  return (
    <>
      {childArray.map((child, index) => (
        <S.Wrapper
          key={index}
          delay={delay + index * gap}
          duration={duration}
          direction={direction}
        >
          {child}
        </S.Wrapper>
      ))}
    </>
  );
}

export default SlideIn;


const S = {
  Wrapper: styled.span<{
    delay: number;
    duration: number;
    direction: Direction;
  }>`
    animation: ${({ direction }) => getSlideKeyframes(direction)}
      ${({ duration }) => duration}s ease-out
      ${({ delay }) => delay}s both;
    opacity: 0;
  `,
};
