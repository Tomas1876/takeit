import React from 'react';
import StyledComponent from 'styled-components';

const StyledButton = StyledComponent.button`
    width: 100px;
    height: 30px;
    color: ${(props) => props.color || 'white'};
    background-color: ${(props) => props.background || 'blue'};
`;
const Button = (props) => {

    const text = props.title;

    return (
        <StyledButton color={props.color} background={props.background} >{text}</StyledButton>
    );
}

export default Button;