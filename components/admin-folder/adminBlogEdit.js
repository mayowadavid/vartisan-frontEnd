import React, { useState, useContext, useEffect } from 'react'
import AdminHeader from './adminHeader'
import AdminMobileHeader from './adminMobileHeader'
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { MainContext } from '../context/mainContext';
import axios from 'axios';

const AdminBlogEdit = () => {

    const {createBlog, category, userProfile} = useContext(MainContext);
    const status = ['draft', 'active', 'paused'];

    const blogState = {
        name: '',
        selectedCategory: [],
        slug: '',
        status: '',
        description: '',
        descriptionMarkDown: '',
        blogImage: ''
    }

    const [temporaryImage, setTemporaryImage] = useState();
    const [createBlogState, setCreateBlogState] = useState(blogState);

    const mdParser = new MarkdownIt(/* Markdown-it options */);
  // Finish!
    const [contentHtml, setContentHtml] = useState('');
    const [plainMarkDown, setPlainMarkDown] = useState('');

    useEffect(()=>{
        const slug = createBlogState.name.
            toLowerCase().replace(/ /g,'-').
            replace(/[^\w-]+/g,'');
            setCreateBlogState({...createBlogState, slug});
    }, [createBlogState.name])

    const handleEditorChange = ({ html, text }) => {
        setContentHtml(html);
        const newValue = text.replace(/\d/g, "");
        setPlainMarkDown(newValue);
        setCreateBlogState({...createBlogState, description: html, descriptionMarkDown: newValue})
    }

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setCreateBlogState({...createBlogState, [name]: value});
    }

    const handleCategory = (e) => {
        e.preventDefault();
        const {value} = e.target;
        const blogCategory = [...createBlogState.selectedCategory, {value}];
        setCreateBlogState({...createBlogState, selectedCategory: [...blogCategory]});
    }

    const handleFile = (e, i) => {
        const {files} = e.target;
        let img;
        if(files){
        let selected = files[0];
        let types = ['image/jpeg', 'image/png'];
        let fileType = selected !== undefined ? types.includes(selected.type): setError("unsupported image type* accepted image jpg/png");
        let FileSize = "5000000";
        let filteredImageSize = fileType == true ? selected.size < FileSize : setError("file too large *5mb minimum"); 
        let hold = filteredImageSize == true && (URL.createObjectURL(selected)); 
        hold !== undefined && hold;
        img = new Image();
        img.onload = function(){
           const imageWidth = this.width;
        }
        setCreateBlogState({...createBlogState, blogImage: files});
        img.src = hold;
        setTemporaryImage(hold);
        //clone due to no direct manipulation
        URL.revokeObjectURL(selected);   
        }
  };

