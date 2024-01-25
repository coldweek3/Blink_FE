import React from "react";
import * as S from "./style";

const ListButton = () => {
  return (
    <S.BoxContainer>
      <button>전체 목록</button>
      <button>글 등록하기</button>
    </S.BoxContainer>
  );
};

export default ListButton;
