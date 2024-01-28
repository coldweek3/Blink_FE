import React from "react";
import * as S from "./style";
import Tag from "./Tag";

function Search() {
  // const displayText = text.length > 6 ? `${text.slice(0, 6)}...` : text;
  return (
    <S.Container>
      <S.Input />
      <span>최근 검색 지역</span>
      <S.TagConatainer>
        <Tag />
      </S.TagConatainer>
    </S.Container>
  );
}

export default Search;
