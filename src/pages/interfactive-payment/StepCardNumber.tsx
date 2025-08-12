import styled from "@emotion/styled";
import { useNavigate, useOutletContext } from "react-router";
import { generateRouterPath } from "../../routes/routePath";
import Button from "../../shared/components/actions/Button";
import FloatInput from "../../shared/components/actions/FloatInput";
import { CARD_INFO, type AddCardContextType } from "./Main";
import FadeIn from "../../shared/components/animations/FadeIn";
import SlideIn from "../../shared/components/animations/SlideIn";

function formatCardNumber(input: string) {
  return input.replace(/\D/g, '')
    .replace(/(.{4})/g, '$1 ')
    .trim();
}

function StepCardNumber() {
    const { cardNumber, handleCardNumbersChange, handleProgressPlus } = useOutletContext<AddCardContextType>();
    const navigate = useNavigate();

    const handleNext = () => {
        navigate(generateRouterPath.interactivePaymentBrand());
        handleProgressPlus();
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/\s/g, '');
        if (raw.length > CARD_INFO.NUMBER_LENGTH_PART) return;
        handleCardNumbersChange(raw);
    };

  const formattedValue = formatCardNumber(cardNumber);

    return (
        <S.Container>
            <SlideIn direction="up" delay={1} duration={0.5} gap={0.1}>
                <S.Title>결제할 카드 번호를 입력해주세요</S.Title>
                <S.Description>본인 명의의 카드만 가능합니다.</S.Description>
            </SlideIn>
            <FadeIn delay={0.5}>
                <FloatInput
                    label="카드 번호"
                    type="tel"
                    value={formattedValue}
                    onChange={handleInputChange}
                />
            </FadeIn>
            <S.Footer>
                <Button onClick={handleNext}>
                    다음
                </Button>
            </S.Footer>
        </S.Container>
    );
}

export default StepCardNumber;

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