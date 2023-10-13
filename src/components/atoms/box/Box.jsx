import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  border-radius: ${props => props.borderRadius || '10px'};
  background-color: ${props => props.backgroundColor || '#ffffff'};
  border: ${props => props.border || 'none'};
  box-shadow: ${props => props.boxShadow || 'none'};
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};

`;

const Box = ({
  children,
  width,
  height,
  borderRadius,
  backgroundColor,
  border,
  boxShadow,
  margin,
  padding,
}) => {
  return (
    <>
    <StyledBox
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      border={border}
      boxShadow={boxShadow}
      margin={margin}
      padding={padding}
    >
      {children}
    </StyledBox>
    </>
    
  );
};

export default Box;
