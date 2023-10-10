import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  font-size: ${props => props.fontSize || '1rem'};
  color: ${props => props.color || '#000000'};
  border-radius: ${props => props.borderRadius || '10px'};
  border: ${props => props.border || 'none'};
  background-color: ${props => props.backgroundColor || '#ffffff'};
  box-shadow: ${props => props.boxShadow || 'none'};
  padding: ${props => props.padding || '0'};
  margin: ${props => props.margin || '0'};
  outline: none;

  &:focus {
    /* 포커스가 있는 경우에만 스타일을 적용합니다. */
    border: none; /* 경계선 없애기 */
    /* 다른 스타일 속성 추가 가능 */
  }
`;

const Input = ({
  type,
  width,
  height,
  fontSize,
  color,
  borderRadius,
  border,
  backgroundColor,
  boxShadow,
  margin,
  padding,
  ...restProps
}) => {
  return (
    <StyledInput
      type={type}
      width={width}
      height={height}
      fontSize={fontSize}
      color={color}
      borderRadius={borderRadius}
      border={border}
      backgroundColor={backgroundColor}
      boxShadow={boxShadow}
      padding={padding}
      margin={margin}
      {...restProps}
    />
  );
};

export default Input;
