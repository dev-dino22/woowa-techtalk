import styled from "@emotion/styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClickHandler?: () => void;
  backgroundColor?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  onClickHandler,
  type,
  backgroundColor,
  children,
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      onClick={onClickHandler}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </S.Button>
  );
};

export default Button;

const S = {
  Button: styled.button<ButtonProps>`
    width: 100%;
    height: 48px;

    background-color: ${({ backgroundColor, theme }) =>
      backgroundColor || theme.PALETTE.gray[80]};

    color: ${({ theme }) => theme.PALETTE.gray[0]};
    font-size: 16px;
    font-weight: 600;

    transition: transform 0.2s ease, opacity 0.2s ease;
    border-radius: 8px;
    line-height: 24px;

    &:hover {
      background-color: ${({ backgroundColor, theme }) =>
      backgroundColor || theme.PALETTE.gray[90]};
      transform: scale(1.015);

    }

    &:active {
      background-color: ${({ backgroundColor, theme }) =>
      backgroundColor || theme.PALETTE.gray[100]};
      transform: scale(0.98);
    }
  `,
};
