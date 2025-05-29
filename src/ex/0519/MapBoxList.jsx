import { useNavigate } from "react-router-dom";


function MapBoxList() {

         const navigate = useNavigate();

    return (
        <div className="mapboxlist w-lg mx-auto flex justify-between">
            <ul className="w-80 text-center ">
                <h5 className="text-3xl ">성시경 맛집</h5>
                <li onClick={()=>navigate('/sigyungmap_1')}>
                    <p>화진호 이선장네</p>
                </li>
                <li onClick={()=>navigate('/sigyungmap_2')}>
                    <p>옛날감자전</p>
                </li>
                <li onClick={()=>navigate('/sigyungmap_3')}>
                    <p>삼계탕 마을</p>
                </li>
                <li onClick={()=>navigate('/sigyungmap_4')}>
                    <p>고다이</p>
                </li>
                <li onClick={()=>navigate('/sigyungmap_5')}>
                    <p>먹거리집</p>
                </li>
                <li onClick={()=>navigate('/sigyungmap_6')}>
                    <p>한재골가든</p>
                </li>
                <li onClick={()=>navigate('/sigyungmap_7')}>
                    <p>하남숯불닭갈비</p>
                </li>
                <li onClick={()=>navigate('/sigyungmap_8')}>
                    <p>막동이회관</p>
                </li>
                <li onClick={()=>navigate('/sigyungmap_9')}> 
                    <p>풍성감자탕</p>
                </li>

               
            </ul>
            <ul className="w-80 text-center ">
                <h5 className="text-3xl ">백종원 맛집</h5>
                <li onClick={()=>navigate('/paikmap_1')}>
                    <p>산동포자</p>
                </li>
                <li onClick={()=>navigate('/paikmap_2')}>
                    <p>맥시칸치킨하우스</p>
                </li>
                <li onClick={()=>navigate('/paikmap_3')}>
                    <p>열매손만두분식</p>
                </li>
                <li onClick={()=>navigate('/paikmap_4')}>
                    <p>기라성</p>
                </li>
                <li onClick={()=>navigate('/paikmap_5')}>
                    <p>한우생돌곱창구이</p>
                </li>
                <li onClick={()=>navigate('/paikmap_6')}>
                    <p>청하감자탕</p>
                </li>
                <li onClick={()=>navigate('/paikmap_7')}>
                    <p>이레소머리곰탕</p>
                </li>
                <li onClick={()=>navigate('/paikmap_8')}>
                    <p>엄정분식</p>
                </li>
                <li onClick={()=>navigate('/paikmap_9')}>
                    <p>그린포장마차</p>
                </li>
                
            </ul>
        </div>
    );
}

export default MapBoxList;