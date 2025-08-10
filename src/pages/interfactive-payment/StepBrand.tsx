import { useNavigate, useOutletContext } from "react-router";
import { generateRouterPath } from "../../routes/routePath";
import Button from "../../shared/components/actions/button/Button";
import SelectBox from "../../shared/components/actions/selectForm/SelectBox";
import type { TCardBrand } from "../InteractivePayment";
import type { AddCardContextType } from "./AddCardLayout";
import styled from "@emotion/styled";
import SlideUpText from "../../shared/components/animations/SlideUpText";
import FadeIn from "../../shared/components/animations/FadeIn";

const CARD = {
  BRAND: [
    "BC카드",
    "신한카드",
    "카카오뱅크",
    "현대카드",
  ] as TCardBrand[],
};

function StepBrand() {
  const navigate = useNavigate();
  const { cardBrand, handleBrandNameChange } = useOutletContext<AddCardContextType>();

  const canNext = cardBrand !== "";

  return (
    <S.Container>
        <SlideUpText>
            <S.Title>카드사를 선택해주세요</S.Title>
            <S.Description>현재 국내 카드사만 가능합니다.</S.Description>
        </SlideUpText>
        <FadeIn delay={0.5}>
            <SelectBox<TCardBrand>
                    onSelectHandler={(value) => handleBrandNameChange(value)}
                    placeholder="카드를 선택해주세요"
                    options={CARD.BRAND}
                    autoFocus={true}
            />
        </FadeIn>
        <S.Footer>
        <Button onClick={() => canNext && navigate(generateRouterPath.interactivePaymentExpiration())} disabled={!canNext}>
            다음
        </Button>
        </S.Footer>
    </S.Container>
  );
}

export default StepBrand;

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
        margin-bottom: 16px;

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