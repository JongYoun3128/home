const PrimaryButton = ({
        onClick,
        label
}) => {
    return(
        <button
        className="primary_button"
        onClick={onClick}>
            {label}            
        </button>
    )
}

export default PrimaryButton