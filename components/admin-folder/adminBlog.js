import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/mainContext'
import AdminHeader from './adminHeader'
import AdminMobileHeader from './adminMobileHeader'
import AdminSidebar from './adminSidebar'

const AdminBlog = () => {
    const {
        adminBlog, 
        setAdminBlog, 
        findUseBlog, 
        setSelectedBlog, 
        deleteBlog,
        setAdminPage,
        adminPage
    } = useContext(MainContext);
    const [allBlog, setAllBlog] = useState([]);

    useEffect(()=>{
        setAdminPage({...adminPage, blog: true});
    }, [])
    
    useEffect(async()=> {
        const {data, error} = await findUseBlog();
        if(data !== undefined){
            const {findBlogByUser} = data;
            setAllBlog(findBlogByUser);
        }
    }, [])
    const handleCreateBlog = (e) => {
        e.preventDefault();
        setAdminBlog({
            ...adminBlog, 
            displayBlog: false, 
            createBlog: true
        });
      }
    
      const editBlog = (e, id) => {
          e.preventDefault();
        const selected = allBlog.filter((d, i)=> i == id);
        setSelectedBlog({...selected[0]});
        setAdminBlog({
            ...adminBlog, 
            displayBlog: false, 
            createBlog: true
        });
      }

      const handleDelete = async (e, de) => {
          e.preventDefault();
          const selected = allBlog.filter((d, i)=> de !== i);
          const id = allBlog[de].id.toString();
            const {data, error} = await deleteBlog({
                variables: {
                    deleteBlogData: id
                }
            });
            data !== undefined && setAllBlog(selected);
      }

const BlogCard = ({
            i,
            title,
            shortDescription,
            status,
            createdAt,
            comments,
            category,
            user,
            file
        }) => {
            const [showOption, setShowOption] = useState(false);
            const toggleOption = (e) =>{
                e.preventDefault();
                setShowOption(!showOption);
            }
    return (
        <div className="admin_blog_card" key={i}>
            <div className="admin_blog_card_header flex_show_row">
                <div className="blog_blog_hold flex_show_row">
                    <div className="blog_card_image">
                        <img src={user?.userProfile?.profile !== undefined ? user?.userProfile?.file?.image : "../../svg/avatar.svg"} alt=""/>
                    </div>
                    <div className="blog_card_name remove_margin">
                        <p>{user?.userName}</p>
                    </div>
                </div>
                <div className="blog_card_option">
                    <div onClick={toggleOption} className='option_wrapper flex_show_row'>
                    <img src="../../svg/more_horizontal.svg" alt=""/></div>
                    {showOption !== false &&
                    (<div className="blog_card_option_drop">
                        <div className="blog_card_edit flex_show_row remove_margin">
                            <img src="../../img/Edit Square.png" alt=""/>
                            <p onClick={(e)=> editBlog(e, i)}>Edit blog</p>
                        </div>
                        <div className="blog_card_edit flex_show_row remove_margin">
                            <img src="../../img/update.png" alt=""/>
                            <p onClick={(e)=> editBlog(e, i)}>Update blog</p>
                        </div>
                        <div className="blog_card_edit flex_show_row remove_margin">
                            <img src="../../img/redDelete.png" alt=""/>
                            <p onClick={(e)=>handleDelete(e, i)}>Delete blog</p>
                        </div>
                    </div>)}
                </div>
            </div>
            <div className="display_blog_image">
                <img src={file !== null ? file.image : "../../svg/no_caption.svg"} alt=""/>
            </div>
            <div className="blog_card_title">
                <p>{title}</p>
            </div>
            <div className="blog_publish_wrap flex_show_row">
                <div className="blog_publish remove_margin flex_show_row">
                    <div className="round"></div>
                    <p>{status == 'active'? 'published': 'unpublished'}</p>
                </div>
                <div className="blog_date remove_margin">
                    <p>{createdAt}</p>
                </div>
            </div>
            <div className="blog_content_details remove_margin">
                <p>{shortDescription}</p>
            </div>
            <div className="blog_tags flex_show_row">
                {
                    category.length > 0 && category.map((d, i)=>{
                        return (<p key={i}>{d.name}</p>)
                    })
                }
            </div>
            <div className="admin_blog_comments flex_show_row">
                <div className="admin_blog_icon flex_show_row remove_margin">
                    <img src="../../img/Chat.png" alt=""/>
                    <p>{ comments.length > 0? `${comments.length} comments`: '0 comments' }</p>
                </div>
                <div className="admin_blog_preview remove_margin">
                    <p>Preview</p>
                </div>
            </div>
        </div>
    )
}

    
  return (
    <div className="admin_blog">
        <AdminMobileHeader />
        <AdminHeader />
        <div className="admin_container_body">
            <AdminSidebar />
            <div className="admin_category_right">
                <div className="admin_blog_body">
                    <div className="admin_blog_header_row flex_show_row">
                        <div className="admin_blog_header remove_margin">
                            <p>Blog List</p>
                        </div>
                        <div className="admin_blog_header_button remove_margin">
                            <p onClick={handleCreateBlog}>Create new Blog</p>
                        </div>
                    </div>
                    <div className="admin_body_wrapper flex_show_row">
                        {
                            allBlog.length > 0 && allBlog.map(({
                                descriptionMarkDown, 
                                name,
                                status,
                                createdAt,
                                comments,
                                category,
                                user,
                                file
                                }, i)=> {
                                    const n = 20;
                                    const title = name.substr(0, n-1) + (name.length > n ? '...': '');
                                    const d = 45;
                                    const content = descriptionMarkDown.replace(/[^0-9a-z]+/g, " ");
                                    const shortDescription = content.substr(0, d-1) + (content.length > d ? '...': '');
                                    
                                return(
                                    <BlogCard 
                                        i = {i}
                                        title= {title}
                                        shortDescription = {shortDescription}
                                        status = {status}
                                        createdAt = {createdAt}
                                        comments = {comments}
                                        category = {category}
                                        user = {user}
                                        file = {file}
                                        key={i}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default AdminBlog