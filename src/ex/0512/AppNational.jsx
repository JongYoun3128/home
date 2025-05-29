import { useState } from 'react';
import './App.css'
import { NationalTreasure } from './components/NationalTreasure';
import National from './components/National';

function TreasureList (){
    

    const items = [
    {   
        id:1,
        title:'서울 숭례문',
        description:'1962년 12월 20일',
        thumbnail:'./img/nt_01.jpg',
        location:'서울 중구 세종대로 40 (남대문로4가)',
        isFavorite: false,
        link: 'https://www.barovone.com/kr/product/product.lime?r_prcode=11539095',
        isAwrad: false,
    },
    {   
        id:2,
        title:'서울 원각사지 십층석탑',
        description:'2024년도 노벨문학상 수상작가',
        thumbnail:'./img/nt_02.jpg',
        location:'서울 종로구 종로 99 (종로2가) / (지번)서울 종로구 종로2가 38-2번지 탑골공원',
        isFavorite: false,
        isAwrad: false,
    },
    {   
        id:3,
        title:'서울 북한산 신라 진흥왕 순수비',
        description:'영원한 불확실성',
        thumbnail:'./img/nt_03.jpg',
        location:'서울 용산구 서빙고로 137, 국립중앙박물관 (용산동6가)',
        isFavorite: false,
        link:'https://www.barovone.com/kr/product/product.lime?r_prcode=11538318',
        isAwrad: false,
    },
    {   
        id:4,
        title:'여주 고달사지 승탑',
        description:'세상을 바꾼 위험하고 위대한생각들',
        thumbnail:'./img/nt_04.png',
        location:'경기 여주시 북내면 상교리 411-1',
        isFavorite: true,
        isAwrad: false,
        
    },
    {   
        id:5,
        title:'보은 법주사 쌍사자 석등',
        description:'백온유,강보라,서장원,이희주',
        thumbnail:'./img/nt_05.jpg',
        location:'충북 보은군 속리산면 법주사로 379, 법주사 (사내리)',
        isFavorite: true,
        isAwrad: false, 
        
    },
    {   
        id:6,
        title:'충주 탑평리 칠층석탑',
        description:'김영하/복복서가',
        thumbnail:'./img/nt_06.jpg',
        location:'충북 충주시 중앙탑면 탑평리 11',
        isFavorite: true,
        isAwrad: true,
    },
    {   
        id:7,
        title:'천안 봉선홍경사 갈기비',
        description:'한번뿐인 삶 이렇게 살아라',
        thumbnail:'./img/nt_07.jpg',
        location:'전북 남원시 산내면 대정리 975',
        isFavorite: false,
        link:'https://www.barovone.com/kr/product/product.lime?r_prcode=11301874',
        isAwrad: false,
    },
    {   
        id:8,
        title:'보령 성주사지 대낭혜화상탑비',
        description:'2024 노벨문학상 수상작가',
        thumbnail:'./img/nt_08.jpg',
        location:'충남 천안시 서북구 성환읍 대홍리 319-8',
        isFavorite: false,
        isAwrad: false,
    },
    {   
        id:9,
        title:'부여 정림사지 오층석탑',
        description:'마음근력 향상을 위한 명상 가이드',
        thumbnail:'./img/nt_09.jpg',
        location:'충남 보령시 성주면 성주리 78',
        isFavorite: false,
        isAwrad: true,
    },
    {   
        id:10,
        title:'남원 실상사 백장암 삼층석탑',
        description:'마음근력 향상을 위한 명상 가이드',
        thumbnail:'./img/nt_10.jpg',
        location:'충남 부여군 정림로 83 (부여읍, 정림사지) 정림사지박물관',
        isFavorite: false,
        isAwrad: false,
        isnew: true
    },
    {   
        id:11,
        title:'익산 미륵사지 석탑',
        description:'마음근력 향상을 위한 명상 가이드',
        thumbnail:'./img/nt_11.jpg',
        location:'전북 남원시 산내면 대정리 975',
        isFavorite: false,
        isAwrad: true,
        isnew: true
    },
    {   
        id:12,
        title:'내면소통 명상수업',
        description:'마음근력 향상을 위한 명상 가이드',
        thumbnail:'./img/nt_12.jpg',
        location:'전북 익산시 금마면 기양리 97번지',
        isFavorite: false,
        isAwrad: false,
        isnew: true
    },

    ]

        const newItems = items.filter(item => item.isnew)
        const favoriteItems = items.filter(item => item.isFavorite)
        const AwardItems = items.filter(item => item.isAwrad)
                       


    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    let hasPrev = index > 0;
    let hasNext = index < NationalTreasure.length -1;

     function handlePrevClick(){
        setIndex(index - 1)
    }

    function handleNextClick(){
        setIndex(index + 1)
    }

    function handleMoreClick(){
        setShowMore(!showMore)
    }

    let ntList = NationalTreasure[index];

    return(
        <>
            <h1 className="title">국보 여행지 소개</h1>
            <article>
                <div className="buttonList">
                    <button 
                        onClick={handlePrevClick}
                        disabled={!hasPrev}>
                        Prev
                    </button>
                    <button 
                        onClick={handleNextClick}
                        disabled={!hasNext}>
                        Next
                    </button>
                    </div>
                    <h2>
                        <li>
                            {ntList.name}
                            ( 국보 {index+1} 호)
                        </li>                
                    </h2>                           
                    <img src={ntList.img} alt=""  className='img_box'/>                
                    {showMore && <p>
                        {ntList.description}
                        <a href={ntList.url} className='link'>자세히 보기</a>
                        </p>}
                    <button onClick={handleMoreClick} className='detailButton'>
                        상세설명 {showMore ? '닫기' : '열기'} 
                    </button>
                    <h5>
                        ({index+1} of {NationalTreasure.length})

                    </h5>
            </article>
            <main>                      
                    <National title = '추천여행지' items={newItems}/>
                    <National title = '당일여행지' items={favoriteItems}/>
                    <National title = '필수여행지' items={AwardItems}/>
                        
                </main>
        </>
        
    )
    

}


export default TreasureList;