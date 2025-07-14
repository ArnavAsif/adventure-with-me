import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className="text-center p-16">
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
            <span className="loading loading-ball loading-xl"></span>
        </div>
    }
    if (user) {
        return children
    }

    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoutes;