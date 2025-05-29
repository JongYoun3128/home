const OutLineInput = ({
    value,
    placeHolder,
    onChange
}) => {

    return(
        <input 
        type="text"
        className="outline_input"
        placeholder={placeHolder}
        value={value}
        onChange={onChange} 
        />
    )
}

export default OutLineInput;