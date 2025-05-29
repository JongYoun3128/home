
import { useNavigate } from "react-router-dom";

function SigyungEight() {

        const navigate = useNavigate();
    return (
        <div className="one wrap">
            <button onClick={()=>navigate('/sigyung')}>
                <img className="arrow w-6 h-6" src="img/arrow_icon.png" alt="" />
            </button>
            <div className="title_box">                
                <h2 className="big_title text-3xl">막동이회관</h2>
                <p>정말 맛있다! 정말 맛있는 고기집!</p>
            </div>

            <ul className="map_box">
                <li className="map_menu icon_img">
                    <img src="img/mukbang_map_icon_01.png" alt="" />
                    <p>광주 동구 소태동</p>
                    <button onClick={()=>navigate('/sigyungmap_8')}>지도보기</button>
                </li>
                <li className="phone_menu icon_img">
                    <img src="img/mukbang_phone_icon.png" alt="" />
                    <p>062-222-0840</p>
                </li>

            </ul>
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/sGeuize0CAA?si=ldqCPlazmU5s8jiB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="youtube_box ">
                <img src="img/mukbang_youtube_icon.png" alt="" />
                <p>성시경 먹을텐데:2024.08.21 영상 업로드</p>
            </div>
            <div className="subscript icon_img">
                <img src="img/mukbang_nife_icon.png" alt="" />
                <span>영상에 나온 메뉴</span>
                <p>생고기 ∙ 안심추리 ∙ 차돌박이 ∙ 갈비살 ∙ 살치살 ∙ 토시살 ∙ 곰탕 ∙ 돌솥비빔밥 ∙ 누룽지</p>
            </div>
        </div>
    );
}

export default SigyungEight;