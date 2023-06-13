import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar";

const Main = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </>
    );
};

export default Main;