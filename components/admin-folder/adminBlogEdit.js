import React, { useState, useContext, useEffect } from 'react'
import AdminHeader from './adminHeader'
import AdminMobileHeader from './adminMobileHeader'
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { MainContext } from '../context/mainContext';
import axios from 'axios';
import AdminSidebar from './adminSidebar';

const AdminBlogEdit = () => {

    const {
        createBlog, 
        categories, 
        userProfile, 
        updateCategory, 
        selectedBlog,
        updateBlogData,
        setAdminBlog,
        adminBlog,
        adminPage,
        setAdminPage
    } = useContext(MainContext);

    useEffect(()=>{
        setAdminPage({...adminPage, blog: true});
    }, [])

    const status = ['draft', 'active', 'paused'];

    const blogState = {
        name: '',
        category: [],
        slug: '',
        status: 'draft',
        description: '',
        descriptionMarkDown: '',
        createdAt: '',
        file: []
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

    useEffect(()=> {
        const { descriptionMarkDown } = createBlogState;
        if( descriptionMarkDown !== null ){
            setPlainMarkDown(descriptionMarkDown);
        }
    }, [createBlogState.descriptionMarkDown])

    useEffect(()=>{
        if(selectedBlog?.name !== undefined){
            setCreateBlogState({...createBlogState, ...selectedBlog});
        }
   }, [selectedBlog])

    const handleEditorChange = ({ html, text }) => {
        setContentHtml(html);
        const today = new Date();
        const createdAt = today.getTime().toString();
        const newValue = text.replace(/\d/g, "");
        setPlainMarkDown(newValue);
        setCreateBlogState({...createBlogState, createdAt, description: html, descriptionMarkDown: newValue})
    }

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        const today = new Date();
        const createdAt = today.getTime().toString();
        setCreateBlogState({...createBlogState, [name]: value, createdAt});
    }
    selectedBlog?.name !== undefined && console.log(createBlogState);
    const handleCategory = (e, id) => {
        e.preventDefault();
        const {value} = e.target;
        const today = new Date();
        const createdAt = today.getTime().toString();
        if(categories?.length > 0){
        const { id } = categories.find((data)=> data.name === value);
        const blogCategory = [...createBlogState.category, {id, value}];
        setCreateBlogState({...createBlogState, createdAt, category: [...blogCategory]});
        }
    }

    const updateBlog = async (datum, data)=>{
        for (let x = 0; x <  data.length; x++){ 
            const blogId = datum.id;
            const id = data[x].id;
            const {data: blogData, error: blogError} = await updateCategory({
                variables: {
                    categoryInput: {
                        id,
                        blogId
                    }
                }
            })
         }
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
        setCreateBlogState({...createBlogState, file: files});
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
        console.log(file, blogId);
        let formData = new FormData();
        formData.append('file', file);
        formData.append('blogId', blogId);
        axios.post(`${process.env.NEXT_PUBLIC_url}/blog/imageUpload`, 
        formData, {headers}).then((dat)=> console.log(dat))
        .catch((error)=> console.log(error));
    }
}

    const filterCategory = (e, index) => {
        e.preventDefault();
        const blogCategory = createBlogState.category.filter((data, i)=> i !== index);
        setCreateBlogState({...createBlogState, category: [...blogCategory]});
    }

    const submit = async (e) => {
        e.preventDefault();
        const {
            name,
            slug,
            status,
            description,
            descriptionMarkDown,
            file,
            category,
            createdAt
        } = createBlogState;
        if(createBlogState.id !== undefined){
            const {data, error} = await updateBlogData({
                variables: {
                    updateBlog: {
                        id: createBlogState.id,
                        name,
                        slug,
                        status,
                        createdAt,
                        description,
                        descriptionMarkDown
                    }
                }
            })
                console.log(file);
                data !== undefined && updateBlog(data.updateBlog, category);
                const token = await localStorage.getItem('token');
                const headers = {authorization: token ? `Bearer ${JSON.parse(token)}` : ""};
                (file !== null && file?.image == undefined && data.updateBlog !== undefined) && await uploadImage(data.updateBlog, file, headers);
                setAdminBlog({
                    ...adminBlog, 
                    displayBlog: true, 
                    createBlog: false
                });
                
        } else {
            const {data, error} = await createBlog({
                variables: {
                blogInput: {
                    name,
                    slug,
                    status,
                    createdAt,
                    description,
                    descriptionMarkDown
                }}
            });
            console.log(file);
            data !== undefined && updateBlog(data.createBlog, category);
            const token = await localStorage.getItem('token');
            const headers = {authorization: token ? `Bearer ${JSON.parse(token)}` : ""};
            (file.length > 0 && data !== undefined) && await uploadImage(data.createBlog, file, headers);
            data !== undefined && setAdminBlog({
                ...adminBlog, 
                displayBlog: true, 
                createBlog: false
            });
        }
        
    }

    const {category} = createBlogState;

  return (
    <div className="admin_category">
        <AdminHeader />
        <AdminMobileHeader />
        <div className="admin_container_body">
        <AdminSidebar />
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
                                <img src={ userProfile?.profile !== undefined ? userProfile?.file?.image : "../../svg/avatar.png"} alt=""/>
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
                                    <input type="text" name="name" value={createBlogState.name} onChange={handleChange} placeholder="Enter the title here" id=""/>
                                </div>
                                <div className="admin_blog_category">
                                    <p>Category</p>
                                    <div className="blog_wrapper flex_show_row">
                                        {
                                            category?.length > 0 && category?.map(({value}, i)=>{
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
                                                categories?.length > 0 && 
                                                categories?.map((d, i)=>{
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
                                    <input type="text" disabled={true} name="slug" value={createBlogState.slug} placeholder="Enter the title here" id=""/>
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