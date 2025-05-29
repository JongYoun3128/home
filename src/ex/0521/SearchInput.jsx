import './styles/search_input.css'

const SearchInput = () => {


    return(

        <div className="searchinput_wrap">
            <input type="text" 
            className="searchinput"
            placeholder="검색할 항목을 입력하세요."/>
        </div>

    );

}

export default SearchInput;


