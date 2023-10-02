import React from 'react';
import styled from 'styled-components';

const StyledText = styled.span`
  font-size: ${props => props.size || '16px'};
  color: ${props => props.color || '#333'};
  font-weight: ${props => props.weight || 'normal'};
  margin: ${props => props.margin || '0'};
  display: ${props => props.display || 'inline'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  text-align: ${props => props.textAlign || 'left'};
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
            >
                {children}
            </StyledText>
        </>

    );
};

export default Text;
