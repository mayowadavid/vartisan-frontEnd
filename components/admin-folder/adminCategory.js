import React, { useContext, useState, useEffect } from 'react'
import { MainContext } from '../context/mainContext'
import AdminSidebar from './adminSidebar';

const AdminCategory = () => {
    const {
        adminCategoryCreate,
        setAdminCategoryCreate,
        category,
        setAdminPage,
        adminPage
    } = useContext(MainContext);

    useEffect(()=>{
        setAdminPage({...adminPage, categories: true});
    }, [])

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
            <AdminSidebar />
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