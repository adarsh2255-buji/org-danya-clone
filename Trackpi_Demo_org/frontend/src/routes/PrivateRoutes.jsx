import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext)

     return user ? <Outlet /> : <Navigate to="/" replace />;

    return children
}

export default PrivateRoute;