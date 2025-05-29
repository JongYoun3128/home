import { Outlet } from "react-router-dom";
import Header from "./components/Header";


function LayOut() {
    return (
        <div>
            <Header/>
            <Outlet/>
            
        </div>
    );
}

export default LayOut;