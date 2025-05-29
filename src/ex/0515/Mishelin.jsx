import { useNavigate } from "react-router-dom";

function Mishelin() {
    const navigate = useNavigate();
    return (
        <ul className="mishelin">
            <li >
                <img src="img/Mishelin_img_01.webp" alt="" />
                </li>
            <li onClick={()=>navigate('/solbab')}>
                <img src="img/Mishelin_img_02.png" alt="" />
                </li>
            <li>
                <img src="img/Mishelin_img_03.png" alt="" />
                </li>
            
        </ul>
    );
}

export default Mishelin;