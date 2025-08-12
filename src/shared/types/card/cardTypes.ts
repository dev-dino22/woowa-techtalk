export type CardInfo = {
  cardNumbers: string;
  expiration: {
    month: string;
    year: string;
  };
  brandName: CardBrandName;
  cvc: string;
}

export type CardBrandName = "BC카드" | "신한카드" | "카카오뱅크" | "현대카드" | "우리카드" | "롯데카드" | "하나카드" | "국민카드" | "";