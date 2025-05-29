import { useState } from "react";
import CoupangSearchBar from "./CoupangSearchBar";
import CoupangToggle from "./CoupangToggle";
import CoupangList from "./CoupangList";

function Home() {

    const [isGridView,setIsGridView] = useState(true)
    const [searchText,setSearchText] = useState('')
    const [dummyData,setDummyData] = useState([

    

    
        {
            id:1,
            title:'크래미,90g,1개',
            category:'로켓프레시',
            price:'1,160원',
            star:'★★★★★',
            image:<img src="./img/0527_coupang1.jpg" alt="" />
        },
        {
            id:2,
            title:'팽이버섯 300g,1개',
            category:'로켓프레시',
            price:'1,160원',
            star:'★★★★★',
            image:<img src="./img/0527_coupang2.jpg" alt="" />
        },
        {
            id:3,
            title:'그릭요거트100g,1개',
            category:'로켓배송',
            price:'2,980원',
            star:'★★★★',
            image:<img src="./img/0527_coupang3.jpg" alt="" />
        },
        {
            id:4,
            title:'불가리스 제로 복숭아,4개입',
            category:'로켓배송',
            price:'3,789원',
            star:'★★★★★',
            image:<img src="./img/0527_coupang4.jpg" alt="" />
        },
        {
            id:5,
            title:'곰곰 순두부400g,1개입',
            category:'로켓프레시',
            price:'1,290원',
            star:'★★★★',
            image:<img src="./img/0527_coupang5.jpg" alt="" />
        },
        {
            id:6,
            title:'서울우유2.3L,1개',
            category:'로켓배송',
            price:'5,980원',
            star:'★★★★',
            image:<img src="./img/0527_coupang6.jpg" alt="" />
        },
        {
            id:7,
            title:'콘트라베이스 500ml,6개',
            category:'로켓배송',
            price:'7,440원',
            star:'★★★★★',
            image:<img src="./img/0527_coupang7.jpg" alt="" />
        },
        {
            id:8,
            title:'롯데햄 한입슬라이스 60g,1개',
            category:'로켓배송',
            price:'1,420원',
            star:'★★★★',
            image:<img src="./img/0527_coupang8.jpg" alt="" />
        },
        {
            id:9,
            title:'그릴 비엔나소세지 140g,1개',
            category:'로켓배송',
            price:'2,980원',
            star:'★★★★★',
            image:<img src="./img/0527_coupang9.jpg" alt="" />
        },
        {
            id:10,
            title:'오뚜기 순후추 450g,1개',
            category:'로켓배송',
            price:'12,700원',
            star:'★★★★★',
            image:<img src="./img/0527_coupang10.jpg" alt="" />
        },
        {
            id:11,
            title:'곰곰 국산콩 두부300g,1개',
            category:'로켓프레시',
            price:'1,830원',
            star:'★★★★',
            image:<img src="./img/0527_coupang11.jpg" alt="" />
        },
        {
            id:12,
            title:'풀무원 요거트 딸기 100ml,4개입',
            category:'로켓프레시',
            price:'3,780원',
            star:'★★★★',
            image:<img src="./img/0527_coupang12.jpg" alt="" />
        },
        {
            id:13,
            title:'이오 요구르트 80ml,10개입',
            category:'로켓배송',
            price:'2,990원',
            star:'★★★★★',
            image:<img src="./img/0527_coupang13.jpg" alt="" />
        },
        {
            id:14,
            title:'짜파게트 140g 5개',
            category:'로켓배송',
            price:'5,180원',
            star:'★★★★★',
            image:<img src="./img/0527_coupang14.jpg" alt="" />
        },
        {
            id:15,
            title:'서울우유 커피 4입 200ml,4개',
            category:'로켓프레시',
            price:'4,280원',
            star:'★★★★',
            image:<img src="./img/0527_coupang15.jpg" alt="" />
        },
        {
            id:16,
            title:'파스퇴르 사과당근 요구르트 100ml 5개입',
            category:'로켓배송',
            price:'2,450원',
            star:'★★★',
            image:<img src="./img/0527_coupang16.jpg" alt="" />
        },
        {
            id:17,
            title:'노르웨이 생 연어600g,1개',
            category:'로켓프레시',
            price:'26,990원',
            star:'★★★★★',
            image:<img src="./img/0527_coupang17.jpg" alt="" />
        },
        {
            id:18,
            title:'빙그레 아카펠라240ml,1개',
            category:'로켓배송',
            price:'1,880원',
            star:'★★★★★',
            image:<img src="./img/0527_coupang18.jpg" alt="" />
        },
        {
            id:19,
            title:'사조참치 살코기 안심따개',
            category:'로켓프레시',
            price:'5,800원',
            star:'★★★★★',
            image:<img src="./img/0527_coupang19.jpg" alt="" />
        },
        {
            id:20,
            title:'동원 롤유뷰초밥 새콤한맛245g,1개',
            category:'로켓배송',
            price:'3,970원',
            star:'★★★★★',
            image:<img src="./img/0527_coupang20.jpg" alt="" />
        },
        {
            id:21,
            title:'오뚜기 토마토 케찹300g,1개',
            category:'로켓배송',
            price:'1,300원',
            star:'★★★★★',
            image:<img src="./img/0527_coupang21.jpg" alt="" />
        },
        {
            id:22,
            title:'신라면 120g,5개',
            category:'로켓배송',
            price:'4,070원',
            star:'★★★★★',
            image:<img src="./img/0527_coupang22.jpg" alt="" />
        },
        {
            id:23,
            title:'비비고 왕교자 1.05kg,1개',
            category:'로켓프레시',
            price:'8,97원',
            star:'★★★★★',
            image:<img src="./img/0527_coupang23.jfif" alt="" />
        },
        {
            id:24,
            title:'삼립 더블치즈 후레시팡98g,1개',
            category:'로켓배송',
            price:'1,590원',
            star:'★★★★★',
            image:<img src="./img/0527_coupang24.jpg" alt="" />
        },
        {
            id:25,
            title:'미미사푸드 녹차분모자 250g,1개',
            category:'로켓배송',
            price:'1,600원',
            star:'★★★★',
            image:<img src="./img/0527_coupang25.jpg" alt="" />
        },

        
    ])

    const filteredData = dummyData.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
    )

    const handleDeleteItem = id =>{
        setDummyData(dummyData.filter(item => item.id !== id))
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
            <CoupangSearchBar
            searchText={searchText}
            setSearchText={setSearchText}
            />
            <CoupangToggle
            isGridView={isGridView}
            setIsGridView={setIsGridView}
            />
            </div>
            <CoupangList
            searchText={searchText}
            isGridView={isGridView}
            filteredData={filteredData}
            onDeleteItem={handleDeleteItem}
            />
            
        </div>
    );
}

export default Home;