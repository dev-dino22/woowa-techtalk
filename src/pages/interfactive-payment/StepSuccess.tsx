import { useNavigate } from "react-router";
import Button from "../../shared/components/actions/button/Button";

export default function StepSuccess() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>카드 등록 완료!</h2>
      <Button onClick={() => navigate("/")}>홈으로 가기</Button>
    </div>
  );
}
