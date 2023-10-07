import React from "react";
import styled, { keyframes } from "styled-components";

// Define the loading animation keyframes
const loadingAnimation = keyframes`
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }

  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }

  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
`;

const StyledDiv = styled.div`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  border-radius: ${(props) => props.borderRadius || "10px"};
  background-color: ${(props) => props.backgroundColor || "#ffffff"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  overflow: ${(props) => props.overflow || "hidden"};
  position: ${(props) => props.position || "relative"};
  animation: ${loadingAnimation} 1.5s infinite linear; // Apply the loading animation

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: loading 2s infinite linear;
  }
`;

const Skeleton = (props) => {
  return <StyledDiv {...props} />;
};

export default Skeleton;
