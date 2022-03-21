import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import Button from '../components/Button';

const Pros = () => {
    return (
        <>
            <p className="text">
                사고 싶은 이유를 적어주세요
            </p>
            <div className="input-box">
                <CustomInput props={"target"} />
            </div>
            <div className="button-box">
                <Link to="/cons"><Button title="다음"></Button></Link>
            </div>
        </>
    );
}

export default Pros;