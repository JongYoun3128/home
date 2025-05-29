import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import TopInner from "./components/TopInner";
function LayOut() {
    return (
        <div className="Layout">   
            <TopInner/>
            <Header/>     
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default LayOut;