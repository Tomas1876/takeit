import React, { useState } from 'react';
import styledComponent from 'styled-components';

const TextInput = styledComponent.input`
    width: 30%;
    height: 50px;
    padding-top: 10px;
    outlinwe: none;
    text-align: center;
    color: #000;
`;

const CustomInput = (props) => {

    return (
        <TextInput></TextInput>
    );
}

export default CustomInput;