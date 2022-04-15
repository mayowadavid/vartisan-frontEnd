import React from 'react'
import Link from 'next/link'
const Sidebar = () => {
  return (
    <div className="sidebar">
            <div className="sidebar_logo">
                <p>Logo</p>
            </div>
            <div className="side_wrapper">
                <div className="side_body">
                    <div id="active" className="side_button active">
                        <div className="side_image">
                            <img src="../svg/dashboard.svg" alt=""/>
                        </div>
                        <Link href="/vartisan/seller-dasboard"><a>
                        <div className="side_content">
                            <p>Dashboard</p>
                        </div>
                        </a></Link>
                    </div>
                    <div className="side_button">
                        <div className="side_image">
                            <img src="../svg/gig.svg" alt=""/>
                        </div>
                        <Link href="/vartisan/seller-dasboard"><a><div className="side_content">
                            <p>Projects</p>
                        </div></a></Link>
                    </div>
                    <div className="side_button">
                        <div className="side_image">
                            <img src="../svg/earnings.svg" alt=""/>
                        </div>
                        <div className="side_content">
                            <p>Earnings</p>
                        </div>
                    </div>
                    <div className="side_button">
                        <div className="side_image">
                            <img src="../svg/analytics.svg" alt=""/>
                        </div>
                        <Link href="/vartisan/wallet"><a><div className="side_content">
                            <p>analytics</p>
                        </div></a></Link>
                    </div>
                    <div className="side_button">
                        <div className="side_image">
                            <img src="../svg/Wallet.svg" alt=""/>
                        </div>
                        <div className="side_content">
                            <p>wallet</p>
                        </div>
                    </div>
                    <div className="side_button">
                        <div className="side_image">
                            <img src="../svg/Profile.svg" alt=""/>
                        </div>
                        <Link href="/vartisan/settings"><a><div className="side_content">
                            <p>Vartisan profile</p>
                        </div></a></Link>
                    </div>
                </div>
                <div className="side_footer">
                    <div className="side_button">
                        <div className="side_image">
                            <img src="../svg/setting.svg" alt=""/>
                        </div>
                        <div className="side_content">
                            <p>Settings</p>
                        </div>
                    </div>
                    <div className="side_button">
                        <div className="side_image">
                            <img src="../svg/Logout.svg" alt=""/>
                        </div>
                        <div className="side_content">
                            <p>Log Out</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default Sidebar;