import { Text } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Group } from "three";
import CreditCardMesh from "../shared/three/components/CreditCardMesh";
import ImagePlane from "../shared/three/components/ImagePlane";
import { CARD_BACKGROUND_COLOR } from "./interfactive-payment/Main";
import type { CardInfo } from "../shared/types/card/cardTypes";

type Props = {
  cardInfo: CardInfo;
  finished: boolean;
};

function ThreeCardPreview({ cardInfo, finished }: Props) {
  const groupRef = useRef<Group>(null);
  const animationTimeline = useRef<GSAPTimeline | null>(null);

  const prevCardNumbersEmpty = useRef(true);
  const prevExpirationEmpty = useRef(true);
  const prevBrandEmpty = useRef(true);

  useEffect(() => {
    if (!groupRef.current) return;

    const group = groupRef.current;
    group.position.y = 100;
    group.rotation.y = 0;

    gsap.to(group.position, {
      y: 0,
      duration: 1,
      ease: "power3.out",
    });
    gsap.to(group.rotation, {
      y: Math.PI * 3,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (!groupRef.current) return;

    if (animationTimeline.current) {
      animationTimeline.current.kill();
      animationTimeline.current = null;
    }

    if (finished) {
      const group = groupRef.current;
      const tl = gsap.timeline();

      tl.to(group.rotation, {
        y: group.rotation.y + Math.PI * 2,
        duration: 0.8,
        ease: "power2.out",
      });
      tl.to(
        group.rotation,
        {
          y: "+=6.28319",
          duration: 10,
          repeat: -1,
          ease: "linear",
        },
        ">"
      );

      animationTimeline.current = tl;
    } else {
      animationTimeline.current = null;
    }
  }, [finished]);

  useEffect(() => {
    if (!groupRef.current) return;

    const isCardNumbersEmpty = cardInfo.cardNumbers.length === 0;
    const isExpirationEmpty = cardInfo.expiration.month === "" && cardInfo.expiration.year === "";
    const isBrandEmpty = cardInfo.brandName === "";

    if (
      (prevCardNumbersEmpty.current && !isCardNumbersEmpty) ||
      (prevExpirationEmpty.current && !isExpirationEmpty) ||
      (prevBrandEmpty.current && !isBrandEmpty)
    ) {
      const group = groupRef.current;
      gsap.to(group.rotation, {
        y: group.rotation.y + Math.PI,
        duration: 0.4,
        ease: "power2.easeInOut",
      });
    }

    prevCardNumbersEmpty.current = isCardNumbersEmpty;
    prevExpirationEmpty.current = isExpirationEmpty;
    prevBrandEmpty.current = isBrandEmpty;
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
