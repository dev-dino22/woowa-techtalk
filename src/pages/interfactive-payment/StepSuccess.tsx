import { useNavigate } from "react-router";
import Button from "../../shared/components/actions/button/Button";
import styled from "@emotion/styled";

export default function StepSuccess() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Title>카드 등록 완료!</S.Title>
      <S.Footer>
        <Button onClick={() => navigate("/")}>홈으로 가기</Button>
      </S.Footer>
    </S.Container>
  );
}

const S = {
    Container: styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    Title: styled.h2`
        font: ${({theme}) => theme.FONTS.heading.medium};
    `,
    Description: styled.p`
        margin-bottom: 48px;

        color: ${({theme}) => theme.PALETTE.gray[50]};

        font: ${({theme}) => theme.FONTS.body.small};
    `,
    Footer: styled.footer`
        width: 100%;
        max-width: 640px;
        position: fixed;
        bottom: 48px;
    `,
}