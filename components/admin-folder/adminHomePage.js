import React from 'react'
import AdminHeader from './adminHeader';
import AdminMobileHeader from './adminMobileHeader';

const AdminHomePage = () => {
  return (
    <div>
    <AdminMobileHeader />
    <AdminHeader />
        <div className="admin_home_body_container">
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
                    <div className="admin_homepage_settings">
                        <div className="admin_home_header_row flex_show_row">
                            <div className="admin_home_header remove_margin">
                                <p>Home page settings</p>
                            </div>
                            <div className="admin_home_button flex_show_row remove_margin">
                                <p>Preview</p><p>Save Change</p>
                            </div>
                        </div>
                        <div className="admin_home_body">
                            <div className="admin_home_banner">
                                <p>Banner Settings</p>
                                <p>Add, edit, or delete the banner</p>
                            </div>
                            <div className="home_banner_wrapper flex_show_row">
                                <div className="banner_image_wrap">
                                    <img src="img/category5.png" alt=""/>
                                    <div className="banner_image_edit flex_show_row">
                                        <div className="banner_radio_select flex_show_row">
                                            <input type="radio" name="editImage" id=""/>
                                            <p>Set as default banner</p>
                                        </div>
                                        <div className="banner_update_icon flex_show_row">
                                            <div className="edit_banner">
                                                <img src="svg/Edit.svg" alt=""/>
                                            </div>
                                            <div className="edit_banner">
                                                <img src="svg/upload.svg" alt=""/>
                                            </div>
                                            <div className="edit_banner">
                                                <img src="svg/Delete.svg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner_image_holder">
                                    <img src="img/Upload.png" alt=""/>
                                    <p>Add New Banner</p>
                                    <p>Max size 1440 x 728 px</p>
                                </div>
                            </div>
                            <div className="home_logo_settings">
                                <div className="home_logo_header">
                                    <div className="admin_home_logo">
                                        <p>Logo Settings</p>
                                        <p>Add, edit, or delete the logo</p>
                                    </div>
                                </div>
                                <div className="logo_wrap_container flex_show_row">
                                    <div className="logo_card flex_show_row">
                                        <div className="logo_wrapper">
                                            <img src="img/v_large 1.png" alt=""/>
                                        </div>
                                        <div className="logo_content">
                                            <div className="logo_radio flex_show_row remove_margin">
                                                <input type="radio" name="" id=""/>
                                                <p>Set as default banner</p>
                                            </div>
                                            <div className="logo_update_delete flex_show_row">
                                                <div className="edit_logo">
                                                    <img src="svg/Edit.svg" alt=""/>
                                                </div>
                                                <div className="edit_logo">
                                                    <img src="svg/upload.svg" alt=""/>
                                                </div>
                                                <div className="edit_logo">
                                                    <img src="svg/Delete.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="logo_holder flex_show_row">
                                        <div className="logo_placeholder flex_show_row">
                                            <img src="img/Upload.png" alt=""/>
                                        </div>
                                        <div className="logo_holder_content">
                                            <p>Add new logo</p>
                                            <p>Max size 1440 * 728 px</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="body_layout_settings">
                                <div className="home_logo_header">
                                    <div className="admin_home_logo">
                                        <p>Body Layouts</p>
                                        <p>Body layout settings</p>
                                    </div>
                                </div>
                                <div className="body_layout_format flex_show_row">
                                    <div className="body_layout_card">
                                        <div className="body_layout_image">
                                            <img src="img/body layout 1.png" alt=""/>
                                        </div>
                                        <div className="body_layout_radio flex_show_row remove_margin">
                                            <input type="radio" name="" id=""/>
                                            <p>Set as default banner</p>
                                        </div>
                                    </div>
                                    <div className="body_layout_card">
                                        <div className="body_layout_image">
                                            <img src="img/body layout 2.png" alt=""/>
                                        </div>
                                        <div className="body_layout_radio flex_show_row remove_margin">
                                            <input type="radio" name="" id=""/>
                                            <p>Set as default banner</p>
                                        </div>
                                    </div>
                                    <div className="body_layout_card">
                                        <div className="body_layout_image">
                                            <img src="img/body layout 3.png" alt=""/>
                                        </div>
                                        <div className="body_layout_radio flex_show_row remove_margin">
                                            <input type="radio" name="" id=""/>
                                            <p>Set as default banner</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="body_margin_settings">
                                <div className="body_margin_header">
                                    <p>Body Margin</p>
                                </div>
                                <div className="body_margin_control flex_show_row">
                                    <div className="body_margin_container remove_margin">
                                        <p>Left</p>
                                        <div className="body_margin_input">
                                            <p>px</p>
                                            <input type="text" name="margin" placeholder="number"/>
                                        </div>
                                    </div>
                                    <div className="body_margin_container remove_margin">
                                        <p>Right</p>
                                        <div className="body_margin_input">
                                            <p>px</p>
                                            <input type="text" name="margin" placeholder="number"/>
                                        </div>
                                    </div>
                                    <div className="body_margin_container remove_margin">
                                        <p>Top</p>
                                        <div className="body_margin_input">
                                            <p>px</p>
                                            <input type="text" name="margin" placeholder="number"/>
                                        </div>
                                    </div>
                                    <div className="body_margin_container remove_margin">
                                        <p>Bottom</p>
                                        <div className="body_margin_input">
                                            <p>px</p>
                                            <input type="text" name="margin" placeholder="number"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter_settings">
                                <p>Filter Settings</p>
                                <div className="filter_row flex_show_row">
                                    <div className="filter_wrap remove_margin">
                                        <p>Animation</p>
                                    </div>
                                    <div className="filter_wrap remove_margin">
                                        <p>Commercial Use</p>
                                    </div>
                                    <div className="filter_wrap remove_margin">
                                        <p>NSFW</p>
                                    </div>
                                    <div className="filter_wrap remove_margin">
                                        <p>Popular</p>
                                    </div>
                                    <div className="filter_wrap remove_margin">
                                        <p>Newest</p>
                                    </div>
                                </div>
                            </div>
                            <div className="filter_input">
                                <input type="text" placeholder="Add filters" id=""/>
                            </div>
                            <div className="add_other_settings flex_show_row remove_margin">
                                <img src="img/plus_circle.png" alt=""/>
                                <p>Add other</p>
                            </div>
                            <div className="save_preview flex_show_row">
                                <p>Discard</p> <p>Preview</p> <p>Save Change</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div> 
    </div>
  )
}

export default AdminHomePage;