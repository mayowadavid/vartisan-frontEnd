import React, { useContext } from 'react'
import { MainContext } from '../context/mainContext';
import {useRouter} from 'next/router';

const ClientHeader = () => {
   const { userProfile } =useContext(MainContext);
   const router = useRouter();
   const { userName } = router.query;

   const handleRoute = (e) => {
        e.preventDefault();
        router.push(`/${userName}/vartisan/dashboard`);
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
    <div className="Category_page_wrapper">
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
                    <p onClick={handleRoute}>Dashboard</p>
                </div>
                <div className="category_header_icon flex_show_row">
                    <div onClick={handleNotification} className='icon flex_show_row'>
                        <div className='client_active_notification'><p>1</p></div>
                    <img src="../../svg/Notification.svg" alt=""/>
                    </div>
                    <div onClick={handleInbox} className='icon flex_show_row'>
                    <img src="../../svg/chat.svg" alt=""/>
                    </div>
                </div>
                <div className="category_header_avatar">
                    <img src={userProfile?.file !== null? userProfile?.file?.image: "../../svg/avatar.svg"} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClientHeader;