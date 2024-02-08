import React, { useState, useEffect } from "react";
import * as S from "./style";
import ExpertCard from "./ExpertCard";
import { useRecoilValue } from "recoil";
import { selectedExpertTypeState } from "../../recoil/expertState";

const ExpertTypeListCard: React.FC = () => {
  const selectedExpertType = useRecoilValue(selectedExpertTypeState);
  const [expertListTitle, setExpertListTitle] = useState("");

  useEffect(() => {
    // selectedExpertType 상태가 변경될 때마다 expertListTitle 업데이트
    setExpertListTitle(selectedExpertType);
  }, [selectedExpertType]);

  return (
    <S.ExpertListWrapper>
      <S.ExpertListTitleContainer marginTop="40px">
        <S.ExpertListTitle>{expertListTitle}</S.ExpertListTitle>
        <S.ExpertListSubtitle> B:Link 전문가</S.ExpertListSubtitle>
      </S.ExpertListTitleContainer>
      <S.ExpertListCardContainer>
        {/* <ExpertCard /> */}
      </S.ExpertListCardContainer>
    </S.ExpertListWrapper>
  );
};

export default ExpertTypeListCard;
