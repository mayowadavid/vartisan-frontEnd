import { useLazyQuery, useQuery } from '@apollo/client';
import {Router, useRouter} from 'next/router';
import React, { useState, useEffect } from 'react'
import { LOGIN } from '../components/queries/user/user'

export default function Login() {
    const router = useRouter()
    const initialState = {
        email: '',
        password: '',
    }
    const [progress, setProgress] = useState(false);
    const[ loginUser, setLogin ] = useState(initialState);

    const handleLogin = (e)=> {
        e.preventDefault();
        const {name, value} = e.target;
        setLogin({...loginUser, [name]: value});
    }

    const [ queryUser, { data } ]= useLazyQuery(LOGIN, {
        fetchPolicy: "network-only",
        onCompleted: async (data) => {
            console.log(data)
            const { userName, refreshToken, refreshTokenExp } = data.loginUser;
            const token = refreshToken;
            await window.localStorage.setItem("token", JSON.stringify(token));
            await window.localStorage.setItem("session", JSON.stringify(refreshTokenExp));
            router.replace(`/${userName}`);
        },
        onError: (error) => {
            console.log(error)
        },
    });
    

    const submitLogin = async (e) => {
        e.preventDefault();
        setProgress(!progress);
        let { email, password } = loginUser;
        email = email.trim().toLowerCase();
        password = password.trim();
        const { data, error } = await queryUser({variables: {
            userInput: {
                email,
                password,
            },
        }});
        console.log(data, error);
        await data.loginUser.userName !== undefined && setProgress(!progress);
        await error !== undefined && setProgress(!progress);
    }

    const handleJoin = (e) => {
        e.preventDefault();
        router.push('/users/signup');
    }

  return (
    <div className="registration_page flex_show_row">
        <div className="login_left">
            <div className="side_background flex_show_column">
                <div className="log_reg-vec1 log_regvec"></div>
                <div className="log_reg-vec2 log_regvec"></div>
                <div className="log_reg-vec3 log_regvec"></div>
            </div> 
            <div className="login_main flex_show_row">
                <div className="login_header remove_margin">
                    <p>Vartisan</p>
                    <p>The Premium Marketplace for Creatives</p>
                </div>
                <div className="login_image flex_show_row">
                    <img src="img/v_large 1.png" alt=""/>
                </div>
            </div>
        </div>
        <div className="login_right">
            <div className="login_right_header remove_margin">
                <p>Login</p>
                <p>Sign in to gain access to more features</p>
            </div>
            <form>
                <div className="login_form_row">
                    <div className="username_wrapper flex_show_row">
                        <label>Email</label>
                    </div>
                    <input name="email" onChange={handleLogin} placeholder="input your username here" type="text"/> 
                </div>
                <div className="login_form_row">
                    <div className="username_wrapper flex_show_row">
                        <label>Password</label>
                    </div>
                    <input name="password" onChange={handleLogin} placeholder="input your password here" type="text"/> 
                </div>
                <div className="login_form_row">
                    <div className="checkbox_holder flex_show_row">
                        <div className="Remember">
                            <input type="checkbox"/>
                            <label>Remember me</label> 
                        </div>
                        <div className="reset_password">
                            <label>Forget password?</label>  
                        </div>
                    </div>
                    <div className="login_submit">
                        {
                            progress == true ? <button className="loader"><img src="svg/white-loading.svg" /></button>:
                            <button onClick={submitLogin}>Sign in</button>
                        }
                    </div>
                    <div className="login_sign_up flex_show_row">
                        <p>Don't have an account yet?</p>
                        <p onClick={handleJoin}>Join now</p>
                    </div>
                </div>
                
            </form>
        </div>
    </div>
  )
}
