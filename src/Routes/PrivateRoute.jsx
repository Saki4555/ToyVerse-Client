import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-hot-toast";





const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="pt-36">loading.....</div>;
    }

    if (user) {
        return children;
    }

    toast('You have to log in first to view details');
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;

}
    export default PrivateRoute;