import './App.css';
import Oganic from './components/Oganic';

function App() {

    const items = [
    
                {
                    id:1,
                    title: '유기농 달걀',                   
                    thumbnail: 'img/oganic01.png',
                    price:'6,000원',
                    isFavorite: true,
                    link: 'https://www.buzzbee.co.kr/goods/goods_view.php?goodsNo=26350',
                    isbest : true,
                    isnew: true

                },
                {
                    id:2,
                    title: '유기농 아침 식빵',
                    thumbnail: 'img/oganic02.png',
                    price:'12,000원',
                    isFavorite: false,
                    link: 'https://www.buzzbee.co.kr/goods/goods_view.php?goodsNo=24177',
                    isbest : false,
                    newimg: true
                },
                {
                    id:3,
                    title: '딸기 무스 케이크',
                    thumbnail: 'img/oganic03.png',
                    price:'30,000원',
                    isFavorite: false,
                    link: 'https://www.buzzbee.co.kr/goods/goods_view.php?goodsNo=24849',
                    isbest : false
                },  
                {
                    id:4,
                    title: '산지직송 유기농 채소',
                    thumbnail: 'img/oganic04.png',
                    price:'50,000원',
                    isFavorite: false,
                    link: 'https://www.buzzbee.co.kr/goods/goods_view.php?goodsNo=23086',
                    isbest : true,
                    isbestcon: true
                    

                },
                {
                    id:5,
                    title: '다이어트 닭가슴살',
                    thumbnail: 'img/oganic05.png',
                    price:'29,000원',
                    link: 'https://www.buzzbee.co.kr/goods/goods_view.php?goodsNo=26350',
                    isFavorite: false,
                    isbest : true,
                    hot: true,
                    newimg: true
                },
                {
                    id:6,
                    title: '클램차우더 스프 밀키트',
                    thumbnail: 'img/oganic06.png',
                    price:'16,000원',
                    isFavorite: false,
                    link: 'https://www.buzzbee.co.kr/goods/goods_view.php?goodsNo=26350',
                    isbest : true,
                    hot: true,                    
                    isbestcon: true
                },  
                {
                    id:7,
                    title: '무농약 레몬 3KG',
                    description: '2024년 노벨문학상을 수상한 작가 한강의 신작 『빛과 실』',
                    thumbnail: 'img/oganic07.png',
                    price:'30,000원',
                    isFavorite: true,
                    link: 'https://www.buzzbee.co.kr/goods/goods_view.php?goodsNo=26350',
                    isbest : false,
                    hot: true,
                    isnew: true,
                    newimg: true
                },
                {
                    id:8,
                    title: '천연 조미료 세트',
                    thumbnail: 'img/oganic08.png',
                    price:'25,000원',
                    isFavorite: true,
                    isbest : false,
                    link: 'https://www.buzzbee.co.kr/goods/goods_view.php?goodsNo=26350',
                    isnew: true
                },
                {
                    id:9,
                    title: '유기농 호두 1KG',
                    thumbnail: 'img/oganic09.png',
                    price:'30,000원',
                    isFavorite: true,
                    isbest : false,
                    link: 'https://www.buzzbee.co.kr/goods/goods_view.php?goodsNo=26350',
                    hot: true,
                    isnew: true
                },
                 {
                    id:10,
                    title: '유기농 아보카도 3EA',
                    thumbnail: 'img/oganic10.png',
                    price:'8,500원',
                    isFavorite: false,
                    isbest : false,
                    link: 'https://www.buzzbee.co.kr/goods/goods_view.php?goodsNo=26350',
                },
                 {
                    id:11,
                    title: '유기농 감자 5KG',
                    thumbnail: 'img/oganic11.png',
                    price:'9,000원',
                    isFavorite:false,
                    isbest : false,
                    link: 'https://www.buzzbee.co.kr/goods/goods_view.php?goodsNo=26350',
                },
                 {
                    id:12,
                    title: '딸기 무스 케이크',
                    thumbnail: 'img/oganic03.png',
                    price:'29,000원',
                    isFavorite: false,
                    link: 'https://www.buzzbee.co.kr/goods/goods_view.php?goodsNo=26350',
                    isbest : false,
                }     

            ]

    const newItems = items.filter(item => item.isnew)
    const favoriteItems = items.filter(item => item.isFavorite)
    const bestItems = items.filter(item => item.isbest)
    const hotItems = items.filter(item => item.hot)
    

    return (
        <main>            
            <Oganic title = '추천상품' items={newItems}/>
            <Oganic title = '신규상품' items={favoriteItems}/>
            <Oganic title = '베스트상품' items={bestItems}/>
             <Oganic title = '핫딜상품' items={hotItems}/>

        </main>
    );
}

export default App;