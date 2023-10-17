import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    display: ${props => props.display || 'inline'};
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    text-align: ${props => props.textAlign || 'left'};
`;

const DivText = ({
    children,
    width,
    height,
    display,
    flexDirection,
    justifyContent,
    textAlign,
}) => {
    return (
        <>
            <StyledDiv
                width={width}
                height={height}
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
