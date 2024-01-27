import styled, { css } from "styled-components";

interface OptionProps {
  selected: boolean;
}

export const OptionContainer = styled.div`
  width: 185px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px 0 10px auto;
`;

const optionStyle = css`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const RecentOption = styled.span<OptionProps>`
  ${optionStyle}
  font-weight: bold;
  color: ${(props) => (props.selected ? "#34446D" : "#BABABA")};
`;

export const OldOption = styled.span<OptionProps>`
  ${optionStyle}
  font-weight: bold;
  color: ${(props) => (props.selected ? "#34446D" : "#BABABA")};
`;
