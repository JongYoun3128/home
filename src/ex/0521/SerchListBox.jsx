import './AppSearchList.css'
import AddButton from './AddButton'
import TextButton from './TextButton'
import { useState } from 'react'
import SearchInput from './SearchInput'
import SearchList from './SearchList'

const SearchListBox = () => {

    const [inputValue, setTextInput] = useState('');
    const [searchlist, setsearchList] = useState([]);

    const handleChange = (e) => {
        setTextInput(e.target.value)
    }

    const addsearch = () => {
        setsearchList((current)=> [...current,
            {isComplete:false, value:inputValue}]);
        setTextInput('');
    }

    const toggleComplete = (index) => {
        setsearchList((current)=> current.map((searchbox, searchindex)=>{

            if(searchindex ===index){
                const newsearch = Object.assign({},searchbox);

                newsearch.isComplete = !newsearch.isComplete

                return newsearch

            }else{
                return searchbox
            }
        }));
    };

    const isUnCompletedsearch = searchbox => !searchbox.isComplete;

    const getUnCompletedsearchList = () => searchlist.filter(isUnCompletedsearch)

    const removeAllCompletedsearchList = () => {
        setsearchList((current)=> current.filter(isUnCompletedsearch))
    }

    return(
        <div className="searchList Box">
           

            <div className="search_form">
                {/* //input//Addbutton */}
                <SearchInput
                    className="search_input"
                    placeHolder='검색할 항목을 입력하세요.'
                    value={inputValue}
                    onChange={handleChange}
                />
                <AddButton
                    className="search_button"
                    label='검색'
                    onClick={addsearch}
                />
            </div>

            <div className="search_list_box">
                {/* searchList */}
                {searchlist.map((searchbox, index)=>
                <>
                    <SearchList
                        key = {index}
                        isComplete={searchbox. isComplete}
                        value={searchbox. value}
                        onClick={()=>toggleComplete(index)}                    
                    />
                </>
                )}
            </div>
            
            <div className="search_footer">
                {/* 하고 싶은 것/textbutton */}
                <p>검색 항목 : {getUnCompletedsearchList().length} 개</p>
                <TextButton
                    label= '검색 목록 삭제'
                    onClick={removeAllCompletedsearchList}
                />
            </div>
        </div>

    )
}

export default SearchListBox

