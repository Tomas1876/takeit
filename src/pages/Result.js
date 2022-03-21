import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import Button from '../components/Button';

const Result = () => {
    return (
        <>
            <p className="result">사세요</p>
            <ul className="questions">
                <li><Link to="/questions">왜 사야 하나요?</Link></li>
            </ul>
        </>
    );
}

export default Result;