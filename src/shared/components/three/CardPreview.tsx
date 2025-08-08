import { useMemo } from "react";
import { CARD_BACKGROUND_COLOR, type CardInfo } from "../../../pages/InteractivePayment";
import styles from "./CardPreview.module.css";

interface CardPreviewProps {
  cardInfo: CardInfo;
}

export const CARD_INFO: ICardInfo = {
  NUMBER_LENGTH: 16,
  NUMBER_LENGTH_PART: 4,
  VISA_START_NUMBER: 4,
  MASTER_START_NUMBERS: [51, 52, 53, 54, 55],
  CVC_LENGTH: 3,
  EXPIRATION_DATE_LENGTH: 4,
  EXPIRATION_DATE_LENGTH_PART: 2,
  MASKING_STRING: "•",
  EXPIRATION_SPLIT: "/",
  PASSWORD_LENGTH: 2,
};

interface ICardInfo {
  NUMBER_LENGTH: number;
  NUMBER_LENGTH_PART: number;
  VISA_START_NUMBER: number;
  MASTER_START_NUMBERS: number[];
  CVC_LENGTH: number;
  EXPIRATION_DATE_LENGTH: number;
  EXPIRATION_DATE_LENGTH_PART: number;
  MASKING_STRING: string;
  EXPIRATION_SPLIT: string;
  PASSWORD_LENGTH: number;
}


function CardPreview({ cardInfo }: CardPreviewProps) {
  const { cardNumbers, expirationDate, brandName } = cardInfo;
  const { cardType } = useMemo(() => {
    const firstNumber = cardNumbers[0] ?? "";

    if (firstNumber.startsWith(CARD_INFO.VISA_START_NUMBER.toString())) {
      return { cardType: "Visa" };
    }

    const isMaster = CARD_INFO.MASTER_START_NUMBERS.some((startNumber) =>
      firstNumber.startsWith(startNumber.toString())
    );

    return {
      cardType: isMaster ? "Mastercard" : "",
    };
  }, [cardNumbers]);

  const displayCardNumbers = useMemo(() => {
    return cardNumbers.map((number, index) => {
      if (index <= 1) return number;
      return CARD_INFO.MASKING_STRING.repeat(number.length);
    });
  }, [cardNumbers]);

  return (
    <div
      style={{
        backgroundColor: brandName
          ? CARD_BACKGROUND_COLOR[brandName]
          : undefined,
      }}
      className={styles.container}
    >
      <div className={styles.logoContainer}>
        <div className={styles.goldBox}></div>
        {cardType !== "" && (
          <img
            src={`./${cardType}.png`}
            alt={`${cardType} logo`}
            className={styles.logoBrand}
          />
        )}
      </div>
      <div className={`${styles.cardNumberBox} tx-md`}>
        {displayCardNumbers.map((number, i) => (
          <p key={i} className={styles.pCardNumber}>
            {number}
          </p>
        ))}
      </div>
      <p className={`${styles.pCardNumber} tx-md`}>
        {expirationDate.join(CARD_INFO.EXPIRATION_SPLIT)}
      </p>
    </div>
  );
}

export default CardPreview;
