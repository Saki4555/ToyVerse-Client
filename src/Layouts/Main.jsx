import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar";
import { Toaster } from "react-hot-toast";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
    return (
        <>
            <div className="font-Poppins">
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
                <Toaster></Toaster>
            </div>
        </>
    );
};

export default Main;