import React from "react";
import * as S from "./style";
import CardInnerImage from "./CardInnerImage";

const Card = () => {
  function handleButtonClick() {
    alert("버튼 클릭 이벤트 발생");
  }

  return (
    <S.CardBox>
      <CardInnerImage />
      {/* <S.ButtonContainer>
        <S.ButtonPrimary onClick={handleButtonClick}>진행 중</S.ButtonPrimary>
        <S.ButtonSecondary onClick={handleButtonClick}>
          찾아요
        </S.ButtonSecondary>
      </S.ButtonContainer> */}
      <S.ContentTitle>인생이 힘들다</S.ContentTitle>
      <S.ContentInfoContainer>
        <S.ContentInfoText>2024.01.30 | 조회 2,000</S.ContentInfoText>
        <S.ContentInfoText>내 위치에서 2.1km</S.ContentInfoText>
      </S.ContentInfoContainer>
    </S.CardBox>
  );
};

export default Card;
