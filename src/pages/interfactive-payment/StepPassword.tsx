import { useNavigate, useOutletContext } from "react-router";
import Button from "../../shared/components/actions/button/Button";
import CardPasswordInput from "../../domains/payments/cardInput/cardPasswordInput/CardPasswordInput";
import { generateRouterPath } from "../../routes/routePath";

export default function StepPassword() {
  const navigate = useNavigate();
  const { cardInfo, setCardInfo } = useOutletContext<any>();

  // Password 유효성 등 간단검사 예
  const canNext = cardInfo.password && cardInfo.password.length >= 4;

  return (
    <div>
      <CardPasswordInput
        value={cardInfo.password || ""}
        onChange={(v) => setCardInfo((prev) => ({ ...prev, password: v }))}
      />
      <Button
        onClick={() => canNext && navigate(generateRouterPath.interactivePaymentSuccess())}
        disabled={!canNext}
      >
        다음
      </Button>
    </div>
  );
}
