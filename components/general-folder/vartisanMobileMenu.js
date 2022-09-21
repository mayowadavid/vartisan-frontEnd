import { useContext, useState } from "react";
import { MainContext } from "../context/mainContext";
import {useRouter} from 'next/router'

const VartisanSideMenu = () => {
    const { handleMenu, setSideMenu } = useContext(MainContext);
    const router = useRouter();

   const handleDashboard = () => {
        setSideMenu(false);
        router.push(`/${userName}/vartisan/dashboard`);
    }

    const home = () => {
        setSideMenu(false);
        router.push('/');
    }

    const handleCategories = () => {
        setSideMenu(false);
        router.push('/categories');
    }
  return (
    <div className="side_menu_overlay">
        <div className="mobile_side_menu">
            <div className="side_menu_header flex_show_row">
                <div onClick={home} className="side_menu_logo flex_show_row">
                    <img src="/img/v_large 1.png" />
                    <p>Vartisan</p>
                </div>
                <div className="side_menu_cancel" onClick={handleMenu}>
                    <img src="/img/close_small.png" alt=""/>
                </div>
            </div>
            <div className="side_menu_body">
                <div onClick={handleDashboard} className="side_menu_button">
                    <p>Dashboard</p>
                </div>
                <div onClick={handleCategories} className="side_menu_option flex_show_row">
                    <p>Categories</p>
                </div>
            </div>
        </div>
        <div onClick={handleMenu} className="menu_overlay"> </div>
    </div>
  )
}

export default VartisanSideMenu;