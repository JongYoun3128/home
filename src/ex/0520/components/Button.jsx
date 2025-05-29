import './styles/button.css'

const Button = ({label, onClickButton, size, type, border, radius}) => {

    const buttonSize = size || 'lg' ;
    const buttonColor = type || 'normal' ;
    const buttonBorder = border || 'border';
    const buttonRadius = radius || 'radius'
    const buttonCls =`todo-button ${buttonSize} ${buttonColor} ${buttonBorder} ${buttonRadius}`;
    return(
        <button 
            className={buttonCls}
            onClick={onClickButton}>
                {label}
        </button>

    );
}

export default Button;