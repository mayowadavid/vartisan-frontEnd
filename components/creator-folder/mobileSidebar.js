import { useContext } from "react";
import { MainContext } from "../context/mainContext";
import {useRouter} from 'next/router'

const MobileSideBar = () => {
   const { handleMenu, setSideMenu } = useContext(MainContext);
   const router = useRouter();
   const { userName } = router.query;

   const handleDashboard = () => {
        setSideMenu(false);
        router.push(`/${userName}/vartisan/dashboard`);
   }

   const handleClient = () => {
    setSideMenu(false);
    router.push(`/${userName}`);
    }

    const handleProjects = () => {
        setSideMenu(false);
        router.push(`/${userName}/vartisan/projects`);
    }

    const handleEarning = () => {
        setSideMenu(false);
        router.push(`/${userName}/vartisan/wallet`);
    }

    // const handleAnalytics = () => {
    //     router.push(`/${userName}/vartisan/wallet`);
    // }

    // const handleWallet = () => {
    
    // }

    // const handleProfile = () => {
    
    // }

    // const handleSettings = () => {
    //     router.push(`/${userName}/vartisan/`);
    // }

    const handleLogOut = () => {
        setSideMenu(false);
        localStorage.clearItem('token');
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
                <div onClick={handleClient} className="side_menu_button">
                    <p>Client Mode</p>
                </div>
                <div onClick={handleDashboard} className="side_menu_option flex_show_row">
                    <img src="/svg/black_dashboard.svg" alt=""/>
                    <p>Dashboard</p>
                </div>
                <div onClick={handleProjects} className="side_menu_option flex_show_row">
                    <img src="/svg/gig.svg" alt=""/>
                    <p>Projects</p>
                </div>
                <div onClick={handleEarning} className="side_menu_option flex_show_row">
                    <img src="/svg/earnings.svg" alt=""/>
                    <p>Earnings</p>
                </div>
                <div className="side_menu_option flex_show_row">
                    <img src="/svg/analytics.svg" alt=""/>
                    <p>Analytics</p>
                </div>
                <div className="side_menu_option flex_show_row">
                    <img src="/svg/Wallet.svg" alt=""/>
                    <p>Wallet</p>
                </div>
                <div className="side_menu_option flex_show_row">
                    <img src="/svg/Profile.svg" alt=""/>
                    <p>Vartisan Profile</p>
                </div>
            </div>
            <div className="menu_sub_footer">
                <p>How it works</p>
                <p>Support</p>
            </div>
            <div className="menu_footer flex_show_column">
                <div className="side_menu_option flex_show_row">
                    <img src="/svg/Setting.svg" alt=""/>
                    <p>Settings</p>
                </div>
                <div onClick={handleLogOut} className="side_menu_option flex_show_row">
                    <img src="/svg/Logout.svg" alt=""/>
                    <p>Log Out</p>
                </div>
            </div>
        </div>
        <div onClick={handleMenu} className="menu_overlay"> </div>
    </div>
    )

}

export default MobileSideBar;