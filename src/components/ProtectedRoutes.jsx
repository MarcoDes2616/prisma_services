import { Navigate, Outlet} from 'react-router-dom';

const ProtectedRoutes = () => {
    const userToken = localStorage.getItem('userLocal');


    if (userToken) {
        return <Outlet />
    } else {
        return <Navigate to='/' />
    }

};

export default ProtectedRoutes;