const uploadImage = (datum, data, headers) => {
    for (let x = 0; x < data.length; x++){
        const file = data[x];
        const blogId = datum.id;
        let formData = new FormData();
        formData.append('file', file);
        formData.append('blogId', blogId);
        axios.post('http://localhost:4000/blog/imageUpload', 
        formData, {headers}).then((dat)=> console.log(dat))
        .catch((error)=> console.log(error));
    }
}

    const filterCategory = (e, index) => {
        e.preventDefault();
        const blogCategory = createBlogState.selectedCategory.filter((data, i)=> i !== index);
        setCreateBlogState({...createBlogState, selectedCategory: [...blogCategory]});
    }

    const submit = async (e) => {
        e.preventDefault();
        const {
            name,
            slug,
            status,
            description,
            descriptionMarkDown,
            blogImage
        } = createBlogState;

        const {data, error} = await createBlog({
            variables: {
            blogInput: {
                name,
                slug,
                status,
                description,
                descriptionMarkDown
            }}
        })
        console.log(data);
        
        const token = await localStorage.getItem('token');
        const headers = {authorization: token ? `Bearer ${JSON.parse(token)}` : ""}
        data?.createBlog !== undefined && uploadImage(data.createBlog, blogImage, headers);
    }

    console.log(userProfile);
    const {selectedCategory} = createBlogState;

  return (
    <div className="admin_category">
        <AdminHeader />
        <AdminMobileHeader />
        <div className="admin_container_body">
            <div className="admin_category_sidebar">
                <div className="admin_category_top_container">
                    <div className="admin_category_top">
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../img/menu.png" alt=""/>
                            <p>Dashboard</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../img/commision.png" alt=""/>
                            <p>Admin Commission</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../img/Document.png" alt=""/>
                            <p>Projects</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../img/Message.png" alt=""/>
                            <p>Messages</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../img/menu.png" alt=""/>
                            <p>Promotions</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../img/menu.png" alt=""/>
                            <p>Categories</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../img/menu.png" alt=""/>
                            <p>Blog</p>
                        </div>
                    </div>
                    <div className="admin_category_top">
                        <div className="admin_category_top_header">
                            <p>Settings</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../img/menu.png" alt=""/>
                            <p>Dashboard</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../img/commision.png" alt=""/>
                            <p>Admin Commission</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../img/Document.png" alt=""/>
                            <p>Projects</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../img/Message.png" alt=""/>
                            <p>Messages</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../img/menu.png" alt=""/>
                            <p>Promotions</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../img/menu.png" alt=""/>
                            <p>Categories</p>
                        </div>
                        <div className="admin_category_top_row flex_show_row remove_margin">
                            <img src="../../img/menu.png" alt=""/>
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
                <div className="admin_blog_body">
                    <div className="admin_blog_header_row flex_show_row">
                        <div className="admin_blog_header remove_margin">
                            <p>Blog Edit</p>
                        </div>
                        <div className="admin_blog_header_edit_button flex_show_row remove_margin">
                            <p>Save as Draft</p> <p>Save Change</p>
                        </div>
                    </div>
                    <div className="admin_form_wrapper flex_show_row">
                        <div className="blog_writer_details flex_show_row">
                            <div className="blog_writer_avatar">
                                <img src={ userProfile?.profile !== undefined ? userProfile?.file?.image : "../../svg/avatar.svg"} alt=""/>
                            </div>
                            <div className="blog_writer_name remove_margin">
                                <p>{userProfile?.user?.userName}</p>
                                <p>Content Writer</p>
                            </div>
                        </div>
                        <div className="blog_writer_form_input">
                            <form action="">
                                <div className="admin_blog_title">
                                    <p>Title</p>
                                    <input type="text" name="name" onChange={handleChange} placeholder="Enter the title here" id=""/>
                                </div>
                                <div className="admin_blog_category">
                                    <p>Category</p>
                                    <div className="blog_wrapper flex_show_row">
                                        {
                                            selectedCategory?.length > 0 && selectedCategory?.map(({value}, i)=>{
                                                return (
                                                    <div key={i} onClick={(e)=> filterCategory(e, i)} className="admin_blog_category_wrap flex_show_row remove_margin">
                                                        <p>{value}</p>
                                                        <img src="../../img/close_small.png" alt=""/>
                                                    </div>
                                                )
                                            })
                                        }
                                        
                                        <div className="flex_show_row blog_category">
                                            <select name="selected" onChange={handleCategory} className="select_category flex_show_row">
                                            {
                                                category?.categories?.length > 0 && 
                                                category?.categories?.map((d, i)=>{
                                                    return (
                                                        <option key={i}>{d.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        <div className="admin_blog_category_select flex_show_row remove_margin">
                                            <img src="../../img/caret_down.png" alt=""/>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="admin_blog_title">
                                    <p>Slug</p>
                                    <input type="text" name="slug" value={createBlogState.slug} placeholder="Enter the title here" id=""/>
                                </div>
                                <div className="admin_blog_category">
                                <div>
                                <p>Status</p>
                                <div className='select_wrapper flex_show_row'>
                                    <select name="status" onChange={handleChange} className="selecte_row flex_show_row">
                                        {
                                            status.map((d, i)=>{
                                                return (
                                                    <option key={i}>{d}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <div className="admin_blog_category_select flex_show_row remove_margin">
                                        <img src="../../img/caret_down.png" alt=""/>
                                    </div>
                                </div>
                                </div>
                                        
                                </div>
                                <div className="admin_blog_widget">
                                <MdEditor style={{ height: '300px' }} renderHTML={text => mdParser.render(text)} value={plainMarkDown} onChange={handleEditorChange} />
                                </div>
                                <div className="admin_featured_image_widget flex_show_row">
                                    <div className="feature_image_holder">
                                        <img src={temporaryImage !== undefined ? temporaryImage : "../../svg/no_caption.svg"} alt=""/>
                                    </div>
                                    <div className="featured_image_content_holder">
                                        <div className="featured_inner_content remove_margin">
                                            <p>Feature Image</p>
                                            <p>Required image resolution 800x400, image size 10mb.</p>
                                        </div>
                                        <input type="file" onChange={handleFile} id="file"/>
                                        <div className="featured_image_button remove_margin">
                                        <label className='remove_margin' htmlFor="file">
                                             <p>Choose File</p>
                                        </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="admin_blog_footer_edit_button flex_show_row remove_margin">
                                    <p>Save as Draft</p> <p onClick={submit}>Save Change</p>
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

export default AdminBlogEdit