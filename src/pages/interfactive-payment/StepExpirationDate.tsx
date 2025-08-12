import styled from "@emotion/styled";
import { useNavigate, useOutletContext } from "react-router";
import { generateRouterPath } from "../../routes/routePath";
import Button from "../../shared/components/actions/Button";
import FloatInput from "../../shared/components/actions/FloatInput";
import FadeIn from "../../shared/components/animations/FadeIn";
import type { AddCardContextType } from "./Main";
import SlideIn from "../../shared/components/animations/SlideIn";

function StepExpirationDate() {
  const navigate = useNavigate();
  const { expiration, handleExpirationMonthChange, handleExpirationYearChange, handleProgressPlus } = useOutletContext<AddCardContextType>();

  const handleNext = () => {
      navigate(generateRouterPath.interactivePaymentCVC());
      handleProgressPlus();
  }

  return (
    <S.Container>
        <SlideIn>
                <S.Title>카드 유효기간을 입력해 주세요</S.Title>
                <S.Description>월/년도(MMYY)를 순서대로 입력해 주세요.</S.Description>
        </SlideIn>
        <FadeIn delay={0.5}>
            <S.InputField>
                {["MONTH", "YEAR"].map((field) => {
                    const name = field.toLowerCase() as "month" | "year";
                    return (
                    <FloatInput
                        label={field === "MONTH" ? "월(MM)" : "년도(YY)"}
                        key={name}
                        type="tel"
                        name={name}
                        value={expiration[name]}
                        onChange={(e) => {
                        if (field === "MONTH") {
                            handleExpirationMonthChange(e.target.value);
                        } else {
                            handleExpirationYearChange(e.target.value);
                        }
                        }}
                        maxLength={2}
                    />
                    );
                })}
            </S.InputField>
        </FadeIn>
        <S.Footer>
            <Button onClick={handleNext}>
                다음
            </Button>
        </S.Footer>
    </S.Container>
  );
}

export default StepExpirationDate;

const S = {
    Container: styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
    `,
    Title: styled.h2`
        font: ${({theme}) => theme.FONTS.heading.medium};
    `,
    Description: styled.p`
        margin-bottom: 48px;

        color: ${({theme}) => theme.PALETTE.gray[50]};

        font: ${({theme}) => theme.FONTS.body.small};
    `,
    InputField: styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        gap: 8px;
    `,
    Footer: styled.footer`
        width: 100%;
        max-width: 640px;
        position: fixed;
        bottom: 48px;
    `,
}
