import { useNavigate } from "react-router-dom";

function TopInner() {

    const navigate = useNavigate();
    return (
        <div className="top_inner flex">
            <div className="logo" onClick={()=>navigate('/')}>
                <img src="img/cachtable_logo.png" alt="" />
            </div>
            <input  className="top_input"
                    type="text"
                    placeholder="음식 메뉴를 검색해보세요." />
            <ul className="icon_box flex">
                <li><img src="img/header_login_icon_01.png" alt="" /></li>
                <li onClick={()=>navigate('/Login')}> <a href="#"><img src="img/header_login_icon_02.png" alt="" /></a></li>                
            </ul>

            
        </div>
    );
}

export default TopInner;