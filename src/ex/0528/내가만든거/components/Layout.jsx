import { Outlet } from "react-router-dom";
import Header from "./Header";


function LayOut() {
    return (
        <div>
            <Header/>
            <Outlet/>
            
        </div>
    );
}

export default LayOut;