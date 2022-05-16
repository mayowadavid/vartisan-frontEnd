import React from 'react'

const AdminMobileHeader = () => {
  return (
    <div className="mobile_drop_header flex_show_row">
            <div className="menu_left_side">
                <div className="Menu_icon">
                    <img src="../../imghamburger.png" alt=""/>
                </div>
            </div>
            <div className="menu_right_side flex_show_row">
                <div className="menu_search mobile_icon">
                    <img src="../../svg/Search.../../svg" alt=""/>
                </div>
                <div className="menu_notification mobile_icon">
                    <img src="../../svg/Notification.../../svg" alt=""/>
                </div>
                <div className="menu_avatar">
                    <img src="../../imgcategory.png" alt=""/>
                </div>
            </div>
        </div>
  )
}

export default AdminMobileHeader