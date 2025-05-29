const TextButton = ({
    onClick,
    label
}) => {

    return(

        <p
            className="text_button"
            onClick={onClick}
        >
            {label}
        </p>
    )
}

export default TextButton