function login() {
    return (
        <div className="login flex flex-col">
            <img src="img/mukbang-logo.webp" alt="" />
            <h2>오늘 뭐 먹지?<br></br>메뉴 추천기가 정해드려요!</h2>
            <div className="option_text_box">
                <p>옵션을 선택하고 <br></br>
                '메뉴를 추천해줘!'를 눌러보세요.</p>
            </div>
            <ul className="food_list li_list flex">
                <li>전체</li>
                <li>요리</li>
                <li>식사</li>
                <li>간식</li>
            </ul>
            <ul className="food_type_list li_list flex">
                <li>전체</li>
                <li>한식</li>
                <li>중식</li>
                <li>일식</li>
                <li>양식</li>
                <li>아시아</li>
            </ul>
            <ul className="menu_list li_list flex">
                <li>전체</li>
                <li>혼밥</li>
                <li>친구</li>
                <li>연인</li>
                <li>가족</li>
                <li>모임</li>
            </ul>
            <button className="login_button">메뉴를 추천해줘!</button>

        </div>
    );
}

export default login;