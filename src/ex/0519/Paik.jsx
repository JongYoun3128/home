import { useNavigate } from "react-router-dom";

function Paik() {

    const navigate = useNavigate();


    return (
       <div className="paik mx-auto px-3 w-3xl ">
        <h3 className="paik_title_mobile md:hidden">백종원 먹방</h3>
            <div className="wrapper flex">
                <ul className="menu_list flex px-8 w-lg md:w-6xl flex-wrap justify-between">
                    <li onClick={()=>navigate('/paikone')}>
                        <img src="img/mukbang_thumnail_02_01.png" alt="" className="w-96 md:w-56"/>
                        <div className="text_box">
                            <p className="text-gray-400 text-xs">인천·부평구</p>
                            <h2 className="font-bold text-xl">산동포자</h2>
                            <p className="text-emerald-800 text-xs">홍소스즈토우·꼴뚜기튀김·바지탁볶음</p>
                        </div>
                    </li>
                    <li onClick={()=>navigate('/paiktwo')}>
                        <img src="img/mukbang_thumnail_02_02.png" alt="" className="w-96 md:w-56"/>
                        <div className="text_box">
                            <p className="text-gray-400 text-xs">울산·동구</p>
                            <h2 className="font-bold text-xl">맥시칸치킨하우스</h2>
                            <p className="text-emerald-800 text-xs">고추야채통닭·양념반후라이드반치킨</p>
                        </div>
                    </li>
                    <li onClick={()=>navigate('/paikthree')}>
                        <img src="img/mukbang_thumnail_02_03.png" alt="" className="w-96 md:w-56"/>
                        <div className="text_box">
                            <p className="text-gray-400 text-xs">대전·유성구</p>
                            <h2 className="font-bold text-xl">열매손만두분식</h2>
                            <p className="text-emerald-800 text-xs">쫄면·군만두·김치손만두·돈까스</p>
                        </div>
                    </li>
                    <li onClick={()=>navigate('/paikfour')}>
                        <img src="img/mukbang_thumnail_02_04.png" alt="" className="w-96 md:w-56"/>
                        <div className="text_box">
                            <p className="text-gray-400 text-xs">전북·부안굴</p>
                            <h2 className="font-bold text-xl">기라성</h2>
                            <p className="text-emerald-800 text-xs">해물짜장·볶음밥·돈까스</p>
                        </div>
                    </li>
                    <li onClick={()=>navigate('/paikfive')}>
                        <img src="img/mukbang_thumnail_02_05.png" alt="" className="w-96 md:w-56"/>
                        <div className="text_box">
                            <p className="text-gray-400 text-xs">전남·장성군</p>
                            <h2 className="font-bold text-xl">한우생돌곱창구이</h2>
                            <p className="text-emerald-800 text-xs">한우소곱창·양푼이갈비</p>
                        </div>
                    </li>
                    <li onClick={()=>navigate('/paiksix')}>
                        <img src="img/mukbang_thumnail_02_06.png" alt="" className="w-96 md:w-56"/>
                        <div className="text_box">
                            <p className="text-gray-400 text-xs">경북·안동시</p>
                            <h2 className="font-bold text-xl">청하감자탕</h2>
                            <p className="text-emerald-800 text-xs">뼈해장국</p>
                        </div>
                    </li>
                    <li onClick={()=>navigate('/paikonseven')}>
                        <img src="img/mukbang_thumnail_02_07.png" alt="" className="w-96 md:w-56"/>
                        <div className="text_box">
                            <p className="text-gray-400 text-xs">전북·정읍시</p>
                            <h2 className="font-bold text-xl">이레소머리곰탕</h2>
                            <p className="text-emerald-800 text-xs">소머리곰탕·설렁탕</p>
                        </div>
                    </li>
                    <li onClick={()=>navigate('/paikeight')}>
                        <img src="img/mukbang_thumnail_02_08.png" alt="" className="w-96 md:w-56"/>
                        <div className="text_box">
                            <p className="text-gray-400 text-xs">충북·충주시</p>
                            <h2 className="font-bold text-xl">엄정분식</h2>
                            <p className="text-emerald-800 text-xs">막창구이·곱창전골</p>
                        </div>
                    </li>
                    <li onClick={()=>navigate('/paiknine')}>
                        <img src="img/mukbang_thumnail_02_09.png" alt="" className="w-96 md:w-56"/>
                        <div className="text_box">
                            <p className="text-gray-400 text-xs">충남·태안군</p>
                            <h2 className="font-bold text-xl">그린포장마차</h2>
                            <p className="text-emerald-800 text-xs">바지락 해장국</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Paik;