import type { TCardBrand } from "../../../../pages/InteractivePayment";
import SelectBox from "../../../../shared/components/actions/selectForm/SelectBox";

const CARD = {
  BRAND: [
    "BC카드",
    "신한카드",
    "카카오뱅크",
    "현대카드",
    "우리카드",
    "롯데카드",
    "하나카드",
    "국민카드",
  ] as TCardBrand[],
};

interface CardBrandSelectProps {
  handleBrandNameChange: (brnad: TCardBrand) => void;
  onSuccessValidate: (isValid: boolean) => void;
  onSuccessNextInput: () => void;
}

const CardBrandSelect = ({
  handleBrandNameChange,
  onSuccessValidate,
  onSuccessNextInput,
}: CardBrandSelectProps) => {
  function onSelectHandler(value: TCardBrand) {
    handleBrandNameChange(value);
    if (value) {
      onSuccessValidate(true);
      onSuccessNextInput();
    }
  }

  return (
    <SelectBox<TCardBrand>
      onSelectHandler={(value) => onSelectHandler(value)}
      title="카드사를 선택해주세요"
      description="현재 국내 카드사만 가능합니다."
      placeholder="카드를 선택해주세요"
      options={CARD.BRAND}
      autoFocus={true}
    />
  );
};

export default CardBrandSelect;
