import React from "react";
import * as S from "./style";

const LoginSignUp = () => {
  return (
    <S.LoginSignUpWrapper>
      <S.WhiteMainText>Hello, Friend!</S.WhiteMainText>
      <S.WhiteSubText>
        Sign up and discover
        <br />a great amount of
        <br />
        dash cam!
      </S.WhiteSubText>
      <S.WhiteBtn>회원가입</S.WhiteBtn>
    </S.LoginSignUpWrapper>
  );
};

export default LoginSignUp;
