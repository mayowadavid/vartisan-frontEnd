import React from 'react'
import AdminMobileHeader from './adminMobileHeader'

const AdminCreateCategory = () => {
  return (
    <div>
        <AdminMobileHeader />
        <AdminMobileHeader />
        <div className="admin_category_body">
            <div className="admin_category_sidebar">
                <div className="admin_category_top_container">
                    <div className="admin_category_top">
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="img/menu.png" alt=""/>
                            <p>Dashboard</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="img/commision.png" alt=""/>
                            <p>Admin Commission</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="img/Document.png" alt=""/>
                            <p>Projects</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="img/Message.png" alt=""/>
                            <p>Messages</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="img/menu.png" alt=""/>
                            <p>Promotions</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="img/menu.png" alt=""/>
                            <p>Categories</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="img/menu.png" alt=""/>
                            <p>Blog</p>
                        </div>
                    </div>
                    <div className="admin_category_top">
                        <div className="admin_category_top_header">
                            <p>Settings</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="img/menu.png" alt=""/>
                            <p>Dashboard</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="img/commision.png" alt=""/>
                            <p>Admin Commission</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="img/Document.png" alt=""/>
                            <p>Projects</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="img/Message.png" alt=""/>
                            <p>Messages</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="img/menu.png" alt=""/>
                            <p>Promotions</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="img/menu.png" alt=""/>
                            <p>Categories</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="img/menu.png" alt=""/>
                            <p>Blog</p>
                        </div>
                    </div>
                </div>
                <div className="admin_category_bottom">
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="svg/Setting.svg" alt=""/>
                            <p>General settings</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="svg/Logout.svg" alt=""/>
                            <p>Log Out</p>
                        </div>
                </div>
            </div>
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
                        <p>Create New Categories</p>
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

export default AdminCreateCategory