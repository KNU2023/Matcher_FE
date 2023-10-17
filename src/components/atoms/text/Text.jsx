import React from 'react';
import styled from 'styled-components';

const StyledText = styled.span`
  font-size: ${props => props.size || '10px'};
  color: ${props => props.color || '#000000'};
  font-weight: ${props => props.weight || 'normal'};
  margin: ${props => props.margin || '0'};
  display: ${props => props.display || 'inline'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'center'};
  text-align: ${props => props.textAlign || 'left'};
  cursor: ${props => props.cursor || 'default'};
  text-decoration: ${props => props.active ? 'underline' : 'none'};
`;

const Text = ({
    children,
    size,
    color,
    weight,
    margin,
    display,
    flexDirection,
    justifyContent,
    textAlign,
    active,
    onClick,
    cursor,
}) => {
    return (
        <>
            <StyledText
                size={size}
                color={color}
                weight={weight}
                margin={margin}
                display={display}
                flexDirection={flexDirection}
                justifyContent={justifyContent}
                textAlign={textAlign}
                onClick={onClick}
                active={active}
                cursor={cursor}
            >
                {children}
            </StyledText>
        </>

    );
};

export default Text;
