import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  border-radius: ${props => props.borderRadius || '10px'};
  background-color: ${props => props.backgroundColor || '#ffffff'};
  border-bottom: ${props => props.borderBottom || 'none'};
  padding: ${props => props.padding || '0'};
`;

const BoxTitle = ({
  children,
  width,
  height,
  borderRadius,
  backgroundColor,
  borderBottom,
  padding,
}) => {
  return (
    <>
      <StyledBox
        width={width}
        height={height}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        borderBottom={borderBottom}
        padding={padding}
      >
        {children}
      </StyledBox>
    </>

  );
};

export default BoxTitle;
