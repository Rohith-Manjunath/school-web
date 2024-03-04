import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const { user } = useSelector(state => state.user);
    const { isAdmin } = user;

    return (
        <>
            {isAdmin ? <Outlet /> : <Navigate to="/" />}
        </>
    );
};

export default ProtectedRoute;
