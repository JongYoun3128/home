import { Outlet } from "react-router";
import './styles/layout.css'


const LayOut = () => {

    return(
        <>
            <main className="layout-wrapper">
                <Outlet/>
            </main>        
        </>
    )

}

export default LayOut;