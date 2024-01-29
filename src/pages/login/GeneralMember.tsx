import React from "react";
import * as S from "./style";
import Move from "../../assets/image/login/move_expert.png";
import { useNavigate } from "react-router-dom";

const GeneralMember = () => {
  const navigate = useNavigate();

  return (
    <S.SignUpWrapper>
      <S.MainTxt50>Sign up to Blink!</S.MainTxt50>
      <S.InfoWrapper>
        <S.PersonalInfo placeholder="사용하실 아이디를 입력해주세요" />
        <S.PersonalInfo placeholder="사용하실 비밀번호를 입력해주세요" />
        <S.PersonalInfo placeholder="비밀번호를 다시 한번 입력해주세요" />
        <S.PersonalInfo placeholder="사용하실 닉네임을 작성해주세요" />
      </S.InfoWrapper>
      <S.ExpertSignup bgcolor="#0773EA">회원가입 완료하기</S.ExpertSignup>
      <S.InfoWrapper>
        <S.SmallTxt>
          변호사, 손해사정사 등 전문가이신가요?
          <br />
          전문가 회원으로 전용 기능을 누려보세요.
        </S.SmallTxt>
        <S.MoveToExpert
          onClick={() => navigate("/signup/expertMember")}
          src={Move}
          alt="전문가 가입 >"
        />
      </S.InfoWrapper>
    </S.SignUpWrapper>
  );
};

export default GeneralMember;
