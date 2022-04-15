import React from 'react'
import AdminHeader from './adminHeader'
import AdminMobileHeader from './adminMobileHeader'

const AdminBlogEdit = () => {
  return (
    <div className="admin_category">
        <AdminHeader />
        <AdminMobileHeader />
        <div className="admin_container_body">
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
                                <img src="img/category.png" alt=""/>
                            </div>
                            <div className="blog_writer_name remove_margin">
                                <p>Name of writer</p>
                                <p>Content Writer</p>
                            </div>
                        </div>
                        <div className="blog_writer_form_input">
                            <form action="">
                                <div className="admin_blog_title">
                                    <p>Title</p>
                                    <input type="text" name="" placeholder="Enter the title here" id=""/>
                                </div>
                                <div className="admin_blog_category">
                                    <p>Category</p>
                                    <div className="admin_blog_wrapper flex_show_row">
                                        <div className="admin_blog_category_wrap flex_show_row remove_margin">
                                            <p>Tips & Tricks</p>
                                            <img src="img/close_small.png" alt=""/>
                                        </div>
                                        <div className="admin_blog_category_select remove_margin">
                                            <img src="img/caret_down.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="admin_blog_title">
                                    <p>Slug</p>
                                    <input type="text" name="" placeholder="Enter the title here" id=""/>
                                </div>
                                <div className="admin_blog_category">
                                    <p>Status</p>
                                    <div className="admin_blog_wrapper flex_show_row">
                                        <div className="admin_blog_category_status flex_show_row remove_margin">
                                            <p>Draft</p>
                                        </div>
                                        <div className="admin_blog_category_select remove_margin">
                                            <img src="img/caret_down.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="admin_blog_widget">
                                    <div className="admin_blog_widget_header remove_margin flex_show_row">
                                        <p>B</p><p>I</p><p>U</p>
                                    </div>
                                    <div className="admin_blog_content">
                                        <input type="text" name="" placeholder="write your article in this section" id=""/>
                                    </div>
                                </div>
                                <div className="admin_featured_image_widget flex_show_row">
                                    <div className="feature_image_holder">
                                        <img src="img/category.png" alt=""/>
                                    </div>
                                    <div className="featured_image_content_holder">
                                        <div className="featured_inner_content remove_margin">
                                            <p>Feature Image</p>
                                            <p>Required image resolution 800x400, image size 10mb.</p>
                                        </div>
                                        <div className="featured_image_button remove_margin">
                                            <p>Choose File</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="admin_blog_footer_edit_button flex_show_row remove_margin">
                                    <p>Save as Draft</p> <p>Save Change</p>
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