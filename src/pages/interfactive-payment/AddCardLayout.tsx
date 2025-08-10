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
      <Canvas style={{ width: "50vw", height: 440 }} camera={{ position: [0, 0, 140], fov: 50 }}>
        <ThreeCardPreview cardInfo={cardInfo} />
        <OrbitControls />
      </Canvas>
      <div style={{ marginTop: 40, width: "100%", maxWidth: '640px' }}>
        <Outlet context={{ cardInfo, cardNumber, cardBrand, expiration, cvc, handleCardNumbersChange, handleExpirationMonthChange, handleExpirationYearChange, handleBrandNameChange, handleCvcChange, handleProgressPlus }} />
      </div>
    </div>
  );
}

export default AddCardLayout;
