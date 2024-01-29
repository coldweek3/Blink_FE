import styled from "styled-components";

// -------LoginSignUp------
export const LoginSignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 450px;
  height: 100vh;
  background-color: #1b2130;
  color: #fff;
`;
export const WhiteMainText = styled.div`
  font-family: "Noto Sans KR";
  font-size: 45px;
  font-weight: 500;

  margin-bottom: 28px;
`;
export const WhiteSubText = styled.div`
  font-family: "Noto Sans KR";
  font-size: 28px;
  font-weight: 400;
  text-align: center;

  margin-bottom: 48px;
`;
export const WhiteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60%;
  height: 110px;

  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);

  color: #34446d;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

// -------LoginSection------
export const LoginSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LoginMainTxt = styled.div`
  color: #34446d;
  font-family: "Noto Sans KR";
  font-size: 50px;
  font-weight: 500;
  margin-bottom: 30px;
`;
export const LoginInput = styled.input`
  width: 70%;
  height: 60px;
  margin-bottom: 18px;

  font-family: "Noto Sans KR";
  color: #34446d;
  font-size: 32px;
  font-weight: 500;

  border-radius: 15px;
  border: 0;
  background: #eff4f9;
  padding: 0 40px;
  ::placeholder {
    color: #a2b0c4;
  }
`;
export const LoginBtn = styled.button`
  width: 160px;
  height: 60px;
  margin: 30px 0 48px 0;

  border-radius: 12px;
  border: 1px solid #3865bf;
  background: #3865bf;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);

  color: #fff;
  font-size: 30px;
  font-weight: 700;
`;

// -------SocialLogin------
export const SocialLoginWrapper = styled.div``;
export const SmallTxt = styled.div`
  color: #a9b7ca;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-weight: 500;
`;
export const FlexRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 50px 0;
`;
