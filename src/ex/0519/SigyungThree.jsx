
import { useNavigate } from "react-router-dom";

function SigyungThree() {

        const navigate = useNavigate();
    return (
        <div className="one wrap">
            <button onClick={()=>navigate('/sigyung')}>
                <img className="arrow w-6 h-6" src="img/arrow_icon.png" alt="" />
            </button>
            <div className="title_box">                
                <h2 className="big_title text-3xl">삼계탕마을</h2>
                <p>인삼주와 함께 즐기는 삼계탕</p>
            </div>

            <ul className="map_box">
                <li className="map_menu icon_img">
                    <img src="img/mukbang_map_icon_01.png" alt="" />
                    <p>서울 서초구 반포동</p>
                    <button onClick={()=>navigate('/sigyungmap_3')}>지도보기</button>
                </li>
                <li className="phone_menu icon_img">
                    <img src="img/mukbang_phone_icon.png" alt="" />
                    <p>02-536-7476</p>
                </li>

            </ul>
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/AcShBsKZW8w?si=sTtyFY-xu5bxrJ1d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="youtube_box ">
                <img src="img/mukbang_youtube_icon.png" alt="" />
                <p>성시경 먹을텐데:2024.7.31. 영상 업로드</p>
            </div>
            <div className="subscript icon_img">
                <img src="img/mukbang_nife_icon.png" alt="" />
                <span>영상에 나온 메뉴</span>
                <p>삼계탕</p>
            </div>
        </div>
    );
}

export default SigyungThree;