import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function AdminRoute({children}){
    const {user}=useContext(AuthContext);
    if(!user.token ||   user.role !=="Admin" ){
        return <navigator to="/"/>
    }
    return children;
}

export default AdminRoute;