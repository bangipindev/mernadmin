import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./App.scss";
import { useSelector } from 'react-redux';
import { AdminRoute, WebRoute } from '../routes';

const App = () => {
    const { user }                = useSelector(state => state.Authenticated)
    return (
        <>
            {user ? (
                <AdminRoute />
            ) : (
                <WebRoute />
                ) 
            }
        </>
    )
}

export default App