import React, { useContext, useState } from 'react'
import { MainContext } from '../context/mainContext';
import AdminSidebar from './adminSidebar';

const AdminCreateCategory = () => {
    const {
        createCategory,
        createSubCategory,
        adminPage,
        setAdminPage
    } = useContext(MainContext);

    useEffect(()=>{
        setAdminPage({...adminPage, categories: true});
    }, [])

    const initialState = {
        status: 'active',
        name: '',
        description: '',
        subCategory: []
    }

    const [category, setCategory] = useState(initialState);

    const subState = {
        name: '',
    }
    
    const [subCategories, setSubCategories] = useState(subState);

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setCategory({...category, [name]: value});
    }

    const handleSubCategory = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setSubCategories({...subCategories, [name]: value});
    }

    const submitSubCategory = (e) => {
        e.preventDefault();
        const { subCategory } = category;
        if(subCategory.some((el)=> el.name == subCategories.name) == false && subCategories.name !== ''){
            setCategory({...category, subCategory: [...subCategory, subCategories]});
            setSubCategories(subState);
        }  
    }

    const editSubCategory = (e, i) => {
        e.preventDefault();
        const { subCategory } = category;
        setSubCategories({name: subCategory[i].name});
        const editedCategory = subCategory.filter((d)=> d.name !== subCategory[i].name);
        console.log(editedCategory);
        setCategory({...category, subCategory: editedCategory});
    }

    const createSubCategoryTag = async (datum, data) => {
        for(let x = 0; x < data.length; x++){
            const categoryId = datum.id;
            const name = data[x].name;
            console.log(name, categoryId);
            const {data: subData, error: subError} = await createSubCategory({
                    variables: {
                        subCategoryParams: {
                            categoryId,
                            name
                        },
                    }
                });
            console.log(subData);
        }
    }

    const submit = async (e) => {
        e.preventDefault();
        const { name, description, status, subCategory } = category;
        console.log(name, description, status, subCategory);
        const { data, error } = await createCategory({
            variables: {
                categoryParams: {
                    name, 
                    description, 
                    status
                }
            }
        });
        if(data){
            await createSubCategoryTag(data.createCategory, subCategory);
        }
        
    }

  return (
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
                    <p onClick={submitSubCategory}>New Category</p>
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
                    
                        <div className="category_name">
                            <p>Category Name</p>
                            <input type="text" name="name" onChange={handleChange} placeholder="Name for new category"/>
                        </div>
                        <div className="category_description">
                            <p>Description</p>
                            <textarea type="text" name="description" onChange={handleChange} placeholder="Category description"></textarea>
                        </div>
                        <div className="subCategory">
                            <p>Sub Category</p>
                        <div className="subCategory_wrapper flex_show_row">
                            {
                                category?.subCategory?.length > 0 &&
                                category?.subCategory?.map((data, i)=> {
                                    return (
                                        <div key={i} onClick={(e)=> editSubCategory(e, i)} className="subcategory_container flex_show_row remove_margin">
                                        <p>{data.name}</p>
                                        <img src="../../svg/pen-edit.svg" alt=""/>
                                    </div>
                                    )
                                })
                            }       
                        </div>
                        <form onSubmit={submitSubCategory}>
                            <input type="text" value={subCategories.name} onChange={handleSubCategory} name="name" placeholder="Sub category"/>
                        </form>
                        </div>
                        <div className="add_other_option flex_show_row">
                            <img src="../../img/plus_circle.png" alt=""/> <p onClick={submitSubCategory}>Add other</p>
                        </div>
                        <div className="submit_category">
                            <p>Cancel</p> <p onClick={submit}>Save</p>
                        </div>
                </div>
            </div>
        </div>
        </div>   
    </div>
  )
}

export default AdminCreateCategory