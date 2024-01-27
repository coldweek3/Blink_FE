import styled, { css } from "styled-components";
import search from "../../../assets/Icon/search.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 490px;
  height: 214px;
  flex-shrink: 0;
  background-color: #c6d4e4;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
`;

export const Input = styled.input.attrs({
  type: "text",
  placeholder: "어떤 지역의 제보를 찾으시나요?",
})`
  display: block; 
  width: 384px;
  height: 24px;
  padding: 16px 20px; 
  font-size: 1rem; 
  line-height: 1.5; 
  color: #333; 
  border-radius: 10px; 
  border: 1px solid #ddedff;
  /* outline: none; // 클릭 시 외곽선 제거 */

  // 입력창 내부에 검색 아이콘을 배치하기 위한 스타일
  background: #fff url(${search}) no-repeat right 16px center;
  background-size: 20px;

  // 플레이스홀더 스타일
  &::placeholder {
    color: #a5a5a5; 

  // 입력창 포커스 시 스타일
  &:focus {
    border-color: #007aff; // 포커스 됐을 때 테두리 색상
  }
`;
