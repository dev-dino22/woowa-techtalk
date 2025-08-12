import { useState } from "react";
import type { CardBrandName, CardInfo } from "../../../shared/types/card/cardTypes";

export const useCardInfo = () => {
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
    
        const handleBrandNameChange = (newBrandName: CardBrandName) => {
        setCardInfo((prev) => ({ ...prev, brandName: newBrandName }));
        };
    
        const handleCvcChange = (newCvc: string) => {
        setCardInfo((prev) => ({ ...prev, cvc: newCvc }));
        };
    return {
        cardInfo,
        cardNumber: cardInfo.cardNumbers,
        cardBrand: cardInfo.brandName,
        expiration: cardInfo.expiration,
        cvc: cardInfo.cvc,
        handleCardNumbersChange,
        handleExpirationMonthChange,
        handleExpirationYearChange,
        handleBrandNameChange,
        handleCvcChange
    }
}