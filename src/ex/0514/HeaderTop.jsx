
function HeaderTop() {
    return (
        <div className="header_top p-3.5">
            <div className="header_logo">
                <img src="img/header_logo_img.png" alt="" />
            </div>
            <ul className="header_menu">
                <li className="">벨롭 Home</li>
                <li className="">벨롭 Sport</li>
                <li className="">벨롭 Aqua</li>
                <li className="">벨롭 Casual</li>
            </ul>
            <div className="input_box">
                <input type="text" placeholder="제목을 검색해보세요." className="input_text" />
                <img  className="input_icon" src="img/header_search_icon 01.png" alt="" />
            </div>
            <ul className="header_login_box">
                <li className="">로그인</li>
                <li className="">회원가입</li>
                <li className="">공지사항</li>
                <li className="">고객센터</li>
            </ul>
            <ul className="icon_box">                
                <li className="icon_box_01"></li>
                <li className="icon_box_02"></li>
            </ul>
        </div>
    );
}

export default HeaderTop;