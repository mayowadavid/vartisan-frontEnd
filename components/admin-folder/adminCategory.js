import React, { useContext, useState } from 'react'
import { MainContext } from '../context/mainContext'

const AdminCategory = () => {
    const {
        adminCategoryCreate,
        setAdminCategoryCreate,
        category
    } = useContext(MainContext);

    const handleCreateCategory = (e) => {
        e.preventDefault();
        setAdminCategoryCreate({
            ...adminCategoryCreate, 
            displayCategory: false, 
            createCategory: true
        })
    }

  return (
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
                <div className="all_category">
                    <div className="all_category_header_row flex_show_row">
                        <div className="all_category_header">
                            <p>Category</p>
                        </div>
                        <div className="all_category_header_button flex_show_row">
                            <p>Delete</p>
                            <p onClick={handleCreateCategory}>Create new category</p>
                        </div>
                    </div>
                    
                        {
                           category?.categories !== undefined && category?.categories.map((data)=>{
                               const {subCategory, name} = data;
                               return (
                                <div className="all_category_card">
                                            <div className="category_card_header_row flex_show_row">
                                        <div className="all_category_header">
                                            <p>{name}</p>
                                        </div>
                                        <div className="offset-button flex_show_row">
                                            <p>Delete</p>
                                            <p>Update</p>
                                            <p>Create</p>
                                        </div>
                                    </div>
                                    <div className="category_card_body flex_show_row">
                                    {
                                        subCategory.map((sub)=> {
                                            const {name} = sub;
                                            return (
                                                    <p>{name}</p> 
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                               )
                           })
                        }
                        
                </div>
            </div>
        </div> 
  )
}

export default AdminCategory