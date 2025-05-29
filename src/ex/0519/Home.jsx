import { useNavigate } from "react-router-dom";
import MainMap from "./MainMap";

function Home() {

    const navigate = useNavigate();

    return (

        <div className="home px-5 mx-auto  ">
            <h2 className="title text-4xl  mx-auto">바로가기</h2>
            <div className="wrap_box flex">
                <ul className="menu_list home flex mx-auto px-5 w-2x1 md:flex-row md:w-6xl flex-col menu_box ">
                    <li onClick={()=>navigate('/sigyung')} >
                        <img src="img/sigyung_thumnail.png" alt="" />
                        <div className="text_box">                            
                            <h2 className="font-bold text-xl">성시경 먹방 보러가기</h2>
                            <p className="text-emerald-800 text-xs">성시경의 먹방 실시간 스트리밍</p>
                        </div>
                    </li>
                    <li onClick={()=>navigate('/paik')}>
                        <img src="img/paik_thumnail.png" alt="" />
                        <div className="text_box">                            
                            <h2 className="font-bold text-xl">백종원 먹방 보러가기</h2>
                            <p className="text-emerald-800 text-xs">백종원의 먹방 실시간 스트리밍</p>
                        </div>
                    </li>
                    <li onClick={()=>navigate('/event')}>
                        <img src="img/event_thumnail_01.png" alt="" />
                        <div className="text_box">                            
                            <h2 className="font-bold text-xl">이벤트 보러가기</h2>
                            <p className="text-emerald-800 text-xs">현재 진행중인 이벤트 모아보기</p>
                        </div>
                    </li>
                   
                </ul>
            </div>
            <h2 className="title text-4xl  mx-auto">맛집 지도로 보기</h2>
             <div  className="map_box mx-auto" onClick={()=>navigate('/map')} >
                <MainMap/>               
            </div> 
        </div>
    );
}

export default Home;