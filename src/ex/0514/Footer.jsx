function Footer() {
    return (
        <footer className="footer w-full bg-emerald-950 text-white">
            <div className="wrapper">
                <div className="footer_logo">
                    <img src="img/ballop_logo.svg" alt="" />
                </div>
                <div className="footer_text_box flex p">
                    <ul className="information">
                        <li className="brand">
                                <ul className="sub_text flex">
                                    <li>브랜드 소개</li>
                                    <li>개인정보처리방침</li>
                                    <li>이용약관</li>
                                    <li>이용안내</li>
                                </ul>
                        </li>
                        <li>
                                <ul className="sub_text company">
                                    <li>
                                        <ul className=" flex">
                                            <li>회사명:(주)지티에스글로벌</li>
                                            <li>대표이사:최선미</li>
                                            <li>사업자등록번호:128-87-01934[사업자정보확인]</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul className="flex">
                                            <li>주소:경기도 성남시 분당구 판교로 744(야탑동) 분당테크노파크 C동 508호</li>
                                            <li>하나은행 322-890062-59304 예금주:(주)지티에스글로벌</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul className="flex">
                                            <li>통신판매업신고:2014-경기성남-1676</li>
                                            <li>개인정보취급책임자:손경호</li>
                                            <li>이메일:delverty@ballop.co.kr</li>
                                        </ul>
                                    </li>
                                </ul>
                        </li>
                    
                    </ul>
                    <ul className="announcement">
                        <ul>
                            <li>공지사항</li>
                            <li>상품후기</li>
                            <li>뉴스</li>
                            <li>이벤트</li>
                        </ul>
                        <ul>
                            <li>스타와 함께</li>
                            <li>룩북</li>
                            <li>비디오</li>
                            <li>매장안내</li>
                        </ul>
                        <ul>
                            <li className="tell">&#9742; 1668-3740</li>
                            <li>AM 10:00~PM12:00 / PM02:00~05:00</li>
                            <li>토,일,공휴일 휴무</li>
                            <li>이메일:delverty@ballop.co.kr</li>
                        </ul>
                        
                    </ul>

                </div>
            </div>


        </footer>
    );
}

export default Footer;