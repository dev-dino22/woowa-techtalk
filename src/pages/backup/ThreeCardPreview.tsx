import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import ImagePlane from "../shared/components/assets/three/ImagePlane";
import CreditCardMesh from "./components/CreditCardMesh";
import { CARD_BACKGROUND_COLOR } from "./InteractivePayment";
import type { CardInfo } from "./interfactive-payment/AddCardLayout";

type Props = {
    cardInfo : CardInfo
}

function ThreeCardPreview({ cardInfo }: Props) {
  const groupRef = useRef(null);
  const [targetRotation, setTargetRotation] = useState(Math.PI);
  const [rotationY, setRotationY] = useState(Math.PI);
  const [isAnimating, setIsAnimating] = useState(false);

  const prevCardNumbersEmpty = useRef(true);
  const prevExpirationDateEmpty = useRef(true);
  const prevBrandNameEmpty = useRef(true);


 useFrame(() => {
    if (!isAnimating || !groupRef.current) return;

    const diff = targetRotation - rotationY;
    if (Math.abs(diff) > 0.01) {
      const step = diff * 0.1;
      const newRotation = rotationY + step;
      groupRef.current.rotation.y = newRotation;
      setRotationY(newRotation);
    } else {
      groupRef.current.rotation.y = targetRotation;
      setRotationY(targetRotation);
      setIsAnimating(false);
    }
  });

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.PI;
    }
  }, []);

  const startFlipAnimation = () => {
    if (isAnimating) return;
    setTargetRotation(prev => prev + Math.PI);
    setIsAnimating(true);
  };

  useEffect(() => {
    const isCardNumbersEmpty = cardInfo.cardNumbers.length === 0;
    const isExpirationDateEmpty = cardInfo.expiration.month === "" && cardInfo.expiration.year === "";
    const isBrandNameEmpty = cardInfo.brandName === "";

    if (
      (prevCardNumbersEmpty.current && !isCardNumbersEmpty) ||
      (prevExpirationDateEmpty.current && !isExpirationDateEmpty) ||
      (prevBrandNameEmpty.current && !isBrandNameEmpty)
    ) {
      startFlipAnimation();
    }

    prevCardNumbersEmpty.current = isCardNumbersEmpty;
    prevExpirationDateEmpty.current = isExpirationDateEmpty;
    prevBrandNameEmpty.current = isBrandNameEmpty;
  }, [cardInfo]);

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 10]}>
      <CreditCardMesh cardColor={CARD_BACKGROUND_COLOR[cardInfo.brandName]} />
      <ImagePlane
        url={"/magnetic.png"}
        width={12}
        height={8}
        position={[-28, 4, -1]}
        rotation={[0, Math.PI, 0]}
      />
      <ImagePlane
        url={"/Mastercard.png"}
        width={12}
        height={8}
        position={[32, -14, 2.1]}
      />
      <Text
        position={[-36, -8, 2.1]}
        fontSize={4}
        color="white"
        anchorX="left"
        anchorY="middle"
      >
        {cardInfo.cardNumbers.replace(/(.{4})/g, "$1 ").trim()}
      </Text>
      <Text
        position={[-36, -15, 2.1]}
        fontSize={3}
        color="white"
        anchorX="left"
        anchorY="middle"
      >
        Date
      </Text>
      <Text
        position={[-28, -14, 2.1]}
        fontSize={4}
        color="white"
        anchorX="left"
        anchorY="middle"
      >
        {cardInfo.expiration.month}/{cardInfo.expiration.year}
      </Text>
    </group>
  );
}

export default ThreeCardPreview;