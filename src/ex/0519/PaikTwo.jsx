import { useNavigate } from "react-router-dom";

function PaikTwo() {

        const navigate = useNavigate();
    return (
       <div className="one wrap">
            <button onClick={()=>navigate('/paik')}>
                <img className="arrow w-6 h-6" src="img/arrow_icon.png" alt="" />
            </button>
            <div className="title_box">                
                <h2 className="big_title text-3xl">맥시칸치킨하우스</h2>
                <p>유린기 스타일 야채통닭과 옛날 치킨!</p>
            </div>

            <ul className="map_box">
                <li className="map_menu icon_img">
                    <img src="img/mukbang_map_icon_01.png" alt="" />
                    <p>울산 동구 동부동</p>
                    <button onClick={()=>navigate('/paikmap_2')}>지도보기</button>
                </li>
                <li className="phone_menu icon_img">
                    <img src="img/mukbang_phone_icon.png" alt="" />
                    <p>062-222-0840</p>
                </li>

            </ul>
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/q5xpyh1l2zg?si=aMgJflCsOmhj6C7_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="youtube_box ">
                <img src="img/mukbang_youtube_icon.png" alt="" />
                <p>백종원 유튜브:2024.3.28. 영상 업로드</p>
            </div>
            <div className="subscript icon_img">
                <img src="img/mukbang_nife_icon.png" alt="" />
                <span>영상에 나온 메뉴</span>
                <p>고추야채통닭 ∙ 양념반후라이드반치킨</p>
            </div>
        </div>
    );
}

export default PaikTwo;