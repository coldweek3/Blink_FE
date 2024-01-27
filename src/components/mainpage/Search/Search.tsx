import React from "react";
import * as S from "./style";

function Search() {
  // const displayText = text.length > 6 ? `${text.slice(0, 6)}...` : text;
  return (
    <S.Container>
      <S.Input />
      <span>최근 검색 지역</span>
      <S.TagConatainer>
        <S.Tag>하</S.Tag>
        <S.Tag>하나</S.Tag>
        <S.Tag>하나나나</S.Tag>
        <S.Tag>하나나나나</S.Tag>
        <S.Tag>하나나나나나</S.Tag>
        <S.Tag>하나나나나나</S.Tag>
        <S.Tag>하나나나나나</S.Tag>
      </S.TagConatainer>
    </S.Container>
  );
}

export default Search;
