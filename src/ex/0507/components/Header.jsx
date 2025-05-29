import '../App.css'

function Header() {
    return (
        <header>
            <div className="header_logo">
                <img src="https://i.namu.wiki/i/k-KMcaukd4ZSk1CMn6Jsn1xseaeo06pIABfHx-RuSoM8G_BcDjJ-LrYb5FZWvqTc_wEvgLtPCe48enkmi87S_A.svg" alt="" />
            </div>
           
            <ul className='header_menu'>
                <li className='on'>
                    <a href="#">신형만</a>               
                </li>
                <li>
                    <a href="#">봉미선</a>                    
                </li>
                <li>
                    <a href="#">짱구</a>
                </li>
                <li>
                    <a href="#">짱아</a>
                </li>
            </ul>
             <ul className='img_menu'>
                <li> <img src="https://i.namu.wiki/i/ISy5pUPaz336gzX_dToUZvSuVxSdoDInO90L3xBbPuhqX7XanDO5bjptC_k4OqeMNY7dNeeWGNrwZliI5e7G_Q.webp" alt="" /></li>
                <li> <img src="https://i.namu.wiki/i/JW2QBVsoDYd01-PdVQ6Vo_If87Eo9wjc6gitnvDHWJDtjYBkBv5qlc3FqinjqeOaGAPaVwx5w_EZbf2bGmpT4g.webp" alt="" /></li>
                <li>  <img src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201706/23/b71449f8-e830-45a0-bb4d-7b1a328e19f2.jpg" alt="" /></li>
                <li> <img src="https://i.namu.wiki/i/G9zOqNkgEpgPj7nx65voRxEER5xG_jBeXugTKthz6qN4HLIyZ81c-Q9C0QsAxaiNpLmg5xOpoY4QdVLP0ZAo9g.webp" alt="" /></li>
            </ul>
        </header>
        
        
    );
}


export default Header;
