import React from 'react';
import styled from '@emotion/styled';

interface CardBrandLogoProps {
  cardType: string;
  isMaster: boolean;
}

const CardBrandLogo: React.FC<CardBrandLogoProps> = ({ cardType, isMaster }) => {
  return (
    <S.LogoContainer>
      {isMaster ? (
        <S.GoldBox />
      ) : (
        cardType !== "" && (
          <S.LogoBrand src={`/${cardType}.png`} alt={`${cardType} logo`} />
        )
      )}
    </S.LogoContainer>
  );
};

export default CardBrandLogo;

const S = {
LogoContainer: styled.div`
  display: flex;
  justify-content: space-between;
`,
GoldBox: styled.div`
  width: 36px;
  height: 22px;

  background-color: var(--gold);
  border-radius: 4px;
`,
    LogoBrand: styled.img`
  width: 36px;
  height: 22px;
  border-radius: 4px;
`
}