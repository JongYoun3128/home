import { Link } from "react-router"
import CalenderButton from "../components/CalenderButton"
import AppSearchPage from "../components/AppSearchPage"
import './styles/search.css'



const Search = () => {
    return(
        <div className="search">
            <div className="searchinput_box">
                
                <Link to={'/'}>
                    <CalenderButton
                    size={'sm'} type={'normal'} label={'back'}
                    />
                </Link>


                {/* <SearchInput/> */}

                <AppSearchPage/>
            


            </div>

            
        
        </div>

    )

}
export default Search