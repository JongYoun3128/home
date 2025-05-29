import './styles/calenderbutton.css'

const CalenderButton = ({label,onClickButton, size, type, border, radius}) => {

        const buttonSize =size || 'lg';
        const buttonColor = type || 'normal' ;
        const buttonBorder = border || 'border';
        const buttonRadius = radius || 'radius';
        const buttonCls =`calender-button ${buttonSize} ${buttonColor} ${buttonBorder} ${buttonRadius}`;
    return(

        <button
            className={buttonCls}
            onClick={onClickButton}>
                {label}

        </button>

        
    )
}

export default CalenderButton;