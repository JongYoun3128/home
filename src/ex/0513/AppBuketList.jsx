import BuketListBox from "./BuketListBox"
import TourList from "./TourList"
import ShopingList from "./ShopingList"
import './AppBuketList.css'


const App = () => {

    return(
        <article className="BucketListBox">
            <TourList/>             
            <BuketListBox/>
            <ShopingList/>
           
        </article>
    )
}

export default App

