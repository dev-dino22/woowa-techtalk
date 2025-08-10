import { useNavigate, useOutletContext } from "react-router";
import { generateRouterPath } from "../../routes/routePath";
import Button from "../../shared/components/actions/button/Button";
import Input from "../../shared/components/actions/Input";
import InputField from "../../shared/components/actions/inputField/InputField";
import type { AddCardContextType } from "./AddCardLayout";
import styled from "@emotion/styled";

function StepExpirationDate() {
  const navigate = useNavigate();
  const { expiration, handleExpirationMonthChange, handleExpirationYearChange } = useOutletContext<AddCardContextType>();


  return (
    <div>
    <InputField
      title="카드 유효기간을 입력해 주세요."
      description="월/년도(MMYY)를 순서대로 입력해 주세요."
      label="유효기간"
    >
      {["MONTH", "YEAR"].map((field, i) => {
        const name = field.toLowerCase() as "month" | "year";

        return (
          <Input
            key={name}
            type="tel"
            name={name}
            value={expiration[name]}
            placeholder={field === "MONTH" ? "MM" : "YY"}
            onChange={(e) => {
              if (field === "MONTH") {
                handleExpirationMonthChange(e.target.value);
              } else {
                handleExpirationYearChange(e.target.value);
              }
            }}
            maxLength={2}
            autoFocus={i === 0}
          />
        );
      })}
    </InputField>
    <S.Footer>
      <Button onClick={() => navigate((generateRouterPath.interactivePaymentCVC()))}>
        다음
      </Button>
      </S.Footer>
    </div>
  );
}

export default StepExpirationDate;

const S = {
    Footer: styled.footer`
        width: 100%;
        max-width: 640px;
        position: fixed;
        bottom: 48px;
    `,
}
