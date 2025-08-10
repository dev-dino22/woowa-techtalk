import { useNavigate, useOutletContext } from "react-router";
import Button from "../../shared/components/actions/button/Button";
import CardCVCInput from "../../domains/payments/cardInput/cardCVCInput/CardCVCInput";
import { generateRouterPath } from "../../routes/routePath";

export default function StepCvc() {
  const navigate = useNavigate();
  const { cardInfo, setCardInfo } = useOutletContext<any>();

  const canNext = cardInfo.cvc && cardInfo.cvc.length === 3;

  return (
    <div>
      <CardCVCInput
        value={cardInfo.cvc || ""}
        onChange={(v) => setCardInfo((prev) => ({ ...prev, cvc: v }))}
      />
      <Button
        onClick={() => canNext && navigate(generateRouterPath.interactivePaymentBrand())}
        disabled={!canNext}
      >
        다음
      </Button>
    </div>
  );
}
