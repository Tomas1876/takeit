import React from 'react';
import styledComponent from 'styled-components';

const TextInput = styledComponent.input`
    width: 100%;
    max-width: 250px;
    height: 40px;
    padding-top: 3px;
    border: 1px solid gray;
    text-align: center;
    color: #000;
`;

const CustomInput = (props) => {

    console.log(props);

    return (
        <TextInput></TextInput>
    );
}

export default CustomInput;