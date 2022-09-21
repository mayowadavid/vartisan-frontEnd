import React, { useContext } from 'react'
import { MainContext } from '../context/mainContext';
import {useRouter} from 'next/router';

const VartisanHeader = () => {
    const { userProfile, newNotification} =useContext(MainContext);
    const router = useRouter();
    const { userName } = router.query;
 
    const handleRoute = (e) => {
         e.preventDefault();
         router.push(`/${userName}`);
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
    <div className="admin_header">
                <div className="search_bar">
                    <img src="../img/Search.png" alt=""/>
                    <input type="text" placeholder="Search" />
                </div>
                <div className="header_content">
                    <p>How it works</p>
                    <p>Supports</p>
                    <p onClick={handleRoute}>Client Mode</p>
                </div>
                <div className="category_header_icon flex_show_row">
                    <div onClick={handleNotification} className='icon flex_show_row'>
                    {newNotification == true && <div className='client_active_notification'><p>1</p></div>}
                    <img src="../../svg/Notification.svg" alt=""/>
                    </div>
                    <div onClick={handleInbox} className='icon flex_show_row'>
                    <img src="../../svg/chat.svg" alt=""/>
                    </div>
                </div>
                <div className="header_avatar">
                    <img src={userProfile?.file !== undefined ? userProfile?.file?.image: "../../svg/avatar.svg"} alt=""/>
                </div>
            </div>
  )
}

export default VartisanHeader