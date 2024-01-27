import styled, { css } from "styled-components";

interface ButtonProps {
  selected: boolean;
}

export const BoxContainer = styled.div`
  width: 448px;
  height: 55px;
  display: flex;
  flex-direction: row;
`;

const buttonStyle = css`
  width: 224.508px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 10px;
  color: white;
`;

export const ListButton = styled.button<ButtonProps>`
  ${buttonStyle}
  border-radius: 10px 0px 0px 10px;
  background-color: ${(props) => (props.selected ? "#34446D" : "#BABABA")};
`;

export const PostButton = styled.button<ButtonProps>`
  ${buttonStyle}
  border-radius: 0px 10px 10px 0px;
  background-color: ${(props) => (props.selected ? "#34446D" : "#BABABA")};
`;
