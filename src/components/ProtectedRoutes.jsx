import { Navigate, Outlet} from 'react-router-dom';

const ProtectedRoutes = () => {
    const userToken = localStorage.getItem('token');


    if (!userToken) {
        return <Outlet />
    } else {
        return <Navigate to='/' />
    }

};

export default ProtectedRoutes;