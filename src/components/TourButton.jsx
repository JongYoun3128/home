import './styles/tourbutton.css'

function TourButton({size,color,style,label,onClickButton}) {

    const buttonSize = size || 'lg';
    const buttonColor = color || 'black';
    const buttonStyle = style || 'bold';
    const buttonCls = `tour-button ${buttonColor} ${buttonStyle} ${buttonSize}`

    return (
        <button className={buttonCls}
        onClick={onClickButton}
        >
            {label}
        </button>
    );
}

export default TourButton;