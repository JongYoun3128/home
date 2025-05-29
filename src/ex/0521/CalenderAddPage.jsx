import CalenderButton from "../components/CalenderButton"
import CalenderInput from "../components/CalenderInput"
import { Link } from "react-router"
import './styles/calender.css'

const CalenderAddPage = () => {
    return(
        <div className="calender_wrap">
            <Link to={'/'}>
                <CalenderButton
                    size={'sm'} type={'normal'} label={'back'}
                />
            </Link>
            <h2>CALENDER</h2>
            <CalenderInput/>
            <Link to={'/'}>
                <CalenderButton
                    size={'lg'} type ={'primary'} label = {'완료'}
                />
            </Link>
            
        </div>
    )
}

export default CalenderAddPage