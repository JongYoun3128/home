import './AppSearchList.css'
const SearchInputList = ({
    value,
    placeHolder,
    onChange
}) => {

    return(
        <input
        type="text"
        className="input_box"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        />
    )
}

export default SearchInputList