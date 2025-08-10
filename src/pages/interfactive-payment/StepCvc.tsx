import { useNavigate, useOutletContext } from "react-router";
import Input from "../../shared/components/actions/Input";
import InputField from "../../shared/components/actions/inputField/InputField";
import { CARD_INFO } from "../../shared/components/three/CardPreview";
import type { AddCardContextType } from "./AddCardLayout";
import Button from "../../shared/components/actions/button/Button";
import { generateRouterPath } from "../../routes/routePath";
import styled from "@emotion/styled";

export default function StepCvc() {
  const navigate = useNavigate();
  const { handleCvcChange } = useOutletContext<AddCardContextType>();


  return (
    <>
        <InputField
            title="CVC 번호를 입력해 주세요."
            label="CVC"
            >
            <Input
            autoFocus
            type="tel"
            name="cardCVC"
            placeholder="123"
            maxLength={CARD_INFO.CVC_LENGTH}
            onChange={(e) => handleCvcChange(e.target.value)}
            />
        </InputField>
        <S.Footer>
            <Button onClick={() => navigate(generateRouterPath.interactivePaymentSuccess())}>
                다음
            </Button>
        </S.Footer>
    </>
  );
}

const S = {
    Footer: styled.footer`
        width: 100%;
        max-width: 640px;
        position: fixed;
        bottom: 48px;
    `,
}
