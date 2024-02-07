import React from "react";
import * as S from "../../components/expert/style";
import SearchComponent from "../../components/expert/SearchComponent";
import ExpertList from "../../components/expert/ExpertList";

const Login = () => {
  return (
    <S.ExpertWrapper>
      <SearchComponent />
      <ExpertList />
    </S.ExpertWrapper>
  );
};

export default Login;
