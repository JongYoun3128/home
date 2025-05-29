
import { useNavigate } from "react-router-dom";

function SigyungFive() {

    const navigate = useNavigate();

    return (
        <div className="one wrap">
            <button onClick={()=>navigate('/sigyung')}>
                <img className="arrow w-6 h-6" src="img/arrow_icon.png" alt="" />
            </button>
            <div className="title_box">                
                <h2 className="big_title text-3xl">먹거리집</h2>
                <p>전라도 출신 사장님의 수육&순대국 맛집!</p>
            </div>

            <ul className="map_box">
                <li className="map_menu icon_img">
                    <img src="img/mukbang_map_icon_01.png" alt="" />
                    <p>서울 중랑구 상봉동</p>
                    <button onClick={()=>navigate('/sigyungmap_5')}>지도보기</button>
                </li>
                <li className="phone_menu icon_img">
                    <img src="img/mukbang_phone_icon.png" alt="" />
                    <p>02-493-3100</p>
                </li>

            </ul>
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/vDVTYhm-2uU?si=RClHRfLV8wls2MWx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="youtube_box ">
                <img src="img/mukbang_youtube_icon.png" alt="" />
                <p>성시경 먹을텐데:2024.7.8. 영상 업로드</p>
            </div>
            <div className="subscript icon_img">
                <img src="img/mukbang_nife_icon.png" alt="" />
                <span>영상에 나온 메뉴</span>
                <p>수육 ∙ 내장 ∙ 제육볶음 ∙ 순대국</p>
            </div>
        </div>
    );
}

export default SigyungFive;