import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

const Img = ({ children, padding, margin }) => {
  return (
    <>
      <StyledImg padding={padding} margin={margin} src={children} alt="이미지"/>
    </>
  );
};

export default Img;
