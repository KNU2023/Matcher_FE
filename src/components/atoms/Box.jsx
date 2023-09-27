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
  display: ${props => props.display || 'inline'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  text-align: ${props => props.textAlign || 'left'};
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
  display,
  flexDirection,
  justifyContent,
  textAlign,
}) => {
  return (
    <StyledBox
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      border={border}
      boxShadow={boxShadow}
      margin={margin}
      padding={padding}
      display={display}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      textAlign={textAlign}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
