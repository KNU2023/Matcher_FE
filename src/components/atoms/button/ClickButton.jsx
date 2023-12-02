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
  &.active {
    background-color: ${props => props.activeStyle?.backgroundColor || props.backgroundColor};
    border: ${props => props.activeStyle?.border || props.border};
    color: ${props => props.activeStyle?.color || props.color};
  }
`;

const ClickButton = ({
    children,
    key,
    width,
    height,
    fontSize,
    color,
    borderRadius,
    border,
    backgroundColor,
    boxShadow,
    margin,
    activeStyle,
    hoverStyle,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleButtonClick = () => {
        setIsActive(!isActive); // 클릭 시 isActive를 토글
    };

    return (
        <>
            <StyledButton
                key={key}
                width={width}
                height={height}
                fontSize={fontSize}
                color={color}
                borderRadius={borderRadius}
                border={border}
                backgroundColor={backgroundColor}
                boxShadow={boxShadow}
                margin={margin}
                onClick={handleButtonClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={isActive ? 'active' : ''}
                activeStyle={activeStyle}
                hoverStyle={isHovered ? hoverStyle : null}
            >
                {children}
            </StyledButton>
        </>

    );
};

export default ClickButton;