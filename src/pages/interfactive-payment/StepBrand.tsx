import { useNavigate, useOutletContext } from "react-router";
import Button from "../../shared/components/actions/button/Button";
import CardBrandSelect from "../../domains/payments/cardInput/cardBrandSelect/CardBrandSelect";

export default function StepBrand() {
  const navigate = useNavigate();
  const { cardInfo, setCardInfo } = useOutletContext();

  const canNext = cardInfo.brandName !== "";

  return (
    <div>
      <CardBrandSelect
        value={cardInfo.brandName}
        handleBrandNameChange={(v) => setCardInfo(prev => ({ ...prev, brandName: v }))}
      />
      <Button onClick={() => canNext && navigate("/add-card/success")} disabled={!canNext}>
        완료
      </Button>
    </div>
  );
}
