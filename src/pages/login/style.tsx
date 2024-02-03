import styled from "styled-components";

interface bgColorProps {
  bgcolor: string;
}

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
`;
export const RightWrapper = styled.div`
  flex: 1;
`;
export const RowWrapper = styled.div`
  display: flex;
`;
export const SignUpWrapper = styled.div`
  flex: 1;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  gap: 60px;
`;
export const MainTxt60 = styled.div`
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #34446d;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  img {
    width: 490px;
    height: 631px;
    flex-shrink: 0;
  }
`;
export const RelativeWrapper = styled.div`
  position: relative;
`;
export const SignupBtn = styled.button<bgColorProps>`
  width: 200px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 50px;
  left: 160px;

  border-radius: 12px;
  border: 0;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);

  background-color: ${(props) => props.bgcolor};
  color: #fff;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const MainTxt50 = styled(MainTxt60)`
  font-size: 50px;
`;
export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
`;
export const PersonalInfo = styled.input`
  width: 85%;
  min-width: 740px;
  height: 101px;

  padding-left: 50px;
  border-radius: 15px;
  border: 0;

  background: #ecf1f6;
  font-family: "Noto Sans KR";
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  ::placeholder {
    color: #8999ae;
  }
`;
export const SelectSection = styled.div`
  width: 940px;
  display: flex;
  justify-content: space-between;
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const ExpertSignup = styled(SignupBtn)`
  position: static;
  width: 260px;
  height: 70px;
  font-size: 28px;
`;
export const SmallTxt = styled.div`
  color: #1b2130;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
`;
export const MoveToExpert = styled.img`
  width: 146px;
`;
