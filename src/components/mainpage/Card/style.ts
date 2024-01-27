import styled from "styled-components";

export const CardBox = styled.div`
  display: flex;
  width: 450px;
  height: 131px;
  padding: 16px;
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
  color: #007aff; // Replace with the exact blue from your screenshot
  border: 1px solid #007aff; // Replace with the exact blue from your screenshot
`;

export const Content = styled.p`
  color: #333; // Replace with the exact color from your screenshot
  font-size: 16px;
  line-height: 1.5;
  margin-top: 16px;
`;
