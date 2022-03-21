import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import Button from '../components/Button';

const Result = () => {
    return (
        <>
            <p className="text">
                고민 중인 물건을 적어주세요
            </p>
            <div className="input-box">
                <CustomInput props={"target"} />
            </div>
            <div className="button-box">
                <Link to="/"><Button title="홈으로"></Button></Link>
            </div>
        </>
    );
}

export default Result;