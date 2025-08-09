import styled from "@emotion/styled";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useCallback, useState } from "react";
import CardInputForm from "../domains/payments/cardInput/CardInputForm";
import ThreeCardPreview from "./ThreeCardPreview";

import { useFunnel } from "../shared/funnel/useFunnel"; // 퍼널 훅 import

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

function InteractivePayment() {
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

  // 퍼널 훅 사용!
  const { startFunnel, endFunnel } = useFunnel();

  // 예시: 카드 등록 흐름 시작!
  const handleStartCardFunnel = () => {
    startFunnel("/add-card/input"); // 카드 입력 퍼널 진입(경로는 실제 라우터에 맞게)
  };

  // 예시: 카드 등록 성공 후 퍼널 흐름 종료
  const handleEndCardFunnel = () => {
    endFunnel();
  };

  return (
    <S.Container>
      <S.Wrapper>
        <button type="button" onClick={handleStartCardFunnel}>
          카드등록 퍼널 시작
        </button>
        <Canvas
            style={{ width: '50vw', height: '440px' }}
            camera={{ position: [0, 0, 140], fov: 50 }}>
            <ThreeCardPreview cardInfo={cardInfo} />
            <OrbitControls />
        </Canvas>
        <CardInputForm
          cardInfo={cardInfo}
          handleCardNumbersChange={(value) => handleInputChange("cardNumbers", value)}
          handleExpirationDateChange={(value) => handleInputChange("expirationDate", value)}
          handleBrandNameChange={(value) => handleInputChange("brandName", value)}
          onSuccess={() => handleEndCardFunnel()}  // 예시: 마지막 입력 성공 시 퍼널 종료
        />
      </S.Wrapper>
    </S.Container>
  );
}

export default InteractivePayment;

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
