import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Outlet } from "react-router";
import Header from "../../shared/components/layouts/Header";
import ThreeCardPreview from "../ThreeCardPreview";
import ProgressBar from "./ProgressBar";
import { useCardInfo } from "./hooks/useCardInfo";
import { useProgressive } from "./hooks/useProgress";

export type CardInfo = {
  cardNumbers: string;
  expiration: {
    month: string;
    year: string;
  };
  brandName: string;
  cvc: string;
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

export const CARD_INFO = {
  NUMBER_LENGTH: 16,
  NUMBER_LENGTH_PART: 16,
  VISA_START_NUMBER: 4,
  MASTER_START_NUMBERS: [51, 52, 53, 54, 55],
  CVC_LENGTH: 3,
  EXPIRATION_DATE_LENGTH: 4,
  EXPIRATION_DATE_LENGTH_PART: 2,
  MASKING_STRING: "•",
  EXPIRATION_SPLIT: "/",
  PASSWORD_LENGTH: 2,
};

export type AddCardContextType = {
  cardInfo: CardInfo;
  cardNumber: string;
  cardBrand: string;
  expiration: {
    month: string;
    year: string;
  };
  cvc: string;
  handleCardNumbersChange: (newCardNumbers: string) => void;
  handleExpirationMonthChange: (newExpirationMonth: string) => void;
  handleExpirationYearChange: (newExpirationYear: string) => void;
  handleBrandNameChange: (newBrandName: string) => void;
  handleCvcChange: (newCvc: string) => void;
  handleProgressPlus: () => void;
}

function AddCardLayout() {
    const { progress, handleProgressPlus } = useProgressive();
    const { cardInfo, cardNumber, cardBrand, expiration, cvc, handleCardNumbersChange, handleExpirationMonthChange, handleExpirationYearChange, handleBrandNameChange, handleCvcChange } = useCardInfo();

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Header />
      <ProgressBar totalSteps={5} currentStep={progress} />
      <Canvas style={{ width: "50vw", height: 400 }} camera={{ position: [0, 0, 140], fov: 50 }}>
        <ThreeCardPreview cardInfo={cardInfo} finished={progress === 5} />
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div style={{ marginTop: 40, width: "100%", maxWidth: '640px' }}>
        <Outlet context={{ cardInfo, cardNumber, cardBrand, expiration, cvc, handleCardNumbersChange, handleExpirationMonthChange, handleExpirationYearChange, handleBrandNameChange, handleCvcChange, handleProgressPlus }} />
      </div>
    </div>
  );
}

export default AddCardLayout;
