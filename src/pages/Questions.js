import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Questions = () => {

    let param = useParams();

    const data = [
        { "key": ":why", "question": "왜 사야 하나요?", "answer": "당신은 이미 혼자서 충분히 결정을 내릴 수 있는 지성인입니다. 그런 당신이 굳이 남에게 그것을 살 지 말 지 결정해달라고 한다는 건 사고 싶기 때문이죠. 이미 당신은 결정을 내렸습니다. 다른 사람이 사지 말라고 하면 안 사실 건가요? 지금 고개를 끄덕이신다면 당신은 자기 자신을 속이고 계신 겁니다. 마음의 소리에 귀를 열고 스스로에게 진실해지세요. 당신은 그것을 사고 싶습니다. 사세요." },
        { "key": ":howtosavemoney", "question": "돈은 언제 모으죠?", "answer": "자꾸 쓸데없이 이것 저것 사서 저축을 못 할까봐 걱정이신가요? 너무 많은 돈을 쓰는 것 같으신가요? 안심하세요. 문제는 당신의 지출이 아닙니다. 당신의 수입입니다. 만약 당신이 그것을 사지 않기로 결정한다면, 당신은 앞으로 가늠할 수 없는 시간 동안 계속 살 지 말 지 고민하는 것에 에너지를 사용하겠죠. 하지만 그것을 사버리면 어떻게 될까요? 고민하는 데에 사용한 시간, 에너지 등 당신의 리소스를 당신이 해야 하는 데에 집중할 수 있습니다. 고민할 시간에 중요한 것에 집중해서 역량을 키우고 연봉을 올리세요. 많이 벌면 저축은 알아서 됩니다. 이제 진실한 소비는 연봉 상승에 도움이 된다는 사실을 깨달으셨나요? 사세요." },
        { "key": ":whatsthematterwithyou", "question": "그냥 안 살래요", "answer": "정말 의지가 대단하신 분이군요. 이렇게 쓸데없는 사이트에 접속할 만큼 사고 싶어하면서도 결국엔 안 사겠다고 고개를 저으시는 걸 보면 청개구리 기질이 있는 것 같기도 합니다. 하지만 그것 아시나요? 당신이 정말 사고 싶지 않았다면 결과를 확인했을 때 이 페이지를 그냥 꺼버렸을 겁니다. 애당초 접속하지도 않았겠죠. 당신의 속마음을 맟혀볼까요? 당신은 무려 200픽셀이나 되는 굵은 글씨로 사라는 결과를 확인하고도 안심이 되지 않았던 겁니다. 정말 사도 될까? 딱 한 번만 더 물어볼까? 당신은 사실 '그래도 사라'는 말을 듣고 싶어서 이 페이지에 들어오신 겁니다. 원하는 말을 해드릴게요. 사세요." }
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