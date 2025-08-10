import { useNavigate, useOutletContext } from "react-router";
import { generateRouterPath } from "../../routes/routePath";
import Button from "../../shared/components/actions/button/Button";
import SelectBox from "../../shared/components/actions/selectForm/SelectBox";
import type { TCardBrand } from "../InteractivePayment";
import type { AddCardContextType } from "./AddCardLayout";
import styled from "@emotion/styled";

const CARD = {
  BRAND: [
    "BC카드",
    "신한카드",
    "카카오뱅크",
    "현대카드",
    "우리카드",
    "롯데카드",
    "하나카드",
    "국민카드",
  ] as TCardBrand[],
};

function StepBrand() {
  const navigate = useNavigate();
  const { cardBrand, handleBrandNameChange } = useOutletContext<AddCardContextType>();

  const canNext = cardBrand !== "";

  return (
    <>
       <SelectBox<TCardBrand>
            onSelectHandler={(value) => handleBrandNameChange(value)}
            title="카드사를 선택해주세요"
            description="현재 국내 카드사만 가능합니다."
            placeholder="카드를 선택해주세요"
            options={CARD.BRAND}
            autoFocus={true}
        />
    <S.Footer>
      <Button onClick={() => canNext && navigate(generateRouterPath.interactivePaymentExpiration())} disabled={!canNext}>
        완료
      </Button>
    </S.Footer>
    </>
  );
}

export default StepBrand;

const S = {
    Footer: styled.footer`
        width: 100%;
        max-width: 640px;
        position: fixed;
        bottom: 48px;
    `,
}