import './AppSearchList.css'
const SearchList = ({
    isComplete,
    value,
    onClick
})=>{

    return(
        <div 
            className="search_list"
            data-is-complete = {isComplete}
            onClick={onClick}
        >

            <p>{isComplete && <span>&#x2611;</span>}</p>
            <p>{value}</p>
        </div>
    )
}

export default SearchList