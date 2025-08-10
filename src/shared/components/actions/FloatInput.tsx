import styled from "@emotion/styled";
import { type ComponentProps } from "react";

type Props = {
    label: string;
} & ComponentProps<'input'>;

function FloatInput({ label, ...props }: Props) {
  return (
    <S.FloatingLabelWrapper>
      <S.FloatingInput
        id="input"
        type="text"
        placeholder=""
        autoComplete="off"
        {...props}
      />
      <S.FloatingLabel htmlFor="input">{label}</S.FloatingLabel>
    </S.FloatingLabelWrapper>
  );
}


export default FloatInput;

const FloatingLabelWrapper = styled.div`
  position: relative;

  margin: 20px 0;
`;

const FloatingInput = styled.input`
  width: 100%;

  padding: 12px 12px 12px 0;
  border: none;

  background: transparent;

  font: ${({theme}) => theme.FONTS.body.large};
  border-bottom: 2px solid ${({theme}) => theme.PALETTE.gray[30]};;

  &:focus {
    border-color: ${({theme}) => theme.PALETTE.gray[100]};
    outline: none;
  }
`;

const FloatingLabel = styled.label`
  position: absolute;
  top: 12px;
  left: 0;

  color: gray;
  font: ${({theme}) => theme.FONTS.body.large};

  transition: 0.2s ease all;
  pointer-events: none;

  input:focus + &,
  input:not(:placeholder-shown) + & {
    top: -8px;

    color: ${({theme}) => theme.PALETTE.gray[90]};
    font: ${({theme}) => theme.FONTS.body.small};
  }
`;

const S = {
    FloatingLabelWrapper,
    FloatingInput,
    FloatingLabel
}