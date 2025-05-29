import './App.css'
import BooksListCard from './components/BooksListCard';

function App() {

    const items = [
    {   
        id:1,
        title:'듀얼브레인',
        description:'AI시대의 실용적 생존 가이드',
        thumbnail:'./img/img_01.jpg',
        price:'19,800원',
        isFavorite: false,
        link: 'https://www.barovone.com/kr/product/product.lime?r_prcode=11539095',
        isAwrad: false,
    },
    {   
        id:2,
        title:'빛과실',
        description:'2024년도 노벨문학상 수상작가',
        thumbnail:'./img/img_02.jpg',
        price:'13,900원',
        isFavorite: true,
        isAwrad: false,
    },
    {   
        id:3,
        title:'게르하르트 리히터',
        description:'영원한 불확실성',
        thumbnail:'./img/img_03.jpg',
        price:'31,800원',
        isFavorite: false,
        link:'https://www.barovone.com/kr/product/product.lime?r_prcode=11538318',
        isAwrad: false,
    },
    {   
        id:4,
        title:'청춘의 독서',
        description:'세상을 바꾼 위험하고 위대한생각들',
        thumbnail:'./img/img_04.jpg',
        price:'17,010원',
        isFavorite: true,
        isAwrad: false,
        
    },
    {   
        id:5,
        title:'2025 제 16회 젊은작가상',
        description:'백온유,강보라,서장원,이희주',
        thumbnail:'./img/img_05.jpg',
        price:'6,930원',
        isFavorite: true,
        isAwrad: false, 
        
    },
    {   
        id:6,
        title:'단 한번의 삶',
        description:'김영하/복복서가',
        thumbnail:'./img/img_06.jpg',
        price:'15,120원',
        isFavorite: false,
        isAwrad: true,
    },
    {   
        id:7,
        title:'쇼펜하우어 인생수업',
        description:'한번뿐인 삶 이렇게 살아라',
        thumbnail:'./img/img_07.jpg',
        price:'15,750원',
        isFavorite: false,
        link:'https://www.barovone.com/kr/product/product.lime?r_prcode=11301874',
        isAwrad: false,
    },
    {   
        id:8,
        title:'작별하지 않는다',
        description:'2024 노벨문학상 수상작가',
        thumbnail:'./img/img_08.jpg',
        price:'15,120원',
        isFavorite: false,
        isAwrad: true,
    },
    {   
        id:9,
        title:'내면소통 명상수업',
        description:'마음근력 향상을 위한 명상 가이드',
        thumbnail:'./img/img_09.jpg',
        price:'25,200원',
        isFavorite: false,
        isAwrad: true,
    },
    {   
        id:10,
        title:'내면소통 명상수업',
        description:'마음근력 향상을 위한 명상 가이드',
        thumbnail:'./img/img_09.jpg',
        price:'25,200원',
        isFavorite: false,
        isAwrad: true,
    },
    {   
        id:11,
        title:'내면소통 명상수업',
        description:'마음근력 향상을 위한 명상 가이드',
        thumbnail:'./img/img_09.jpg',
        price:'25,200원',
        isFavorite: false,
        isAwrad: true,
    },
    {   
        id:12,
        title:'내면소통 명상수업',
        description:'마음근력 향상을 위한 명상 가이드',
        thumbnail:'./img/img_09.jpg',
        price:'25,200원',
        isFavorite: false,
        isAwrad: true,
    },

    ]

    const favoriteItems = items.filter(item => item.isFavorite)
    const awardItems = items.filter(item => item.isAwrad)
    const linkItems = items.filter(item => item.link)
    

    return (
        <main>
            <BooksListCard title='도서목록' items={linkItems}/>
            <BooksListCard title='추천도서' items={favoriteItems}/>
            <BooksListCard title='수상목록' items={awardItems}/>
    </main>
    );
}

export default App;