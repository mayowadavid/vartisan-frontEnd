import React, { useContext } from 'react'
import { MainContext } from '../context/mainContext';

const ClientMobileHeader = () => {
    const { userProfile } =useContext(MainContext);
  return (
    <div className="mobile_drop_header flex_show_row">
            <div className="menu_left_side">
                <div className="Menu_icon">
                    <img src="img/menu_bar.png" alt=""/>
                </div>
            </div>
            <div className="menu_right_side flex_show_row">
                <div className="menu_search mobile_icon">
                    <img src="svg/Search.svg" alt=""/>
                </div>
                <div className="menu_notification mobile_icon">
                    <img src="svg/Notification.svg" alt=""/>
                </div>
                <div className="menu_comment mobile_icon">
                    <img src="svg/Chat.svg" alt=""/>
                </div>
                <div className="menu_avatar">
                    <img src={userProfile?.file !== null? userProfile?.file?.image: "svg/avatar.svg"} alt=""/>
                </div>
            </div>
        </div>
  )
}

export default ClientMobileHeader;