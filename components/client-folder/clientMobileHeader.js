import React, { useContext } from 'react'
import { MainContext } from '../context/mainContext';
import {useRouter} from 'next/router';

const ClientMobileHeader = () => {
    const { userProfile, newNotification, setSideMenu } =useContext(MainContext);
    const router = useRouter();
    const { userName } = router.query;

   const handleMenu = () => {
    setSideMenu(true);
   }

   const handleNotification = (e) => {
       e.preventDefault();
       router.push(`/${userName}/notification`);
  }

  const handleInbox = (e) => {
   e.preventDefault();
   router.push(`/${userName}/inbox`);
   }
  return (
    <div className="mobile_drop_header flex_show_row">
            <div className="menu_left_side">
                <div onClick={handleMenu} className="Menu_icon">
                    <img src="/img/menu_bar.png" alt=""/>
                </div>
            </div>
            <div className="menu_right_side flex_show_row">
                <div className="menu_search mobile_icon">
                    <img src="/svg/Search.svg" alt=""/>
                </div>
                <div onClick={handleNotification} className="menu_notification mobile_icon">
                    <img src="/svg/Notification.svg" alt=""/>
                </div>
                <div onClick={handleInbox} className="menu_comment mobile_icon">
                    <img src="/svg/Chat.svg" alt=""/>
                </div>
                <div className="menu_avatar">
                    <img src={userProfile?.file !== undefined ? userProfile?.file?.image: "/svg/avatar.svg"} alt=""/>
                </div>
            </div>
        </div>
  )
}

export default ClientMobileHeader;