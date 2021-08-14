import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';
import './login.css'

export const LoginScreen = ({ history}) => {

    const { dispatch } = useContext(AuthContext);


    const handleLogin = () => {
        
        const lastPath = localStorage.getItem('lastPath') || '/';
        
        dispatch({
            type: types.login,
            payload: {
                name: 'Luis',
            }
        })
        
        history.replace(lastPath)
    }

    return (
        <div className="container mt-5 text-center custom">
            <h1>Login Screen</h1>
            <hr/>
            <button className="btn btn-primary"
                    onClick={handleLogin}
            > Login </button>
        </div>
    )
}
