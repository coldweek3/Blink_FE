import React from "react";
import CardContainer from "../../components/mainpage/CardContainer/CardContainer";
import Search from "../../components/mainpage/SearchContainer/Search";

const Mainpage = () => {
  return (
    <>
      <Search />
      <CardContainer />; // 여기엔 구글맵 컴포넌트가 들어갈 예정
    </>
  );
};

export default Mainpage;
