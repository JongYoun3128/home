import './styles/button.css'

const Button =({label, onClickButton, size, type, radius, width})=>{


    const buttonSize = size || 'lg';
    const buttonColor = type || 'normal';
    const buttonradius = radius || 'radius';
    const buttonwidth = width || 'standard'
    const buttonCls = `clean-button ${buttonSize} ${buttonColor} ${buttonradius} ${buttonwidth}` 
    return(
        <button
        className={buttonCls}
        onClick={onClickButton}>
            {label}
            
        </button>
    )
}
export default Button;