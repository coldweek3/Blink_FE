import React, { useEffect } from "react";
import * as S from "../../components/expert/style";
import { RecoilRoot } from "recoil";
import ExpertQuestion from "../../components/expert/ExpertQuestion";
import SearchComponent from "../../components/expert/SearchComponent";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedExpertTypeState } from "../../recoil/expertState";

const ExpertTypeList: React.FC = () => {
  const [selectedExpertType, setSelectedExpertType] = useRecoilState(
    selectedExpertTypeState
  );

  useEffect(() => {
    // 페이지가 로드될 때 로컬 스토리지에서 선택한 전문가 유형을 가져와서 설정
    const storedType = localStorage.getItem("selectedExpertType");
    if (storedType) {
      setSelectedExpertType(storedType);
    }
  }, []);

  return (
    <RecoilRoot>
      <S.ExpertWrapper>
        <SearchComponent />
        <ExpertQuestion />
        {/* <ExpertQuestion currentPath={currentPath} /> */}
      </S.ExpertWrapper>
    </RecoilRoot>
  );
};

export default ExpertTypeList;
