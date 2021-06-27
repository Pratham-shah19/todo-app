import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import {auth,provider} from './firebase.js';
import './Login.css';
import { actionTypes } from './reducer.js';
import { useStateValue } from './StateProvider';


function Login() {
    const [{user}, dispatch] = useStateValue();
    const login = ()=>{
        auth.signInWithPopup(provider).then(result=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch((error) =>{alert(error.message)})
    };
    return (
        <div className="Login">
            <div className="login_container">

                <img src="https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png"/>
                <h2>Signin to Todo app</h2>
                <Button onClick={login}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
