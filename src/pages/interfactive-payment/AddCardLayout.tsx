import { Outlet } from "react-router";
import { Canvas } from "@react-three/fiber";
import ThreeCardPreview from "../ThreeCardPreview";
import { useState } from "react";
import { OrbitControls } from "@react-three/drei";
import Header from "../../shared/components/layouts/Header";

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
}

function AddCardLayout() {
    const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardNumbers: "",
    expiration: {
        year: "",
        month: ""
    },
    brandName: "",
    cvc: "",
    });

    const handleCardNumbersChange = (newCardNumbers: string) => {
    setCardInfo((prev) => ({ ...prev, cardNumbers: newCardNumbers }));
    };

    const handleExpirationMonthChange = (newExpirationMonth: string) => {
    setCardInfo((prev) => ({
        ...prev,
        expiration: {
        ...prev.expiration,
        month: newExpirationMonth,
        },
    }));
    };

    const handleExpirationYearChange = (newExpirationYear: string) => {
    setCardInfo((prev) => ({
        ...prev,
        expiration: {
        ...prev.expiration,
        year: newExpirationYear,
        },
    }));
    };

    const handleBrandNameChange = (newBrandName: string) => {
    setCardInfo((prev) => ({ ...prev, brandName: newBrandName }));
    };

    const handleCvcChange = (newCvc: string) => {
    setCardInfo((prev) => ({ ...prev, cvc: newCvc }));
    };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Header />
      <Canvas style={{ width: "50vw", height: 440 }} camera={{ position: [0, 0, 140], fov: 50 }}>
        <ThreeCardPreview cardInfo={cardInfo} />
        <OrbitControls />
      </Canvas>
      <div style={{ marginTop: 40, width: "100%", maxWidth: '640px' }}>
        <Outlet context={{ cardInfo, cardNumber: cardInfo.cardNumbers, cardBrand: cardInfo.brandName, expiration: cardInfo.expiration, cvc: cardInfo.cvc, handleCardNumbersChange, handleExpirationMonthChange, handleExpirationYearChange, handleBrandNameChange, handleCvcChange }} />
      </div>
    </div>
  );
}

export default AddCardLayout;
