import { Navigate } from "react-router-dom";

function AdminRoute({children}){
    const token=localStorage.getItem("token");
    const role=localStorage.getItem("role")

    if(!token || role !=="Admin"){
        alert("Access denied, Admin only")
        return <Navigate to="/"/>;
    }
    return children;

}


export default AdminRoute;