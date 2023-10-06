import { isAuthenticated } from '../../services/auth-service';
import { Navigate } from 'react-router-dom';
import Login from '../../routes/ClientHome/Login';

type props = {
    children: JSX.Element;
}

const PrivateRoute = ({children}: props) => {
  
    if(!isAuthenticated()){
        return <Navigate to={"/login"}></Navigate>
    }

    return children
}



export default PrivateRoute