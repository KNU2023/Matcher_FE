import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

const DivWrapper = ({ children, padding, margin }) => {
  return (
    <>
      <StyledDiv padding={padding} margin={margin}>
        {children}
      </StyledDiv>
    </>
  );
};

export default DivWrapper;
