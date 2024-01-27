import React from "react";
import * as S from "./style";

const Card = () => {
  function handleButtonClick() {
    alert("버튼 클릭 이벤트 발생");
  }

  return (
    <S.CardBox>
      <S.ButtonContainer>
        <S.ButtonPrimary onClick={handleButtonClick}>진행 중</S.ButtonPrimary>
        <S.ButtonSecondary onClick={handleButtonClick}>
          찾아요
        </S.ButtonSecondary>
      </S.ButtonContainer>
      <S.Content>
        인생이 힘들다
        <br />전 인생이 뭔지 모르겠어요..
      </S.Content>
    </S.CardBox>
  );
};

export default Card;
