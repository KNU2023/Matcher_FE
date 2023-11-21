import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  font-size: ${props => props.fontSize || '1rem'};
  color: ${props => props.color || '#000000'};
  border-radius: ${props => props.borderRadius || '10px'};
  border: ${props => props.border || 'none'};
  background-color: ${props => props.backgroundColor || '#ffffff'};
  box-shadow: ${props => props.boxShadow || 'none'};
  padding: ${props => props.padding || '0'};
  margin-top: ${props => props.marginTop || '0'};
  margin-bottom: ${props => props.marginBottom || '0'};
  display: ${props => props.display || 'block'};
  outline: none;
  overflow: auto;
  resize: ${props => props.reSize || 'none'};

  &:focus {
    /* 포커스가 있는 경우에만 스타일을 적용합니다. */
    border: ${props => props.border || 'none'}; /* 경계선 없애기 */
    /* 다른 스타일 속성 추가 가능 */
  }
  &::-webkit-scrollbar {
        width: 8px; /* Width of scrollbar */
        height: 0px; /* Set to 0 for horizontal scrollbar */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #C0C0C0; /* Scrollbar color */
        border-radius: 4px; /* Round the corners of the scrollbar */
    }

    &::-webkit-scrollbar-track {
        background-color: #f1f1f1; /* Color of scrollbar track */
    }
`;

const TextArea = ({
    id,
    type,
    rows,
    width,
    height,
    fontSize,
    color,
    borderRadius,
    border,
    backgroundColor,
    boxShadow,
    marginTop,
    marginBottom,
    padding,
    value,
    onChange,
    reSize,
    ...restProps
}) => {
    return (
        <StyledTextArea
            id={id}
            type={type}
            rows={rows}
            width={width}
            height={height}
            fontSize={fontSize}
            color={color}
            borderRadius={borderRadius}
            border={border}
            backgroundColor={backgroundColor}
            boxShadow={boxShadow}
            padding={padding}
            marginTop={marginTop}
            marginBottom={marginBottom}
            value={value}
            onChange={onChange}
            reSize={reSize}
            {...restProps}
        />
    );
};

export default TextArea;
