import React, { useContext, useState, useEffect } from 'react'
import AdminHeader from './adminHeader'
import AdminMobileHeader from './adminMobileHeader'
import AdminSidebar from './adminSidebar'
import { MainContext } from '../context/mainContext'

const AdminComplaint = () => {
    const {adminPage, setAdminPage} = useContext(MainContext);
    
    useEffect(()=>{
        setAdminPage({...adminPage, message: true});
    }, [])

  return (
    <div className="admin_category">
        <AdminHeader />
        <AdminMobileHeader />
        <div className="admin_category_body">
            <AdminSidebar />
            <div className="admin_category_right">
                <div className="all_category">
                    <div className="all_category_header_row flex_show_row">
                        <div className="all_complaints_header">
                            <p>Complaints</p>
                        </div>
                        <div className="complaint_push flex_show_row">
                            <div className="complaints-row flex_show_row">
                                <p>Complaints</p>
                                <p>Category Manager</p>
                                <p>Project Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className="all_complaint_body flex_show_row">
                        <div className="complaint_avatar">
                            <img src="img/Rounded Rectangle 3.png" alt=""/>
                        </div>
                        <div className="complaint_content">
                            <div className="complaint_name flex_show_row remove_margin">
                                <p>Seller name</p>
                                <p>Seller</p>
                            </div>
                            <div className="complaint_paragraph remove_margin">
                                <p>
                                    Complaints about the feature Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis euismod massa ut elit congue turpis vel.
                                </p>
                            </div>
                        </div>
                        <div className="complaint_button remove_margin">
                            <p>Respond Seller</p>
                        </div>
                    </div>
                    <div className="all_complaint_body flex_show_row">
                        <div className="complaint_avatar">
                            <img src="img/Rounded Rectangle 3.png" alt=""/>
                        </div>
                        <div className="complaint_content">
                            <div className="complaint_name flex_show_row remove_margin">
                                <p>Seller name</p>
                                <p>Seller</p>
                            </div>
                            <div className="complaint_paragraph remove_margin">
                                <p>
                                    Complaints about the feature Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis euismod massa ut elit congue turpis vel.
                                </p>
                            </div>
                        </div>
                        <div className="complaint_button remove_margin">
                            <p>Respond Seller</p>
                        </div>
                    </div>
                    <div className="all_complaint_body flex_show_row">
                        <div className="complaint_avatar">
                            <img src="img/Rounded Rectangle 3.png" alt=""/>
                        </div>
                        <div className="complaint_content">
                            <div className="complaint_name flex_show_row remove_margin">
                                <p>Seller name</p>
                                <p>Seller</p>
                            </div>
                            <div className="complaint_paragraph remove_margin">
                                <p>
                                    Complaints about the feature Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis euismod massa ut elit congue turpis vel.
                                </p>
                            </div>
                        </div>
                        <div className="complaint_button remove_margin">
                            <p>Respond Seller</p>
                        </div>
                    </div>
                    <div className="all_complaint_body flex_show_row">
                        <div className="complaint_avatar">
                            <img src="img/Rounded Rectangle 3.png" alt=""/>
                        </div>
                        <div className="complaint_content">
                            <div className="complaint_name flex_show_row remove_margin">
                                <p>Seller name</p>
                                <p>Seller</p>
                            </div>
                            <div className="complaint_paragraph remove_margin">
                                <p>
                                    Complaints about the feature Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis euismod massa ut elit congue turpis vel.
                                </p>
                            </div>
                        </div>
                        <div className="complaint_button remove_margin">
                            <p>Respond Seller</p>
                        </div>
                    </div>
                    <div className="all_complaint_body flex_show_row">
                        <div className="complaint_avatar">
                            <img src="img/Rounded Rectangle 3.png" alt=""/>
                        </div>
                        <div className="complaint_content">
                            <div className="complaint_name flex_show_row remove_margin">
                                <p>Seller name</p>
                                <p>Seller</p>
                            </div>
                            <div className="complaint_paragraph remove_margin">
                                <p>
                                    Complaints about the feature Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis euismod massa ut elit congue turpis vel.
                                </p>
                            </div>
                        </div>
                        <div className="complaint_button remove_margin">
                            <p>Respond Seller</p>
                        </div>
                    </div>
                    <div className="all_complaint_body flex_show_row">
                        <div className="complaint_avatar">
                            <img src="img/Rounded Rectangle 3.png" alt=""/>
                        </div>
                        <div className="complaint_content">
                            <div className="complaint_name flex_show_row remove_margin">
                                <p>Seller name</p>
                                <p>Seller</p>
                            </div>
                            <div className="complaint_paragraph remove_margin">
                                <p>
                                    Complaints about the feature Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis euismod massa ut elit congue turpis vel.
                                </p>
                            </div>
                        </div>
                        <div className="complaint_button remove_margin">
                            <p>Respond Seller</p>
                        </div>
                    </div>
                    <div className="all_complaint_body flex_show_row">
                        <div className="complaint_avatar">
                            <img src="img/Rounded Rectangle 3.png" alt=""/>
                        </div>
                        <div className="complaint_content">
                            <div className="complaint_name flex_show_row remove_margin">
                                <p>Seller name</p>
                                <p>Seller</p>
                            </div>
                            <div className="complaint_paragraph remove_margin">
                                <p>
                                    Complaints about the feature Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis euismod massa ut elit congue turpis vel.
                                </p>
                            </div>
                        </div>
                        <div className="complaint_button remove_margin">
                            <p>Respond Seller</p>
                        </div>
                    </div>
                    <div className="all_complaint_body flex_show_row">
                        <div className="complaint_avatar">
                            <img src="img/Rounded Rectangle 3.png" alt=""/>
                        </div>
                        <div className="complaint_content">
                            <div className="complaint_name flex_show_row remove_margin">
                                <p>Seller name</p>
                                <p>Seller</p>
                            </div>
                            <div className="complaint_paragraph remove_margin">
                                <p>
                                    Complaints about the feature Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis euismod massa ut elit congue turpis vel.
                                </p>
                            </div>
                        </div>
                        <div className="complaint_button remove_margin">
                            <p>Respond Seller</p>
                        </div>
                    </div>
                    <div className="all_complaint_body flex_show_row">
                        <div className="complaint_avatar">
                            <img src="img/Rounded Rectangle 3.png" alt=""/>
                        </div>
                        <div className="complaint_content">
                            <div className="complaint_name flex_show_row remove_margin">
                                <p>Seller name</p>
                                <p>Seller</p>
                            </div>
                            <div className="complaint_paragraph remove_margin">
                                <p>
                                    Complaints about the feature Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis euismod massa ut elit congue turpis vel.
                                </p>
                            </div>
                        </div>
                        <div className="complaint_button remove_margin">
                            <p>Respond Seller</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default AdminComplaint