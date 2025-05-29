
import { useNavigate } from "react-router-dom";

function Sigyung() {


     const navigate = useNavigate();

     
    return (
        <div className="sigyung mx-auto px-3 w-3xl ">
            <h3 className="sigyung_title_mobile md:hidden">성시경 먹방</h3>
            <div className="wrapper flex ">    
                <ul className="menu_list flex px-8 w-lg md:w-6xl flex-wrap justify-center">
                    <li onClick={()=>navigate('/sigyungone')}>
                        <img src="img/mukbang_thumnail_01_01.png" alt="" className="w-96 md:w-56" />
                        <div className="text_box">
                            <p className="text-gray-400 text-xs">강원·속초시</p>
                            <h2 className="font-bold text-xl">화진호 이선장네</h2>
                            <p className="text-emerald-800 text-xs">가자미튀김∙가자미조림∙대구탕∙회덮밥</p>
                        </div>
                    </li>
                    <li onClick={()=>navigate('/sigyungtwo')}>
                        <img src="img/mukbang_thumnail_01_02.png" alt="" className="w-96 md:w-56"/>
                        <div className="text_box">
                            <p className="text-gray-400 text-xs">서울·용산구</p>
                            <h2 className="font-bold text-xl">옛날감자전</h2>
                            <p className="text-emerald-800 text-xs">감자전·치즈감자전·오징어김치전·오돌뼈</p>
                        </div>
                    </li>
                    <li onClick={()=>navigate('/sigyungthree')}>
                        <img src="img/mukbang_thumnail_01_03.png" alt=""className="w-96 md:w-56"/>
                        <div className="text_box">
                            <p className="text-gray-400 text-xs">서울·서초구</p>
                            <h2 className="font-bold text-xl">삼계탕 마을</h2>
                            <p className="text-emerald-800 text-xs">삼계탕</p>
                        </div>
                    </li>
                    <li onClick={()=>navigate('/sigyungfour')}>
                        <img src="img/mukbang_thumnail_01_04.png" alt="" className="w-96 md:w-56"/>
                        <div className="text_box">
                            <p className="text-gray-400 text-xs">서울·용산구</p>
                            <h2 className="font-bold text-xl">고다이</h2>
                            <p className="text-emerald-800 text-xs">살치·등심·갈비·청양고추·삼색야채</p>
                        </div>
                    </li>
                    <li onClick={()=>navigate('/sigyungfive')}>
                        <img src="img/mukbang_thumnail_01_05.png" alt="" className="w-96 md:w-56"/>
                        <div className="text_box">
                            <p className="text-gray-400 text-xs">서울·중랑구</p>
                            <h2 className="font-bold text-xl">먹거리집</h2>
                            <p className="text-emerald-800 text-xs">수육·내장·제육볶음·순대국</p>
                        </div>
                    </li>
                    <li onClick={()=>navigate('/sigyungsix')}>
                        <img src="img/mukbang_thumnail_01_06.png" alt="" className="w-96 md:w-56"/>
                        <div className="text_box">
                            <p className="text-gray-400 text-xs">전남·담양군</p>
                            <h2 className="font-bold text-xl">한재골가든</h2>
                            <p className="text-emerald-800 text-xs">닭볶음탕·닭곰탕</p>
                        </div>
                    </li>
                    <li onClick={()=>navigate('/sigyungseven')}>
                        <img src="img/mukbang_thumnail_01_07.png" alt="" className="w-96 md:w-56"/>
                        <div className="text_box">
                            <p className="text-gray-400 text-xs">경기·하남시</p>
                            <h2 className="font-bold text-xl">하남숯불닭갈비</h2>
                            <p className="text-emerald-800 text-xs">숯불닭갈비 모듬세트</p>
                        </div>
                    </li>
                    <li onClick={()=>navigate('/sigyungeight')}>
                        <img src="img/mukbang_thumnail_01_08.png" alt="" className="w-96 md:w-56"/>
                        <div className="text_box">
                            <p className="text-gray-400 text-xs">광주·동구</p>
                            <h2 className="font-bold text-xl">막동이회관</h2>
                            <p className="text-emerald-800 text-xs">생고깊안심추리·차돌박이·갈비살·살치살</p>
                        </div>
                    </li>
                    <li onClick={()=>navigate('/sigyungnine')}>
                        <img src="img/mukbang_thumnail_01_09.png" alt="" className="w-96 md:w-56"/>
                        <div className="text_box">
                            <p className="text-gray-400 text-xs">서울·광진구</p>
                            <h2 className="font-bold text-xl">풍성감자탕</h2>
                            <p className="text-emerald-800 text-xs">감자탕</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sigyung;