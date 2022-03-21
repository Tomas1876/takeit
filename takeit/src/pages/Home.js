import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import Button from '../components/Button';

const Home = () => {

    const type = "target";

    return (
        <>
            <p className="text">
                사고 싶은 물건을 적어주세요
            </p>
            <div className="input-box">
                <CustomInput />
            </div>
            <div className="button-box">
                <Link to="/pros"><Button title="다음"></Button></Link>
            </div>
        </>
    );
}

export default Home;