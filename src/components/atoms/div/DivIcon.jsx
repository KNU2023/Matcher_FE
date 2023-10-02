import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: ${props => props.display || 'inline'};
  flex-direction: ${props => props.flexDirection || 'row'};
  align-items: ${props => props.alignItems || 'flex-start'};
`;

const DivIcon = ({
    children,
    display,
    flexDirection,
    alignItems,
}) => {
    return (
        <>
            <StyledDiv
                display={display}
                flexDirection={flexDirection}
                alignItems={alignItems}
            >
                {children}
            </StyledDiv>
        </>

    );
};

export default DivIcon;
