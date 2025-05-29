
import { useNavigate } from "react-router-dom";

function SigyungNine() {

        const navigate = useNavigate();
    return (
        <div className="one wrap">
            <button onClick={()=>navigate('/sigyung')}>
                <img className="arrow w-6 h-6" src="img/arrow_icon.png" alt="" />
            </button>
            <div className="title_box">                
                <h2 className="big_title text-3xl">풍성감자탕</h2>
                <p>맑고 깨끗한 맛의 우거지 감자탕!</p>
            </div>

            <ul className="map_box">
                <li className="map_menu icon_img">
                    <img src="img/mukbang_map_icon_01.png" alt="" />
                    <p>서울 광진구 구의동</p>
                    <button onClick={()=>navigate('/sigyungmap_9')}>지도보기</button>
                </li>
                <li className="phone_menu icon_img">
                    <img src="img/mukbang_phone_icon.png" alt="" />
                    <p>02-446-0354</p>
                </li>

            </ul>
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/wKNO7zfr8JQ?si=zQJERNexjEIeSOR_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="youtube_box ">
                <img src="img/mukbang_youtube_icon.png" alt="" />
                <p>성시경 먹을텐데:2024.6.10. 영상 업로드</p>
            </div>
            <div className="subscript icon_img">
                <img src="img/mukbang_nife_icon.png" alt="" />
                <span>영상에 나온 메뉴</span>
                <p>감자탕</p>
            </div>
        </div>
    );
}

export default SigyungNine;