import { useContext, useState } from "react";
import { MainContext } from "../context/mainContext";
import {useRouter} from 'next/router'

const HomeSideMenu = () => {
    const { handleMenu, setSideMenu } = useContext(MainContext);
    const router = useRouter();

    const handleLogin = () => {
        setSideMenu(false);
        router.push('/login');
    }

   const handleSignUp = () => {
    setSideMenu(false);
    router.push('/users/signup');
    }

    const handleCategories = () => {
        setSideMenu(false);
        router.push('/categories');
    }
  return (
    <div className="side_menu_overlay">
        <div className="mobile_side_menu">
            <div className="side_menu_header flex_show_row">
                <div className="side_menu_logo flex_show_row">
                    <img src="/img/v_large 1.png" />
                    <p>Vartisan</p>
                </div>
                <div className="side_menu_cancel" onClick={handleMenu}>
                    <img src="/img/close_small.png" alt=""/>
                </div>
            </div>
            <div className="side_menu_body">
                <div onClick={handleSignUp} className="side_menu_button">
                    <p>Join</p>
                </div>
                <div onClick={handleLogin} className="side_menu_option flex_show_row">
                    <p>Sign in</p>
                </div>
                <div onClick={handleCategories} className="side_menu_option flex_show_row">
                    <p>Browse Categories</p>
                </div>
            </div>
        </div>
        <div onClick={handleMenu} className="menu_overlay"> </div>
    </div>
  )
}

export default HomeSideMenu;