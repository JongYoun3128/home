import './styles/calenderitem.css'

const CalenderItem = ({title}) => {

    return(
        <div className="calenderitem_wrap">
            <div className="calenderitem_title">
                {title}
            </div>
        </div>

    )
}

export default CalenderItem;