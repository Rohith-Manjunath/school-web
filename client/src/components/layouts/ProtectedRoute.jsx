import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const isAdmin = useSelector(state => state?.user?.user?.isAdmin ?? false);
    
    return (
        <>a
            {isAdmin ? <Outlet /> : <Navigate to="/" />}
        </>
    );
};

export default ProtectedRoute;
