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
export const SignUpWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  gap: 60px;
`;
export const MainTxt60 = styled.div`
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
