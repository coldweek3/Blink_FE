import React, { useState } from "react";
import * as S from "./style";

const ListButton = () => {
  const [selectedButton, setSelectedButton] = useState("list");

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <S.BoxContainer>
      <S.ListButton
        selected={selectedButton === "list"}
        onClick={() => handleButtonClick("list")}
      >
        전체 목록
      </S.ListButton>
      <S.PostButton
        selected={selectedButton === "post"}
        onClick={() => handleButtonClick("post")}
      >
        글 등록하기
      </S.PostButton>
    </S.BoxContainer>
  );
};

export default ListButton;
