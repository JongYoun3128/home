import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import './App.css'
function LayOut() {
    return (
        <div className="Layout">   
            <Header/>     
            <Outlet/>
        </div>
    );
}

export default LayOut;