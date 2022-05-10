import React, { useContext } from 'react'
import { MainContext } from '../context/mainContext'

export default function PrimaryHeader() {
    const { userProfile } = useContext(MainContext);
  return (
    <div className="category_container">
            <div className="admin_header">
                <div className="category_logo">
                    <p>Logo</p>
                </div>
                <div className="category_search_bar">
                    <img src="../../img/Search.png" alt=""/>
                    <input type="text" placeholder="Search"/>
                </div>
                <div className="category_header_content">
                    <p>How it works</p>
                    <p>Supports</p>
                    <p>Dashboard</p>
                </div>
                <div className="category_header_icon">
                    <img src="../../svg/Notification.svg" alt=""/>
                    <img src="../../svg/chat.svg" alt=""/>
                </div>
                <div className="category_header_avatar">
                    <img src={userProfile?.file !== null? userProfile?.file?.image :"../../svg/avatar.svg"} alt=""/>
                </div>
            </div>
            <div className="category_container_header">
                <p>Design</p>
                <p>Artwork</p>
                <p>Vtuber</p>
                <p>Video & Audio</p>
                <p>Services</p>
            </div>
        </div>
  )
}
