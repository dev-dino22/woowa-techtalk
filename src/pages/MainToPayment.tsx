
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import { ROUTE_PATH } from '../routes/routePath';


function MainToPayment() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Content>
        <S.IconWrapper>
          <S.CardIcon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="2" />
            <path d="M2 10H22" stroke="white" strokeWidth="2" />
            <path d="M6 16H10" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </S.CardIcon>
        </S.IconWrapper>

        <S.MessageContainer>
          <S.Title>카드 등록</S.Title>
          <S.Description>카드를 등록하고 다양한 혜택을 받아보세요.</S.Description>
        </S.MessageContainer>

        <S.RegisterButton onClick={() => navigate(ROUTE_PATH.DEFAULT_PAYMENT)}>카드 등록하러 가기</S.RegisterButton>
        <S.RegisterButton onClick={() => navigate(ROUTE_PATH.INTERACTIVE_PAYMENT)}>인터랙티브 카드 등록하러 가기</S.RegisterButton>
      </S.Content>
    </S.Container>
  );
}

export default MainToPayment;


const S = {
  Container: styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 20px;

    background-color: white;
`,
  Content: styled.div`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  IconWrapper: styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 40px;

    background-color: #333;
    border-radius: 50%;

    @media (width <= 480px) {
      width: 70px;
      height: 70px;
    }
  `,
  CardIcon: styled.svg`
    width: 40px;
    height: 40px;

    @media (width <= 480px) {
      width: 35px;
      height: 35px;
    }
  `,
  MessageContainer: styled.div`
    margin-bottom: 40px;

    text-align: center;
  `,
  Title: styled.h1`
    margin: 0 0 16px;

    color: #333;
    font-size: 28px;
    font-weight: 700;

    @media (width <= 480px) {
      font-size: 24px;
    }
  `,
  Description: styled.p`
    margin: 0;

    color: #666;
    font-size: 18px;
    line-height: 1.5;

    @media (width <= 480px) {
      font-size: 16px;
    }
  `,
  RegisterButton: styled.button`
    width: 100%;

    margin-top: 20px;
    padding: 16px;
    border: none;

    background-color: #333;

    color: white;

    font-size: 16px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: #444;
    }
  `,
};
