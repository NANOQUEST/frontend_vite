import { Navigate, Outlet } from "react-router";
import { getToken } from "../utils/tokenService";
import { useAuth } from "../contexts/authContext";

const ProtectedRoute = () => {
    const token = getToken();
    const { setLoginPopupVisibility } = useAuth();
    if (!token) {
        setLoginPopupVisibility(true);
        return <Navigate to="/" />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
