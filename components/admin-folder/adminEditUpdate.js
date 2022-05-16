import React, { useContext, useState } from 'react'
import AdminHeader from './adminHeader'
import AdminMobileHeader from './adminMobileHeader'
import AdminSidebar from './adminSidebar'
import { MainContext } from '../context/mainContext';

const AdminEditUpdate = () => {
    const {adminPage, setAdminPage} = useContext(MainContext);
    
    useEffect(()=>{
        setAdminPage({...adminPage, categories: true});
    }, [])

  return (
    <div className="admin_category">
        <AdminHeader />
        <AdminMobileHeader />
        <div className="admin_category_body">
            <AdminSidebar />
            <div className="admin_category_right">
            <div className="create_category_header_row flex_show_row">
                <div className="create_category_header">
                    <p>Categories</p>
                </div>
                <div className="create_category_header_button flex_show_row">
                    <p>Cancle</p> <p>Save</p>
                </div>
            </div>
            <div className="create_category_body">
                <div className="listed_category">
                    <div className="list_category_header">
                        <p>List of categories</p>
                    </div>
                    <div className="list_category_body">
                        <p>Graphics Design</p>
                        <p>illustration</p>
                        <p>Vtubing</p>
                        <p>Print Design</p>
                        <p>3D Design</p>
                        <p>Art & illustration</p>
                        <p>Packaging & Covers</p>
                        <p>Social Media</p>
                    </div>
                    <div className="list_new_category remove_margin">
                        <p>New Category</p>
                    </div>
                    <div className="margin_seperate"></div>
                    <div className="list_category_create remove_margin flex_show_row">
                        <img src="img/plus_circle.png" alt=""/><p>Create New</p>
                    </div>
                </div>
                <div className="create_category_container_row">
                    <div className="create_category_top_header">
                        <p>Edit: Graphics Design Category</p>
                    </div>
                    <div className="admin_category_active_container flex_show_row">
                        <div className="active_category">
                            <div className="active_category_switch"></div>
                        </div>
                        <p>Active Category</p>
                    </div>
                    <div className="create_category_form">
                        <form>
                            <div className="category_name">
                                <p>Category Name</p>
                                <input type="text" name="categoryName" placeholder="Name for new category"/>
                            </div>
                            <div className="category_description">
                                <p>Description</p>
                                <textarea type="text" name="categoryDescription" placeholder="Category description"></textarea>
                            </div>
                            <div className="subCategory">
                                <p>Sub Category</p>
                                <div className="subCategory_wrapper flex_show_row">
                                    
                                    <div className="subcategory_container flex_show_row remove_margin">
                                        <p>Logo Design</p>
                                        <img src="svg/pen-edit.svg" alt=""/>
                                    </div>
                                    <div className="subcategory_container flex_show_row remove_margin">
                                        <p>Logo Design</p>
                                        <img src="svg/pen-edit.svg" alt=""/>
                                    </div>
                                </div>
                                <input type="text" name="Sub category" placeholder="Sub category"/>
                            </div>
                            <div className="add_other_option flex_show_row">
                                <img src="img/plus_circle.png" alt=""/> <p>Add other</p>
                            </div>
                            <div className="submit_category">
                                <p>Cancel</p> <p>Save</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>   
        </div>
    </div>
  )
}

export default AdminEditUpdate