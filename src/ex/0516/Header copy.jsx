import { useNavigate } from "react-router-dom";
import '../App.css'
function Header() {

    const navigate = useNavigate();
    return (
        <div>
             <ul className="header ">
                <li onClick={()=>navigate('/')} className="familly"><span>짱구가족</span></li>                
                <li onClick={()=>navigate('/hyungman')}>                    
                    <img src="img/hyungman.webp" alt="" />
                    <p>신형만</p>
                </li>

                <li onClick={()=>navigate('/misun')}>
                    
                    <img src="img/misun.webp" alt="" />
                    <p>봉미선</p>
                </li>
                <li onClick={()=>navigate('/jjanggu')}>
                    
                    <img src="img/jjanggu.jpg" alt="" />
                    <p>신짱구</p>
                
                </li>

                <li onClick={()=>navigate('/jjangah')}>
                    
                    <img src="img/jjangah.webp" alt="" />
                    <p>신짱아</p>
                </li>
                
                
            </ul>
        </div>
    );
}

export default Header;