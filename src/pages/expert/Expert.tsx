import React from "react";
import * as S from "../../components/expert/style";
import SearchComponent from "../../components/expert/SearchComponent";
import ExpertList from "../../components/expert/ExpertList";
import ExpertQuestion from "../../components/expert/ExpertQuestion";
import { useLocation } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { useRecoilState } from "recoil";
import { selectedExpertTypeState } from "../../recoil/expertState";

const Expert = () => {
  const [selectedExpertType, setSelectedExpertType] = useRecoilState(
    selectedExpertTypeState
  );
  return (
    <RecoilRoot>
      <S.ExpertWrapper>
        <SearchComponent />
        <ExpertList />
        <ExpertQuestion />
      </S.ExpertWrapper>
    </RecoilRoot>
  );
};

export default Expert;
