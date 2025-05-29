import { Outlet } from "react-router";
import Main from "./components/Main";
import Header from "./components/Header";


function App() {
    
    return (
        <>
        <Header/>
        <Main>
            <Outlet/>
        </Main>
        </>
    );
}

export default App;