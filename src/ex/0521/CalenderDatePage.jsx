import CalenderButton from "../components/CalenderButton";
import CalenderInput from "../components/CalenderInput";
import { Link } from "react-router";
import './styles/calender.css'

const CalenderDatePage = () => {

    return(
        <div className="calender_wrap">
            <Link to={'/'}>
                <CalenderButton
                    size={'sm'} type={'normal'} label={'Back'}
                />  
            </Link>

            <h2>
                Date Schedule
            </h2>
            <CalenderInput/>

            <div className="calenderdate-buttons-wrapper">
                <Link to={'/'}>
                    <CalenderButton
                        size={'lg'} type={'primary'} label={'OK'}
                    />
                </Link>
                <Link to={'/'}>
                    <CalenderButton
                        size={'lg'} type={'danger'} label={'Delete'}
                    />
                </Link>
            </div>

        </div>

    )
}

export default CalenderDatePage;