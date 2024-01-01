import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledText = styled.h1`
  font-size: 2em;
  color: #3498db;
`;
function App() {
  return (
    <StyledContainer>
      <StyledText>Happy New Year 2024</StyledText>
    </StyledContainer>
  );
}

export default App;
