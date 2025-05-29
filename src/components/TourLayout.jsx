import { Outlet } from "react-router-dom";
import './styles/tourlayout.css'
import Header from "./Header";

function TourLayout() {
    return (
        <div>
            <main className="tour-layout">
                <Header/>
                <Outlet/>
            </main>
        </div>
    );
}

export default TourLayout;