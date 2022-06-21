import React, { useContext, useEffect } from 'react'
import { MainContext } from '../context/mainContext'
import AdminHeader from './adminHeader'
import AdminMobileHeader from './adminMobileHeader'
import AdminSidebar from './adminSidebar'

const AdminArtisanRequest = () => {
    const {allGig, setAdminPage, adminPage} = useContext(MainContext);

    useEffect(()=>{
        setAdminPage({vartisan: true});
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
                        <div className="vartisan_number vart remove_margin">
                            <p>No</p>
                        </div>
                        <div className="vartisan_name vart remove_margin">
                            <p>ProjectName</p>
                        </div>
                        <div className="vartisan_creator vart remove_margin">
                            <p>Creator</p>
                        </div>
                        <div className="vartisan_date vart remove_margin">
                            <p>Date Created</p>
                        </div>
                        <div className="vartisan_category vart remove_margin">
                            <p>Category</p>
                        </div>
                        <div className="vartisan_approve vart remove_margin">
                            <p>Approve/Reject</p>
                        </div>
                    </div>
                    {
                        allGig.length > 0 && allGig?.map((data, i)=>{
                            const {gigGallery, createdAt, name, category, user} =data;
                            return (
                            <div key={i} className="artisan_table_container flex_show_row">
                                <div className="vartisan_number vart remove_margin">
                                    <p>{ i + 1 }</p>
                                </div>
                                <div className="vartisan_name flex_show_row">
                                    <div className="table_image_vart vart">
                                        <img src={gigGallery?.length > 0 ? gigGallery[0]?.file[0].image : "../../svg/no_caption.svg"} alt=""/>
                                    </div>
                                    <div className="vart_content vart remove_margin">
                                        <p>{name}</p>
                                    </div>
                                </div>
                                <div className="vartisan_creator vart">
                                    <p>{user.userName}</p>
                                </div>
                                <div className="vartisan_date vart remove_margin">
                                    <p>{createdAt}</p>
                                </div>
                                <div className="vartisan_category vart remove_margin">
                                    <p>{category?.name}</p>
                                </div>
                                <div className="vartisan_approve flex_show_row remove_margin flex_show_row">
                                    <div className="vartisan_button vart remove_margin">
                                        <p>Preview</p>
                                    </div>
                                    <div className="vartisan_button vart remove_margin">
                                        <p>Reject</p>
                                    </div>
                                    <div className="vartisan_button vart remove_margin">
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

export default AdminArtisanRequest