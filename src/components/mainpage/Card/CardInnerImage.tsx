import React from "react";
import * as S from "./style";
import testMap from "../../../assets/image/test/testMap.svg";

function CardInnerImage() {
  return (
    <S.ImageContainer>
      <S.InnerImage src={testMap} />
      <S.ButtonTopLeft>블박 플레이</S.ButtonTopLeft>
      <S.ButtonBottomRightFirst>찾아요</S.ButtonBottomRightFirst>
      <S.ButtonBottomRightSecond>제보해요</S.ButtonBottomRightSecond>
    </S.ImageContainer>
  );
}
export default CardInnerImage;
