import React, { useContext } from 'react'
import { MainContext } from '../context/mainContext'

const AdminHeader = () => {
    const {userProfile} = useContext(MainContext);
  return (
    <div className="admin_header_dashboard flex_show_row">
           <div className="admin_logo flex_show_row">
                <img src="../../img/v_small 3.png" alt=""/>
                <p>Vartisan</p>
           </div>
           <div className="group_admin_header flex_show_row">
                    <div className="admin_search">
                        <img src="../../img/Search.png" alt=""/>
                        <input type="text" name="search" placeholder="Search"/>
                </div>
                <div className="admin_notification">
                        <img src="../../img/Notification.svg" alt="" className="src"/>
                </div>
                <div className="admin_avatar">
                        <img src="../../svg/avatar.svg" alt=""/>
                </div>
                <div className="admin_name_row">
                    <div className="admin_name remove_margin">
                        <p>{userProfile?.user?.userName}</p>
                        <p>Admin</p>
                    </div>
                    <div className="drop_arrow">
                        <img src="../../img/Arrow - Down 2.png" alt=""/>
                    </div>
                </div>
           </div>
       </div>
  )
}

export default AdminHeader