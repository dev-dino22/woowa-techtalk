import styled from "@emotion/styled";
import { useNavigate, useOutletContext } from "react-router";
import { generateRouterPath } from "../../routes/routePath";
import Button from "../../shared/components/actions/Button";
import FloatInput from "../../shared/components/actions/FloatInput";
import SlideUpText from "../../shared/components/animations/SlideUpText";
import { CARD_INFO, type AddCardContextType } from "./Main";

export default function StepCvc() {
  const navigate = useNavigate();
  const { handleCvcChange, handleProgressPlus } = useOutletContext<AddCardContextType>();

  const handleFinish = () => {
      navigate(generateRouterPath.interactivePaymentSuccess());
      handleProgressPlus();
  }

  return (
    <S.Container>
        <SlideUpText>
            <S.Title>CVC 번호를 입력해 주세요</S.Title>
        </SlideUpText>
        <FloatInput
            label="CVC"
            type="tel"
            name="cardCVC"
            maxLength={CARD_INFO.CVC_LENGTH}
            onChange={(e) => handleCvcChange(e.target.value)}
        />
        <S.Footer>
            <Button onClick={handleFinish}>
                카드 등록 완료
            </Button>
        </S.Footer>
    </S.Container>
  );
}

const S = {
    Container: styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
    `,
    Title: styled.h2`
        font: ${({theme}) => theme.FONTS.heading.medium};
    `,
    Description: styled.p`
        margin-bottom: 48px;

        color: ${({theme}) => theme.PALETTE.gray[50]};

        font: ${({theme}) => theme.FONTS.body.small};
    `,
    Footer: styled.footer`
        width: 100%;
        max-width: 640px;
        position: fixed;
        bottom: 48px;
    `,
}
