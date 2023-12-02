import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  position: relative; /* 추가된 부분 */
  display: block;
  font-size: ${(props) => props.fontsize || "1rem"};
  white-space: pre-wrap;
  word-wrap: break-word;
`;



const Img = ({ src, padding, margin, width, height, alt, fontsize }) => {
  
  return (
    <>
      <StyledImg
        width={width}
        height={height}
        padding={padding}
        margin={margin}
        fontsize={fontsize}
        src={src}
        alt={alt}
      />
    </>
  );
};


export default Img;
