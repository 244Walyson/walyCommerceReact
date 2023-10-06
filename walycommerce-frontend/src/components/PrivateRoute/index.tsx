import { hasAnyRoles, isAuthenticated } from '../../services/auth-service';
import { Navigate } from 'react-router-dom';

type props = {
    children: JSX.Element;
}

const PrivateRoute = ({children}: props) => {
  
    if(!isAuthenticated() || !hasAnyRoles(["ROLE_ADMIN"])){
        return <Navigate to={"/login"}></Navigate>
    }

    return children
}



export default PrivateRoute