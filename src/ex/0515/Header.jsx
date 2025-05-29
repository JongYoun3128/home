import { useNavigate } from "react-router-dom";
function Header() {

    const navigate = useNavigate();
    return (
        <div>
             <ul className="header flex">
                <li onClick={()=>navigate('/')}>HOME</li>                
                <li onClick={()=>navigate('/event')}>EVENT</li>
                <li onClick={()=>navigate('/open')}>OPEN</li>
                <li onClick={()=>navigate('/best')}>BEST</li>
                
                
            </ul>
        </div>
    );
}

export default Header;