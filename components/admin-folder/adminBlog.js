import React from 'react'
import AdminHeader from './adminHeader'
import AdminMobileHeader from './adminMobileHeader'

const AdminBlog = () => {
  return (
    <div className="admin_blog">
        <AdminMobileHeader />
        <AdminHeader />
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
                            <p>Blog List</p>
                        </div>
                        <div className="admin_blog_header_button remove_margin">
                            <p>Create new Blog</p>
                        </div>
                    </div>
                    <div className="admin_body_wrapper flex_show_row">
                        <div className="admin_blog_card">
                            <div className="admin_blog_card_header flex_show_row">
                                <div className="blog_blog_hold flex_show_row">
                                    <div className="blog_card_image">
                                        <img src="img/category6.png" alt=""/>
                                    </div>
                                    <div className="blog_card_name remove_margin">
                                        <p>Name of creator</p>
                                    </div>
                                </div>
                                <div className="blog_card_option">
                                    <img src="svg/more_horizontal.svg" alt=""/>
                                </div>
                            </div>
                            <div className="display_blog_image">
                                <img src="img/category1.png" alt=""/>
                            </div>
                            <div className="blog_card_title">
                                <p>How to build professional profile</p>
                            </div>
                            <div className="blog_publish_wrap flex_show_row">
                                <div className="blog_publish remove_margin flex_show_row">
                                    <div className="round"></div>
                                    <p>published</p>
                                </div>
                                <div className="blog_date remove_margin">
                                    <p>Jan 10, 2022</p>
                                </div>
                            </div>
                            <div className="blog_content_details remove_margin">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, purus sed ac mauris quisque proin. Maecenas purus elementum ut blandit</p>
                            </div>
                            <div className="blog_tags flex_show_row">
                                <p>Tip & Trick</p>
                                <p>Art</p>
                            </div>
                            <div className="admin_blog_comments flex_show_row">
                                <div className="admin_blog_icon flex_show_row remove_margin">
                                    <img src="img/Chat.png" alt=""/>
                                    <p>35 Comments</p>
                                </div>
                                <div className="admin_blog_preview remove_margin">
                                    <p>Preview</p>
                                </div>
                            </div>
                        </div>
                        <div className="admin_blog_card">
                            <div className="admin_blog_card_header flex_show_row">
                                <div className="blog_blog_hold flex_show_row">
                                    <div className="blog_card_image">
                                        <img src="img/category6.png" alt=""/>
                                    </div>
                                    <div className="blog_card_name remove_margin">
                                        <p>Name of creator</p>
                                    </div>
                                </div>
                                <div className="blog_card_option">
                                    <img src="svg/more_horizontal.svg" alt=""/>
                                </div>
                            </div>
                            <div className="display_blog_image">
                                <img src="img/category1.png" alt=""/>
                            </div>
                            <div className="blog_card_title">
                                <p>How to build professional profile</p>
                            </div>
                            <div className="blog_publish_wrap flex_show_row">
                                <div className="blog_publish remove_margin flex_show_row">
                                    <div className="round"></div>
                                    <p>published</p>
                                </div>
                                <div className="blog_date remove_margin">
                                    <p>Jan 10, 2022</p>
                                </div>
                            </div>
                            <div className="blog_content_details remove_margin">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, purus sed ac mauris quisque proin. Maecenas purus elementum ut blandit</p>
                            </div>
                            <div className="blog_tags flex_show_row">
                                <p>Tip & Trick</p>
                                <p>Art</p>
                            </div>
                            <div className="admin_blog_comments flex_show_row">
                                <div className="admin_blog_icon flex_show_row remove_margin">
                                    <img src="img/Chat.png" alt=""/>
                                    <p>35 Comments</p>
                                </div>
                                <div className="admin_blog_preview remove_margin">
                                    <p>Preview</p>
                                </div>
                            </div>
                        </div>
                        <div className="admin_blog_card">
                            <div className="admin_blog_card_header flex_show_row">
                                <div className="blog_blog_hold flex_show_row">
                                    <div className="blog_card_image">
                                        <img src="img/category6.png" alt=""/>
                                    </div>
                                    <div className="blog_card_name remove_margin">
                                        <p>Name of creator</p>
                                    </div>
                                </div>
                                <div className="blog_card_option">
                                    <img src="svg/more_horizontal.svg" alt=""/>
                                    <div className="blog_card_option_drop">
                                        <div className="blog_card_edit flex_show_row remove_margin">
                                            <img src="img/Edit Square.png" alt=""/>
                                            <p>Edit blog</p>
                                        </div>
                                        <div className="blog_card_edit flex_show_row remove_margin">
                                            <img src="img/update.png" alt=""/>
                                            <p>Update blog</p>
                                        </div>
                                        <div className="blog_card_edit flex_show_row remove_margin">
                                            <img src="img/redDelete.png" alt=""/>
                                            <p>Delete blog</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="display_blog_image">
                                <img src="img/category1.png" alt=""/>
                            </div>
                            <div className="blog_card_title">
                                <p>How to build professional profile</p>
                            </div>
                            <div className="blog_publish_wrap flex_show_row">
                                <div className="blog_publish remove_margin flex_show_row">
                                    <div className="round"></div>
                                    <p>published</p>
                                </div>
                                <div className="blog_date remove_margin">
                                    <p>Jan 10, 2022</p>
                                </div>
                            </div>
                            <div className="blog_content_details remove_margin">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, purus sed ac mauris quisque proin. Maecenas purus elementum ut blandit</p>
                            </div>
                            <div className="blog_tags flex_show_row">
                                <p>Tip & Trick</p>
                                <p>Art</p>
                            </div>
                            <div className="admin_blog_comments flex_show_row">
                                <div className="admin_blog_icon flex_show_row remove_margin">
                                    <img src="img/Chat.png" alt=""/>
                                    <p>35 Comments</p>
                                </div>
                                <div className="admin_blog_preview remove_margin">
                                    <p>Preview</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default AdminBlog