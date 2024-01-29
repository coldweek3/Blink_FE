import styled from "styled-components";

export const GuideWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 368px;
  height: 100vh;

  background-color: #1b2130;
  color: #fff;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;

  gap: 70px;
  img {
    width: 70px;
  }
`;
export const BottomTxt = styled.div`
  position: absolute;
  bottom: 20px;

  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
