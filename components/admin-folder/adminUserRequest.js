import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/mainContext'
import AdminHeader from './adminHeader'
import AdminMobileHeader from './adminMobileHeader'
import AdminSidebar from './adminSidebar'

const AdminUserRequest = () => {
    const {getUsers, adminPage, setAdminPage} = useContext(MainContext);
    const [user, setUser] = useState([]);

    useEffect(()=>{
        setAdminPage({user_client: true});
    }, [])

    useEffect(async ()=>{
        const {data, error} = await getUsers();
        const {getAllUsers} = data;
        setUser(getAllUsers);
    }, [])

  return (
    <div className="admin_category">
    <AdminHeader />
    <AdminMobileHeader />
    <div className="admin_category_body">
        <AdminSidebar />
        <div className="admin_category_right">
            <div className="artisan_table_body">
                <div className="artisan_table_header_row flex_show_row remove_margin">
                    <div className="artisan_table_header">
                        <p>New Vartisan Requests</p>
                    </div>
                    <div className="artisan_table_sales flex_show_row remove_margin">
                        <img src="img/Downlaod.png" alt=""/>
                        <p>Sales Reports</p>
                    </div>
                </div>
                <div className="artisan_table_container flex_show_row">
                    <div className="artisan_number remove_margin">
                        <p>No</p>
                    </div>
                    <div className="artisan_lastname remove_margin">
                        <p>last Name</p>
                    </div>
                    <div className="artisan_firstname remove_margin">
                        <p>First Name</p>
                    </div>
                    <div className="artisan_username remove_margin">
                        <p>UserName</p>
                    </div>
                    <div className="artisan_email remove_margin">
                        <p>Email</p>
                    </div>
                    <div className="artisan_register remove_margin">
                        <p>Registered</p>
                    </div>
                    <div className="artisan_approve remove_margin">
                        <p>Approve/Reject</p>
                    </div>
                </div>
                {
                    user.length > 0 && user.map((d, i)=>{
                        const {
                            createdAt, 
                            email, 
                            profile,  
                            userName, 
                            } = d;
                            const year = new Date(parseInt(createdAt)).getFullYear();
                            const month = new Date(parseInt(createdAt)).getMonth();
                            const day = new Date(parseInt(createdAt)).getDate();
                            const hours = new Date(parseInt(createdAt)).getHours();
                            const time = new Date(parseInt(createdAt)).getMinutes();
                            const seconds = new Date(parseInt(createdAt)).getSeconds();
                        return (
                            <div className="artisan_table_container flex_show_row">
                    <div className="artisan_number remove_margin">
                        <p>{i + 1}</p>
                    </div>
                    <div className="artisan_lastname remove_margin">
                        <p>{profile?.lastName}</p>
                    </div>
                    <div className="artisan_firstname remove_margin">
                        <p>{profile?.firstName}</p>
                    </div>
                    <div className="artisan_username remove_margin">
                        <p>{userName}</p>
                    </div>
                    <div className="artisan_email remove_margin">
                        <p>{email}</p>
                    </div>
                    <div className="artisan_register remove_margin">
                        <p>{ year + '-' + month + '-' + day + ' ' + hours + ':' + time + ':' + seconds }</p>
                    </div>
                    <div className="artisan_approve remove_margin flex_show_row">
                        <div className="approve_button remove_margin">
                            <p>Reject</p>
                        </div>
                        <div className="approve_button remove_margin">
                            <p>Approve</p>
                        </div>
                    </div>
                </div>
                        )
                    })
                }
                
                <div className="category_table_footer flex_show_row">
                    <div className="page_count">
                        <p>Showing 1 - 10 of 70 Sellers</p>
                    </div>
                    <div className="page_count_button flex_show_row">
                        <div className="button_left">
                            <p>{"<"}</p>
                        </div>
                        <div className="button_right">
                            <p>{">"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AdminUserRequest