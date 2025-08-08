import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import CardPreview from "../shared/components/three/CardPreview";
import CardInputForm from "../domains/payments/cardInput/CardInputForm";

export interface CardInfo {
  cardNumbers: string[];
  expirationDate: string[];
  brandName: TCardBrand | "";
}

export const CARD_BACKGROUND_COLOR = {
  BC카드: "#F04651",
  신한카드: "#0046FF",
  카카오뱅크: "#FFE600",
  현대카드: "#000000",
  우리카드: "#007BC8",
  롯데카드: "#ED1C24",
  하나카드: "#009490",
  국민카드: "#6A6056",
} as const;

export type TCardBrand = keyof typeof CARD_BACKGROUND_COLOR;

function DefaultPayment() {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardNumbers: [],
    expirationDate: [],
    brandName: "",
  });

  const handleInputChange = useCallback(
    <K extends keyof CardInfo>(inputName: K, value: CardInfo[K]) => {
      setCardInfo((prev) => ({
        ...prev,
        [inputName]: value,
      }));
    },
    []
  );

  return (
    <S.Container>
      <S.Wrapper>
        <CardPreview cardInfo={cardInfo} />
        <CardInputForm
          cardInfo={cardInfo}
          handleCardNumbersChange={(value) =>
            handleInputChange("cardNumbers", value)
          }
          handleExpirationDateChange={(value) =>
            handleInputChange("expirationDate", value)
          }
          handleBrandNameChange={(value) =>
            handleInputChange("brandName", value)
          }
        />
      </S.Wrapper>
    </S.Container>
  );
}

export default DefaultPayment;

const S = {
    Container: styled.section`
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
    `,
    Wrapper: styled.div`
        width: 390px;
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 28px;
        border: 1px solid var(--grey);
        border-radius: 4px;
    `,
}
