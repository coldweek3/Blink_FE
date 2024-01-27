import React, { useState } from "react";
import * as S from "./style";

function SortOption() {
  const [selectedOption, setSelectedOption] = useState("recent");

  const handleButtonClick = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <S.OptionContainer>
      <S.RecentOption
        selected={selectedOption === "recent"}
        onClick={() => handleButtonClick("recent")}
      >
        · 최신순
      </S.RecentOption>
      <S.OldOption
        selected={selectedOption === "old"}
        onClick={() => handleButtonClick("old")}
      >
        · 오래된 순
      </S.OldOption>
    </S.OptionContainer>
  );
}

export default SortOption;
