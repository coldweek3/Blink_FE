import React from "react";
import * as S from "./style";
import General from "../../assets/image/login/general_member.png";
import Expert from "../../assets/image/login/expert_member.png";

const SignUp = () => {
  return (
    <S.SignUpWrapper>
      <S.MainTxt60>Sign up to Blink!</S.MainTxt60>
      <S.FlexBox>
        <S.RelativeWrapper>
          <img src={General} alt="" />
          <S.SignupBtn bgcolor="#5F6977">일반 회원가입</S.SignupBtn>
        </S.RelativeWrapper>
        <S.RelativeWrapper>
          <img src={Expert} alt="" />
          <S.SignupBtn bgcolor="#0773EA">전문가 회원가입</S.SignupBtn>
        </S.RelativeWrapper>
      </S.FlexBox>
    </S.SignUpWrapper>
  );
};

export default SignUp;
