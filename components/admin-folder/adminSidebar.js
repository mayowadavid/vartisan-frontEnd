import React, { useContext, useEffect } from 'react'
import { MainContext } from '../context/mainContext'
import {Router, useRouter} from 'next/router';

const AdminSidebar = () => {
    const router = useRouter();
    const {setAdminPage, adminPage} = useContext(MainContext);
    const { userName } = router.query;

    const handleDashboard = (e) => {
        e.preventDefault();
        router.replace(`/${userName}/admin_section/inbox`)
    }
    
    const handleBlog = (e) => {
        router.replace(`/${userName}/admin_section/blog`);
    }
    
    const handleCategory = (e) => {
        e.preventDefault();
        router.replace(`/${userName}/admin_section/category`)
    }
    
    const handleProject = (e) => {
        e.preventDefault();
        router.replace(`/${userName}/admin_section/project`)
    }
    
    const handleUsers = (e) => {
        e.preventDefault();
        router.replace(`/${userName}/admin_section/users`)
    }
    
    const handleVartisan = (e) => {
        e.preventDefault();
        router.replace(`/${userName}/admin_section/vartisan`)
    }
    
    const handleLogOut = (e) => {
        e.preventDefault();
        localStorage.clearItem('token');
    }

  return (
    <div className="admin_category_sidebar">
                <div className="admin_category_top_container">
                    <div className="admin_category_top">
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../img/menu.png" alt=""/>
                            <p>Dashboard</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../img/commision.png" alt=""/>
                            <p>Admin Commission</p>
                        </div>
                        <div onClick={handleProject} className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../img/Document.png" alt=""/>
                            <p>Projects</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../img/Message.png" alt=""/>
                            <p>Messages</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../img/menu.png" alt=""/>
                            <p>Promotions</p>
                        </div>
                        <div onClick={handleCategory} className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../img/menu.png" alt=""/>
                            <p>Categories</p>
                        </div>
                        <div onClick={handleBlog} className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../img/menu.png" alt=""/>
                            <p>Blog</p>
                        </div>
                    </div>
                    <div className="admin_category_top">
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src={adminPage.homePage == true ? '../svg/w-home.svg' :"../../svg/home.svg"} alt=""/>
                            <p>Home Page Settings</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src={adminPage.payment? '../../svg/w-payment.svg' :"../../svg/payment.svg"} alt=""/>
                            <p>Payment Settings</p>
                        </div>
                        <div onClick={handleVartisan} className="admin_category_top_row flex_show_row remove_margin">
                            <img src={adminPage.vartisan == true ? '../../svg/w-vartisan.svg' :"../../svg/vartisan.svg"} alt=""/>
                            <p>Vartisan</p>
                        </div>
                        <div onClick={handleUsers} className="admin_category_top_row flex_show_row remove_margin">
                            <img src={adminPage.user_client == true ? '../../svg/w-client-user.svg' :"../../svg/client-user.svg"} alt=""/>
                            <p>Users/Clients</p>
                        </div>
                    </div>
                </div>
                <div className="admin_category_bottom">
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../svg/Setting.svg" alt=""/>
                            <p>General settings</p>
                        </div>
                        <div onClick={handleLogOut} className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../svg/Logout.svg" alt=""/>
                            <p>Log Out</p>
                        </div>
                </div>
    </div>
  )
}

export default AdminSidebar