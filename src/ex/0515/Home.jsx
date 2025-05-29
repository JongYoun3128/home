import { useNavigate } from "react-router-dom";
function Home() {

    const navigate = useNavigate();
    return (
        <div className="home">

            <div className="menu_slide">                
            </div>

            <ul className="menu_list">
                <li onClick={()=>navigate('/Mishelin')}>
                    <img src="img/menu_icon_01.webp" alt="" />
                    <p>미쉐린</p>
                </li>
                <li onClick={()=>navigate('/Hidden')}>
                    <img src="img/menu_icon_02.webp" alt="" />
                    <p>히든플레이</p>
                </li>
                <li onClick={()=>navigate('/DateBest')}>
                    <img src="img/menu_icon_03.webp" alt="" />
                    <p>데이트맛집</p>
                </li>
                <li onClick={()=>navigate('/Wiski')}>
                    <img src="img/menu_icon_06.webp" alt="" />
                    <p>위스키</p>
                </li>
                <li onClick={()=>navigate('/Flower')}>
                    <img src="img/menu_icon_08.webp" alt="" />
                    <p>꽃주문</p>
                </li>
                <li>
                    <img src="img/menu_icon_04.webp" alt="" />
                    <p>오마카세</p>
                </li>
                <li>
                    <img src="img/menu_icon_07.webp" alt="" />
                    <p>우마카세</p>
                </li>
                <li>
                    <img src="img/menu_icon_05.webp" alt="" />
                    <p>이달의맛집</p>
                </li>
                <li>
                    <img src="img/menu_icon_09.webp" alt="" />
                    <p>한식</p>
                </li>
                <li>
                    <img src="img/menu_icon_10.webp" alt="" />
                    <p>모아보기</p>
                </li>
            </ul>
            <div className="magazine">
                <ul>
                    <li>
                        <img src="img/home_img_01.webp" alt="" />
                    </li>
                </ul>
            </div>
            
        </div>
    );
}

export default Home;