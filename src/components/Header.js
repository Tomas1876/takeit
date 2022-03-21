import React from 'react';
import styledComponent from 'styled-components';

const StyledHeader = styledComponent.header`
    width: 100%;
    height: 90px;
    padding-top: 32px;
    background-color: black;
    text-align: center;
    color: white;
`;

const Title = styledComponent.h2`
    font-size: 26px;
    line-height: 22px; 
`;

const Header = () => {

    return (
        <StyledHeader>
            <Title>TAKE IT</Title>
        </StyledHeader>
    );
}

export default Header;