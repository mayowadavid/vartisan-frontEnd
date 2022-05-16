import React, { useContext, useEffect } from 'react'
import { MainContext } from '../context/mainContext'
import AdminHeader from './adminHeader'
import AdminMobileHeader from './adminMobileHeader'
import AdminSidebar from './adminSidebar'

const AdminActive = () => {
    const {allGig, setAdminPage, adminPage} = useContext(MainContext);
    useEffect(()=>{
        setAdminPage({...adminPage, projects: true});
    }, [])
  return (
    <div className="admin_category">
        <AdminHeader/>
        <AdminMobileHeader/>
        <div className="admin_category_body">
           <AdminSidebar/> 
           <div className="admin_category_right">
                <div className="all_category">
                    <div className="all_category_header_row flex_show_row">
                        <div className="all_active_header">
                            <p>Active Projects</p>
                        </div>
                        <div className="category_push flex_show_row">
                            <div className="sales_reports flex_show_row">
                                <img src="../../img/Downlaod.png" alt=""/>
                                <p>Sales Reports</p>
                            </div>
                            <div className="sales_reports">
                                <p>Traffic Reports</p>
                            </div>
                            <div className="Active_pause-projects flex_show_row">
                                <p>Active Projects</p>
                                <p>Pause Projects</p>
                            </div>
                        </div>
                    </div>
                    <div className="category_table_header flex_show_row">
                        <div className="project_number">
                            <p>No</p>
                        </div>
                        <div className="project_name">
                            <p>Project name</p>
                        </div>
                        <div className="vartisan">
                            <p>vartisan</p>
                        </div>
                        <div className="impression">
                            <p>impression</p>
                        </div>
                        <div className="clicks">
                            <p>clicks</p>
                        </div>
                        <div className="orders">
                            <p>Orders</p>
                        </div>
                        <div className="action">
                            <p>Action</p>
                        </div>
                    </div>
                    {
                        allGig.length > 0 && allGig?.map((data, i)=>{
                            const {name, category, user, order, gigGallery} = data;
                            return (
                                <div key={i} className="category_table_header flex_show_row">
                                    <div className="project_number">
                                        <p>{ i + 1 }</p>
                                    </div>
                                    <div className="project_name flex_show_row">
                                        <div className="table_image">
                                            <img src={gigGallery?.length > 0 ? gigGallery[0]?.file[0].image : "../../svg/no_caption.svg"} alt=""/>
                                        </div>
                                        <div className="table_content remove_margin">
                                            <p>{name}</p>
                                            <p>{category.name}</p>
                                        </div>
                                    </div>
                                    <div className="vartisan">
                                        <p>{user.userName}</p>
                                    </div>
                                    <div className="impression">
                                        <p>1266</p>
                                    </div>
                                    <div className="clicks">
                                        <p>1256</p>
                                    </div>
                                    <div className="orders">
                                        <p>{order.length > 0? order.length : 0}</p>
                                    </div>
                                    <div className="project_action">
                                        <p>view project</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="category_table_footer flex_show_row">
                        <div className="page_count">
                            <p>Showing 1 - 10 of 70 Gigs</p>
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

export default AdminActive