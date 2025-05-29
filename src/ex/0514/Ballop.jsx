import '../App.css'
import BestItem from './BestItem';
import Header from './Header';
import ImageSlide from './ImageSlide';
import NewArrivals from './NewArrivals';
import NewItem from './NewItem';
import Event from './Event';
import Footer from './Footer';
import Fixed from './fixed';

function Ballop() {
    return (
        <>
           <Header/>
           <ImageSlide/>
           <NewArrivals/>
           <NewItem/>           
           <BestItem/>
           <Event/>
           <Footer/>
           <Fixed/>
           
           
        </>
    );
}

export default Ballop;