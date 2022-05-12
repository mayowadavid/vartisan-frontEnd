import React from 'react'
import {useRouter} from 'next/router';

const VartisanHeader = () => {

    const router = useRouter();
    const { userName } = router.query;
 
    const handleRoute = (e) => {
         e.preventDefault();
         router.push(`/${userName}`);
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
                <div className="header_icon">
                    <img src="../svg/Notification.svg" alt=""/>
                    <img src="../svg/chat.svg" alt=""/>
                </div>
                <div className="header_avatar">
                    <img src="../svg/avatar.svg" alt=""/>
                </div>
            </div>
  )
}

export default VartisanHeader