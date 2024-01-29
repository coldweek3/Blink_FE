import styled from "styled-components";

export const CardBox = styled.div`
  display: flex;
  width: 416px;
  height: 310px;
  flex-shrink: 0;
  padding-bottom: 6px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  background-color: #e7e9ed;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonPrimary = styled(Button)`
  background-color: #007aff; // Replace with the exact blue from your screenshot
  color: white;
  border: none;
`;

export const ButtonSecondary = styled(Button)`
  background-color: transparent;
  color: #007aff;
  border: 1px solid #007aff;
`;
export const ContentTitle = styled.p`
  color: #1e2025;

  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.4px;
  padding-left: 10px;
`;

export const ContentInfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ContentInfoText = styled.p`
  color: #7f8082;

  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
  padding-left: 10px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 416px;
  height: 310px;
`;

export const InnerImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ButtonTopLeft = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const ButtonBottomRightFirst = styled.button`
  position: absolute;
  bottom: 10px;
  right: 110px;
`;

export const ButtonBottomRightSecond = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
