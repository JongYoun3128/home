import { useNavigate } from "react-router-dom";

function PaikOne() {

    const navigate = useNavigate();

    return (
        <div className="one wrap">
            <button onClick={()=>navigate('/paik')}>
                <img className="arrow w-6 h-6" src="img/arrow_icon.png" alt="" />
            </button>
            <div className="title_box">                
                <h2 className="big_title text-3xl">산동포자</h2>
                <p>숨겨두고 싶은 화교 운영 중국집</p>
            </div>

            <ul className="map_box">
                <li className="map_menu icon_img">
                    <img src="img/mukbang_map_icon_01.png" alt="" />
                    <p>인천 부평구 십정동</p>
                    <button onClick={()=>navigate('/paikmap_1')}>지도보기</button>
                </li>
                <li className="phone_menu icon_img">
                    <img src="img/mukbang_phone_icon.png" alt="" />
                    <p>062-222-0840</p>
                </li>

            </ul>
            <iframe width="100%" height="500px" src="https://www.youtube.com/embed/or2TgTRjPq8?si=DC8g7VaHRn0kBeBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="youtube_box ">
                <img src="img/mukbang_youtube_icon.png" alt="" />
                <p>백종원 유튜브:2024.4.18. 영상 업로드</p>
            </div>
            <div className="subscript icon_img">
                <img src="img/mukbang_nife_icon.png" alt="" />
                <span>영상에 나온 메뉴</span>
                <p>홍소스즈토우 ∙ 꼴뚜기튀김 ∙ 바지락볶음 ∙ 홍소로우 ∙ 중국식새우튀김</p>
            </div>
        </div>
    );
}

export default PaikOne;