import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
`;

const Img = ({ children, padding, margin, width, height }) => {
  return (
    <>
      <StyledImg
        width={width}
        height={height}
        padding={padding}
        margin={margin}
        src={children}
        alt="이미지" />
    </>
  );
};

export default Img;
