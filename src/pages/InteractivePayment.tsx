import styled from "@emotion/styled";
import { OrbitControls, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useCallback, useMemo, useState } from "react";
import CardInputForm from "../domains/payments/cardInput/CardInputForm";
import CreditCardMesh from "./components/CreditCardMesh";
import ImagePlane from "../shared/components/assets/three/ImagePlane";
import { CARD_INFO } from "../shared/components/three/CardPreview";

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

  const { cardType } = useMemo(() => {
      const firstNumber = cardInfo.cardNumbers[0] ?? "";
  
      if (firstNumber.startsWith(CARD_INFO.VISA_START_NUMBER.toString())) {
        return { cardType: "Visa" };
      }
  
      const isMaster = CARD_INFO.MASTER_START_NUMBERS.some((startNumber) =>
        firstNumber.startsWith(startNumber.toString())
      );
  
      return {
        cardType: isMaster ? "Mastercard" : "",
      };
    }, [cardInfo.cardNumbers]);

  return (
    <S.Container>
      <S.Wrapper>
        <Canvas
            style={{ width: '50vw', height: '440px' }}
            camera={{ position: [0, 0, 140], fov: 50 }}>
              <group rotation={[0, 0, Math.PI / 10]}>
                <CreditCardMesh cardInfo={cardInfo} />
                <ImagePlane url={cardType ? `/${cardType}.png` : '/Visa.png'} width={12} height={8} position={[32, 15, 2.1]} />
                  <Text
                    position={[-36, -8, 2.1]}
                    fontSize={4}
                    color="black"
                    anchorX="left"
                    anchorY="middle"
                  >
                    {cardInfo.cardNumbers.join(' ')}
                  </Text>
                  <Text
                    position={[-36, -14, 2.1]}
                    fontSize={4}
                    color="black"
                    anchorX="left"
                    anchorY="middle"
                  >
                    {cardInfo.expirationDate.join('/')}
                  </Text>
              </group>
                <OrbitControls />
        </Canvas>
        {/* <CardPreview cardInfo={cardInfo} /> */}
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
