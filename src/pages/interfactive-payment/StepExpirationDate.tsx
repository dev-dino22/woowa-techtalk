import { useNavigate, useOutletContext } from "react-router";
import Button from "../../shared/components/actions/button/Button";
import CardExpirationDateInput from "../../domains/payments/cardInput/cardExpirationDateInput/CardExpirationDateInput";
import { generateRouterPath } from "../../routes/routePath";

export default function StepExpirationDate() {
  const navigate = useNavigate();
  const { cardInfo, setCardInfo } = useOutletContext();

  const canNext = cardInfo.expirationDate.length > 0;

  return (
    <div>
      <CardExpirationDateInput
        value={cardInfo.expirationDate}
        handleExpirationDateChange={(v) => setCardInfo(prev => ({ ...prev, expirationDate: v }))}
      />
      <Button onClick={() => canNext && navigate((generateRouterPath.interactivePaymentCVC()))} disabled={!canNext}>
        다음
      </Button>
    </div>
  );
}
