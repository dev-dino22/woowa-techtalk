import { useNavigate, useOutletContext } from "react-router";
import Button from "../../shared/components/actions/button/Button";
import CardNumberInput from "../../domains/payments/cardInput/cardNumberInput/CardNumberInput";
import { generateRouterPath } from "../../routes/routePath";

export default function StepCardNumber() {
  const navigate = useNavigate();
  const { cardInfo, setCardInfo } = useOutletContext();

  const canNext = cardInfo.cardNumbers.length > 0;

  return (
    <div>
      <CardNumberInput
        value={cardInfo.cardNumbers}
        handleCardNumbersChange={(v) => setCardInfo(prev => ({ ...prev, cardNumbers: v }))}
      />
      <Button onClick={() => canNext && navigate(generateRouterPath.interactivePaymentBrand())} disabled={!canNext}>
        다음
      </Button>
    </div>
  );
}
