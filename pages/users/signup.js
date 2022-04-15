import React, { useState, useEffect } from 'react'
import {useMutation, useQuery} from '@apollo/client';
import { CREATE_USER } from '../../components/queries/user/user';

export default function Signup() {
    const initialState = {
        userName: "",
        email: "",
        password: "",
    }
    const [signUp, setSignUp] = useState(initialState);

    const handleSignUp = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setSignUp({...signUp, [name]: value});
    }

    const [create, { data }] = useMutation(CREATE_USER, {
        variables: {
            createUserInput: signUp
        },
         onCompleted: (data) => {
            // getData
           console.log(data);
        },
        onError: (error) => {
            if (error) {
                console.log(error)
            }
        }
    });

    const submitSignUp = (e) => {
        e.preventDefault();
        create();
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
            <p>Sign up to find, hire and track the progress of oil services more easily.</p>
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
                    <input placeholder="input your username here" type="text"/> 
                </div>
                <div className="form_row">
                    <div className="checkbox_holder flex_show_row">
                        <input type="checkbox"/>
                        <label>I agree to the Terms and policies.</label>  
                    </div>
                    <p onClick={submitSignUp}>Create Account</p>
                </div>
                
            </form>
        </div>
    </div>
  )
}
