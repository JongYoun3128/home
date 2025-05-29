import CalenderButton from "./CalenderButton";
import CalenderTabMenu from "./CalenderTabMenu";
import CalenderList from "./CalenderList";
import { Link } from "react-router";
import Search_icon from "./Search_icon";
import Aside from "./Aside";

const Calender = () => {

    

    return(
        <div className="calender_wrap">
            <CalenderTabMenu/>
            <Aside/>
            <Link to={'/search'}>
                <Search_icon/> 
            </Link>           
            <div className="calenderlist_wrap">
                <Link to={'/calenderdate'}>
                    <CalenderList/>
                </Link>
                
            </div>
                <Link to={'/add'}>            
                    <CalenderButton size={'lg'} type={'primary'} label={'추가하기'}/>
                </Link>      
                         
        </div>
    )

  
}

export default Calender;