import { Link } from 'react-router-dom';

const Result = () => {
    return (
        <>
            <p className="result">사세요</p>
            <ul className="questions">
                <li><Link to="/questions:why">왜 사야 하나요?</Link></li>
                <li><Link to="/questions:howtosavemoney">돈은 언제 모으죠?</Link></li>
                <li><Link to="/questions:whatsthematterwithyou">그냥 안 살래요</Link></li>
            </ul>
        </>
    );
}

export default Result;