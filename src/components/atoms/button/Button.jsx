import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  font-size: ${props => props.fontSize || '1rem'};
  color: ${props => props.color || '#8B95A1'};
  border-radius: ${props => props.borderRadius || '10px'};
  border: ${props => props.border || 'none'};
  background-color: ${props => props.backgroundColor || '#007bff'};
  box-shadow: ${props => props.boxShadow || 'none'};
  margin: ${props => props.margin || '0'};
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: ${props => props.hoverStyle?.backgroundColor || props.backgroundColor};
    box-shadow: ${props => props.hoverStyle?.boxShadow || props.boxShadow};
    color: ${props => props.hoverStyle?.color || props.color};
  }
`;

const Button = ({
  children,
  width,
  height,
  fontSize,
  color,
  borderRadius,
  border,
  backgroundColor,
  boxshadow,
  margin,
  onClick,
  hoverStyle,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <>
      <StyledButton
        width={width}
        height={height}
        fontSize={fontSize}
        color={color}
        borderRadius={borderRadius}
        border={border}
        backgroundColor={backgroundColor}
        boxShadow={boxshadow}
        margin={margin}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        hoverStyle={isHovered ? hoverStyle : null}
      >
        {children}
      </StyledButton>
    </>

  );
};

export default Button;
