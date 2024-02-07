import React from "react";
import * as S from "../../components/expert/style";
import SearchComponent from "../../components/expert/SearchComponent";
import ExpertList from "../../components/expert/ExpertList";
import ExpertQuestion from "../../components/expert/ExpertQuestion";

const Login = () => {
  return (
    <S.ExpertWrapper>
      <SearchComponent />
      <ExpertList />
      <ExpertQuestion />
    </S.ExpertWrapper>
  );
};

export default Login;
