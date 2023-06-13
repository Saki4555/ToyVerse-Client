import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar";
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <>
            <div className="font-Poppins">
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Toaster></Toaster>
            </div>
        </>
    );
};

export default Main;