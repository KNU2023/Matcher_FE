import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  border-radius: ${props => props.borderRadius || '10px'};
  background-color: ${props => props.backgroundColor || '#ffffff'};
  border-bottom: ${props => props.borderBottom || 'none'};
  border-top: ${props => props.borderTop || 'none'};
  border-left: ${props => props.borderLeft || 'none'};
  border-right: ${props => props.borderRight || 'none'};
  box-shadow: ${props => props.boxShadow || 'none'};
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
`;

const BoxInput = ({
  children,
  width,
  height,
  borderRadius,
  backgroundColor,
  borderLeft,
  borderRight,
  borderTop,
  borderBottom,
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
      borderLeft={borderLeft}
      borderRight={borderRight}
      borderTop={borderTop}
      borderBottom={borderBottom}
      boxShadow={boxShadow}
      margin={margin}
      padding={padding}
    >
      {children}
    </StyledBox>
    </>
    
  );
};

export default BoxInput;
