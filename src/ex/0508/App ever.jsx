import './App.css'
import EverLand from './components/EverLand'

function App() {

    const elbox = [        
    {
        titleImg: 'img/m_tit_exper1.jpg',          
        thumbnail:'img/eb_img_01.jpg',
        titleText1: '국립생태원과 함께하는 에버랜드',
        titleText2: '생태환경교실',
        subText: '지구온난화가 무엇인지 실험을 통해 배워보고, 인간과 동물들에게 미치는 영향을 알아보는 프로그램 국립생태원의 연구진과 에버랜드의 전문가가 함께 개발하여 더욱 알차고 차별화된 생태환경교육',
        timeIcon1: 'img/clock_img.png',
        timeIcon2: 'img/person.png',
        time: '시간:20분',
        people: '인원:800명',
        ht01: '#국립생태원',
        ht02: '#환경교육',
        ht03: '#탄소중립',
        ht04: '#초등학생',
        ht05: '#중학생',
        ht06: '#고등학생'

    },
    {
        titleImg: 'img/m_tit_exper2.jpg',          
        thumbnail:'img/eb_img_02.jpg',
        titleText1: '한국진로개발원과 함께하는',
        titleText2: '종합 진로진단검사',
        subText: '재능을 분석해 진로적성분석과 적합한 학과까지 알아볼 수 있는 검사로, 분야별 진로 적성 능력지수를 통해 객관적으로 자신의 강점과 약점을 분석/보완 할 수 있는 특별한 프로그램',
        timeIcon1: 'img/clock_img.png',
        timeIcon2: 'img/person.png',
        time: '시간 : 자율 검사',
        people: '인원:제한없음',
        ht01: '#한국진로개발원',
        ht02: '#초등학생',
        ht03: '#중학생',
        ht04: '#고등학생',
        ht05: '#진로진학 목표 설정',
        ht06: '#내꿈찾기'

    },
    {
        titleImg: 'img/m_tit_exper2.jpg',          
        thumbnail:'img/eb_img_03.jpg',
        titleText1: '대교 눈높이 과학플러스온과 함께하는 ',
        titleText2: '교과목 연계 체험학습',
        subText: '에버랜드의 동물 친구와 어트랙션에 숨겨진 과학의 원리를 대교 눈높이 과학과 함께 재미있게 풀어보는 모바일 학습 프로그램 T익스프레스, 판다월드, 타이거 밸리 등을 탐험하며, 모바일 워크북을 통해 자유롭게 체험할 수 있는 과학 체험 학습',
        timeIcon1: 'img/clock_img.png',
        timeIcon2: 'img/person.png',
        time: '시간:20분',
        people: '인원:800명',
        ht01: '#대교 눈높이',
        ht02: '#과학',
        ht03: '#초등학생',
        ht04: '#중학생',
        ht05: '#고등학생',
        ht06: '#드론#UAM'

    },
    {
        titleImg: 'img/m_tit_exper2.jpg',          
        thumbnail:'img/eb_img_04.jpg',
        titleText1: '모빌리티의 모든 것을 느낄 수 있는',
        titleText2: '삼성화재 모빌리티뮤지엄',
        subText: '재미있는 모빌리티 어트랙션 체험부터 아름다운 클래식카 감상까지! 모빌리티의 과거와 현재, 미래를 조망할 수 있는 국내 최대 모빌리티 복합문화공간',
        timeIcon1: 'img/clock_img.png',
        timeIcon2: 'img/person.png',
        time: '화~금 09:00~17:00 / 토~일 10:00~18:00',
        people: '인원:제한없음',
        ht01: '#클래식카',
        ht02: '#모빌리티',
        ht03: '#초등학생',
        ht04: '#중학생',
        ht05: '#고등학생',
        ht06: '#드론#UAM'

    },
    {
        titleImg: 'img/m_tit_exper2.jpg',          
        thumbnail:'img/eb_img_05.jpg',
        titleText1: '훌륭한 전시와 아름다운 한국 전통 정원을 만날 수 있는',
        titleText2: '호암미술관',
        subText: '쉽게 접하기 힘든 대규모 전시는 물론 한국 전통 정원을 대표하는 희원까지 감상할 수 있는 과거와 현재가 어우러진 문화체험공간',
        timeIcon1: 'img/clock_img.png',
        timeIcon2: 'img/person.png',
        time: '매주 화~일, 10:00~18:00',
        people: '인원:제한없음',
        ht01: '#미술관 희원',
        ht02: '#전통정원',
        ht03: '#초등학생',
        ht04: '#중학생',
        ht05: '#고등학생',
        ht06: '#문화체험공간'

    }
   
]
    return (
        <main>
            <EverLand items={elbox}/>
            
        </main>
    );
}

export default App;