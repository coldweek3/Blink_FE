import React, { useState, useEffect } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import criminal from "../../assets/image/expert/형사전문.png";
import onCriminal from "../../assets/image/expert/형사전문_On.png";
import civil from "../../assets/image/expert/민사전문.png";
import onCivil from "../../assets/image/expert/민사전문_On.png";
import traffic from "../../assets/image/expert/교통사고.png";
import onTraffic from "../../assets/image/expert/교통사고_On.png";
import child from "../../assets/image/expert/어린이사고.png";
import onChild from "../../assets/image/expert/어린이사고_On.png";
import dashcam from "../../assets/image/expert/블랙박스.png";
import onDashcam from "../../assets/image/expert/블랙박스_On.png";
import etc from "../../assets/image/expert/기타상담.png";
import onEtc from "../../assets/image/expert/기타상담_On.png";

import { useRecoilState } from "recoil";
import { selectedExpertTypeState } from "../../../src/recoil/expertState";

const ExpertQuestion: React.FC = () => {
  const [selectedExpertType, setSelectedExpertType] = useRecoilState(
    selectedExpertTypeState
  );

  useEffect(() => {
    const storedType = localStorage.getItem("selectedExpertType");
    if (storedType) {
      setSelectedExpertType(storedType);
    }
  }, []);

  const handleExpertTypeClick = (type: string) => {
    setSelectedExpertType(type);
    localStorage.setItem("selectedExpertType", type);
  };

  return (
    <S.ExpertQuestionWrapper>
      <S.ExpertQuestionTitle>어떤 전문가를 찾으시나요?</S.ExpertQuestionTitle>
      <S.ExpertQuestionContainer>
        <Link
          to="/ExpertTypeList"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <S.ExpertType onClick={() => handleExpertTypeClick("형사 전문")}>
            <S.ExpertTypeImg
              src={selectedExpertType === "형사 전문" ? onCriminal : criminal}
            />
            <S.ExpertTypeTitle selected={selectedExpertType === "형사 전문"}>
              형사 전문
            </S.ExpertTypeTitle>
          </S.ExpertType>
        </Link>
        <Link
          to="/ExpertTypeList"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <S.ExpertType onClick={() => handleExpertTypeClick("민사 전문")}>
            <S.ExpertTypeImg
              src={selectedExpertType === "민사 전문" ? onCivil : civil}
            />
            <S.ExpertTypeTitle selected={selectedExpertType === "민사 전문"}>
              민사 전문
            </S.ExpertTypeTitle>
          </S.ExpertType>
        </Link>
        <Link
          to="/ExpertTypeList"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <S.ExpertType onClick={() => handleExpertTypeClick("교통사고")}>
            <S.ExpertTypeImg
              src={selectedExpertType === "교통사고" ? onTraffic : traffic}
            />
            <S.ExpertTypeTitle selected={selectedExpertType === "교통사고"}>
              교통사고
            </S.ExpertTypeTitle>
          </S.ExpertType>
        </Link>
        <Link
          to="/ExpertTypeList"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <S.ExpertType onClick={() => handleExpertTypeClick("어린이 사고")}>
            <S.ExpertTypeImg
              src={selectedExpertType === "어린이 사고" ? onChild : child}
            />
            <S.ExpertTypeTitle selected={selectedExpertType === "어린이 사고"}>
              어린이 사고
            </S.ExpertTypeTitle>
          </S.ExpertType>
        </Link>
        <Link
          to="/ExpertTypeList"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <S.ExpertType onClick={() => handleExpertTypeClick("블랙박스")}>
            <S.ExpertTypeImg
              src={selectedExpertType === "블랙박스" ? onDashcam : dashcam}
            />
            <S.ExpertTypeTitle selected={selectedExpertType === "블랙박스"}>
              블랙박스
            </S.ExpertTypeTitle>
          </S.ExpertType>
        </Link>
        <Link
          to="/ExpertTypeList"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <S.ExpertType onClick={() => handleExpertTypeClick("기타 상담")}>
            <S.ExpertTypeImg
              src={selectedExpertType === "기타 상담" ? onEtc : etc}
            />
            <S.ExpertTypeTitle selected={selectedExpertType === "기타 상담"}>
              기타 상담
            </S.ExpertTypeTitle>
          </S.ExpertType>
        </Link>
      </S.ExpertQuestionContainer>
    </S.ExpertQuestionWrapper>
  );
};

export default ExpertQuestion;
