import React, { useState, useContext } from 'react'
import { MainContext } from '../../components/context/mainContext';
import {Router, useRouter} from 'next/router';

export default function Signup() {
    const router = useRouter()
    const initialState = {
        userName: "",
        email: "",
        password: "",
        createdAt: "",
    }
    const [signUp, setSignUp] = useState(initialState);
    const [progress, setProgress] = useState(false);
    const [err, setErr] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const handleSignUp = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setSignUp({...signUp, [name]: value});
    }

    const verifyPassword = (e) => {
        e.preventDefault();
        const { value } = e.target;
        signUp.password !== confirmPassword && setErr("password does not match");
        setConfirmPassword(value);
    }

    const {userSignUp} =useContext(MainContext);

    const submitSignUp = async (e) => {
        e.preventDefault();
        await setProgress(!progress); 
        const {userName, email, password, createdAt} = signUp;
        const date = Date.now();
        createdAt
        const {data, error} = await userSignUp({
            variables: {
                userSignUp: {
                    userName, 
                    email, 
                    password, 
                    createdAt: date.toString(),
                }
            }
        })
        if(data){
            await setProgress(!progress); 
            router.replace('/login');
        } 
    }

    
  return (
    <div className="registration_page flex_show_row">
        <div className="registration_left">
            <div className="side_background flex_show_column">
                <div className="reg-vec1 regvec"></div>
                <div className="reg-vec2 regvec"></div>
                <div className="reg-vec3 regvec"></div>
            </div> 
            <div className="side_main flex_show_column remove_margin">
                <p>Vartisan</p>
                <p>Premium Marketplace</p>
                <img src="/img/v_large 1.png" alt=""/>
            </div>
        </div>
        <div className="registration_right">
            <p>Registration</p>
            <p>Commission talented creatives the right way.</p>
            <p>Sign up to find, hire and track the progress of all services more easily.</p>
            <form>
                <div className="form_row">
                    <div className="username_wrapper flex_show_row">
                        <label>Username</label> <span>*your Username can not be changed</span>
                    </div>
                    <input name="userName" onChange={handleSignUp} placeholder="input your username here" type="text"/> 
                </div>
                <div className="form_row">
                    <label>Email </label>
                    <input name="email" onChange={handleSignUp} placeholder="input your email here" type="text"/> 
                </div>
                <div className="form_row">
                    <label>Password</label> 
                    <input name="password" onChange={handleSignUp} placeholder="password min 8 character" type="text"/>
                </div>
                <div className="form_row">
                    <label>confirm Password</label> 
                    <input name="confirmPassword" onChange={verifyPassword} placeholder="input your username here" type="text"/> 
                </div>
                <div className="form_row">
                    <div className="checkbox_holder flex_show_row">
                        <input type="checkbox"/>
                        <label>I agree to the Terms and policies.</label>  
                    </div>
                    {
                        progress == true ? <p className="loader"><img src="svg/white-loading.svg" /></p>:
                        <p onClick={submitSignUp}>Create Account</p>
                    }
                </div>
                
            </form>
        </div>
    </div>
  )
}
