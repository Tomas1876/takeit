import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import Button from '../components/Button';

const Cons = () => {
    return (
        <>
            <p className="text">
                사면 안 되는 이유를 적어주세요
            </p>
            <div className="input-box">
                <CustomInput props={"target"} />
            </div>
            <div className="button-box">
                <Link to="/result"><Button title="다음"></Button></Link>
            </div>
        </>
    );
}

export default Cons;