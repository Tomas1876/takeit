import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Questions = () => {

    let param = useParams();
    console.log(param);

    const data = [
        { "key": ":why", "question": "왜 사야 하나요?", "answer": "" },
        { "key": ":howtosavemoney", "question": "돈은 언제 모으죠?", "answer": "" },
        { "key": ":whatsthematterwithyou", "question": "그냥 안 살래요", "answer": "" }
    ];

    return (
        <>
            <p className="question">
                {data.map((v) => param.why == v.key ? v.question : "")}
            </p>
            <p className="answer">
                {data.map((v) => param.why == v.key ? v.answer : "")}
            </p>
            <div className='button-box'>
                <Link to="/"><Button title="처음으로"></Button></Link>
            </div>
        </>
    );
}

export default Questions;