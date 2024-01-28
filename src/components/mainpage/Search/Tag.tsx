import React from "react";
import * as S from "./style";

function Tag() {
  const recentSearchData = [
    "동국대학교",
    "충무로",
    "종로",
    "종각",
    "혜화",
    "압구정",
  ];

  function buttonClick() {
    alert("X 버튼 클릭 이벤트 발생");
  }

  return (
    <div>
      {recentSearchData.map((data, index) => (
        <S.Tag key={index}>
          {data}
          <S.XButton onClick={buttonClick} />
        </S.Tag>
      ))}
    </div>
  );
}

export default Tag;
