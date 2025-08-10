import { Outlet } from "react-router";
import { Canvas } from "@react-three/fiber";
import ThreeCardPreview from "../ThreeCardPreview";
import { useState } from "react";
import { OrbitControls } from "@react-three/drei";

export type CardInfo = {
  cardNumbers: string[];
  expirationDate: string[];
  brandName: string;
}

function AddCardLayout() {
      const [cardInfo, setCardInfo] = useState<CardInfo>({
        cardNumbers: [],
        expirationDate: [],
        brandName: "",
      });

      const handleCardNumbersChange = (newCardNumbers: string[]) => {
        setCardInfo((prev) => ({ ...prev, cardNumbers: newCardNumbers }));
      };

      const handleExpirationDateChange = (newExpirationDate: string[]) => {
        setCardInfo((prev) => ({ ...prev, expirationDate: newExpirationDate }));
      };

      const handleBrandNameChange = (newBrandName: string) => {
        setCardInfo((prev) => ({ ...prev, brandName: newBrandName }));
      };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Canvas style={{ width: "50vw", height: 440 }} camera={{ position: [0, 0, 140], fov: 50 }}>
        <ThreeCardPreview cardInfo={cardInfo} />
        <OrbitControls />
      </Canvas>
      <div style={{ marginTop: 40, width: "300px" }}>
        <Outlet context={{ cardInfo, handleCardNumbersChange, handleExpirationDateChange, handleBrandNameChange }} />
      </div>
    </div>
  );
}

export default AddCardLayout;
