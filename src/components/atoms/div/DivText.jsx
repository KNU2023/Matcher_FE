import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: ${props => props.display || 'inline'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  text-align: ${props => props.textAlign || 'left'};
  `;

const DivText = ({
    children,
    display,
    flexDirection,
    justifyContent,
    textAlign,
}) => {
    return (
        <>
            <StyledDiv
                display={display}
                flexDirection={flexDirection}
                justifyContent={justifyContent}
                textAlign={textAlign}
            >
                {children}
            </StyledDiv>
        </>

    );
};

export default DivText;
