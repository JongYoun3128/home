
import { useNavigate } from "react-router-dom";

function SigyungSeven() {

        const navigate = useNavigate();
    return (
        <div className="one wrap">
            <button onClick={()=>navigate('/sigyung')}>
                <img className="arrow w-6 h-6" src="img/arrow_icon.png" alt="" />
            </button>
            <div className="title_box">                
                <h2 className="big_title text-3xl">하남숯불닭갈비</h2>
                <p>케이윌의 원픽 숯불 닭갈비 맛집!</p>
            </div>

            <ul className="map_box">
                <li className="map_menu icon_img">
                    <img src="img/mukbang_map_icon_01.png" alt="" />
                    <p>경기 하남시 미사동</p>
                    <button onClick={()=>navigate('/sigyungmap_7')}>지도보기</button>
                </li>
                <li className="phone_menu icon_img">
                    <img src="img/mukbang_phone_icon.png" alt="" />
                    <p>010-000-1004</p>
                </li>

            </ul>
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/4tcBe6L8uzI?si=dxLHf1ASP9BGHaxl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="youtube_box ">
                <img src="img/mukbang_youtube_icon.png" alt="" />
                <p>성시경 먹을텐데:2024.6.24. 영상 업로드</p>
            </div>
            <div className="subscript icon_img">
                <img src="img/mukbang_nife_icon.png" alt="" />
                <span>영상에 나온 메뉴</span>
                <p>숯불닭갈비 모듬세트</p>
            </div>
        </div>
    );
}

export default SigyungSeven;