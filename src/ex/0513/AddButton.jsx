const AddButton = ({
    onClick,
    label
}) => {

    return(
        <button
        className="add_button"
        onClick={onClick}
        >
            {label}
        </button>
    )
}



export default AddButton