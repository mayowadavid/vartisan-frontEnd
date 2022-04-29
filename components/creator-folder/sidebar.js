import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/mainContext'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Sidebar = () => {

    const {changeState, setChangeState, vartisanState} = useContext(MainContext);
    const router = useRouter();
   const { userName } = router.query;
   console.log(userName);
    const handleSideBar = (e) => {
        e.preventDefault();
        const {name, id} = e.target;
        console.log(name, id);
    }

    console.log(changeState.dashboaord);

  return (
    <div className="sidebar">
            <div className="sidebar_logo">
                <p>Logo</p>
            </div>
            <div className="side_wrapper">
                <div className="side_body">
                    <div id={changeState.dashboard == true ? "active": ' ' } onClick={handleSideBar} className="side_button">
                    <Link href={`/${userName}/vartisan/dashboard`}><a>
                        <div name="dashboard" className="side_image">
                            <img src="../../svg/dashboard.svg" alt=""/>
                        </div>
                        <div className="side_content">
                            <p>Dashboard</p>
                        </div>
                        </a>
                    </Link>
                    </div>
                    <div id={changeState.projects == true ? "active": ' ' } className="side_button">
                    <Link href={`/${userName}/vartisan/projects`}>
                        <a>
                        <div className="side_image">
                            <img src="../../svg/gig.svg" alt=""/>
                        </div>
                        <div className="side_content">
                            <p>Projects</p>
                        </div>
                        </a>
                    </Link>
                    </div>
                    <div id={changeState.message == true ? "active": ' ' } className="side_button">
                    <Link href={`/${userName}/vartisan/inbox`}>
                        <a>
                        <div className="side_image">
                            <img src="../../img/Message.png" alt=""/>
                        </div>
                        <div className="side_content">
                            <p>Message</p>
                        </div>
                        </a>
                    </Link>
                    </div>
                    <div id={changeState.earning == true ? "active": ' ' } className="side_button">
                    <Link href={`/${userName}/vartisan/wallet`}>
                        <a>
                        <div className="side_image">
                            <img src="../../svg/earnings.svg" alt=""/>
                        </div>
                        <div className="side_content">
                            <p>Earnings</p>
                        </div>
                        </a>
                    </Link>
                    </div>
                    <div id={changeState.analytic == true ? "active": ' ' } className="side_button">
                    <Link href={`/${userName}/vartisan/analytics`}>
                        <a>
                        <div className="side_image">
                            <img src="../../svg/analytics.svg" alt=""/>
                        </div>
                        <div className="side_content">
                            <p>analytics</p>
                        </div>
                        </a>
                    </Link>
                    </div>
                    <div id={changeState.wallet == true ? "active": ' ' } className="side_button">
                    <Link href={`/${userName}/vartisan/wallet`}>
                        <a>
                        <div className="side_image">
                            <img src="../../svg/Wallet.svg" alt=""/>
                        </div>
                        <div className="side_content">
                            <p>wallet</p>
                        </div>
                        </a>
                    </Link>
                    </div>
                    <div className="side_button">
                    <Link href={`/${userName}`}>
                        <a>
                        <div className="side_image">
                            <img src="../../svg/Profile.svg" alt=""/>
                        </div>
                        <div className="side_content">
                            <p>Vartisan profile</p>
                        </div>
                        </a>
                    </Link>
                    </div>
                </div>
                <div className="side_footer">
                    <div id={changeState.settings == true ? "active": ' ' } className="side_button">
                    <Link href={`/${userName}/vartisan/settings`}>
                        <a>
                        <div className="side_image">
                            <img src="../../svg/setting.svg" alt=""/>
                        </div>
                        <div className="side_content">
                            <p>Settings</p>
                        </div>
                        </a>
                    </Link>
                    </div>
                    <div id={changeState.logOut == true ? "active": ' ' } className="side_button">
                    <Link href="/vartisan/settings">
                        <a>
                        <div className="side_image">
                            <img src="../../svg/Logout.svg" alt=""/>
                        </div>
                        <div className="side_content">
                            <p>Log Out</p>
                        </div>
                        </a>
                    </Link>
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default Sidebar;