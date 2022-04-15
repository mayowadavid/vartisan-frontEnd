import React from 'react'
import VartisanHeader from '../../components/creator-folder/vartisanHeader'
import VartisanMobileHeader from '../../components/creator-folder/vartisanMobileHeader'
import Sidebar from '../../components/creator-folder/sidebar'

const Settings = () => {
  return (
    <div className="dashboard_wrapper">
    <Sidebar />
    <div className="admin_content">
    <VartisanHeader />
    <VartisanMobileHeader />
    <div className="settings_gig_wrapper">
                <div className="creator_gig_tab border">
                    <div className="creator_gig_holder">
                        <p id="selected_tab">Account</p>
                        <p>Security</p>
                        <p>Notifications</p>
                        <p>Billing Information</p>
                        <p>Wallet</p>
                        <p>History</p>
                    </div>
                </div>
                <div className="settings_account_body flex_show_row">
                    <div className="settings_form_input">
                        <p>First Name</p>
                        <div className="settings_form_column flex_show_row">
                            <img src="../svg/pen-edit.svg" alt=""/>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="settings_form_input">
                        <p>Last Name</p>
                        <div className="settings_form_column flex_show_row">
                            <img src="../svg/pen-edit.svg" alt=""/>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="settings_form_input">
                        <p>Email</p>
                        <div className="settings_form_column flex_show_row">
                            <img src="../svg/pen-edit.svg" alt=""/>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="settings_form_input">
                        <p>Categories</p>
                        <div className="drop_down flex_show_row form_border">
                            <div className="settings_content_wrapper">
                                <p>Graphics Design</p>
                            </div>
                            <div className="icon_wrapper">
                                <img src="../svg/caret_down.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="settings_form_input">
                        <p>Experience Level</p>
                        <div className="drop_down flex_show_row form_border">
                            <div className="settings_content_wrapper">
                                <p>Intermediate</p>
                            </div>
                            <div className="icon_wrapper">
                                <img src="../svg/caret_down.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social_link_account_row">
                    <div className="social_link_header">
                        <p>Linked Accounts</p>
                    </div>
                    <div className="settings_link_account flex_show_row">
                        <div className="social_link flex_show_row">
                            <div className="social_link_wrapper flex_show_row">
                                <img src="../svg/selected.svg" alt=""/>
                                <p>Twitter</p>
                            </div>
                            <div className="social_link_cancel">
                                <img src="../svg/close_small.svg" alt=""/>
                            </div>
                        </div>
                        <div className="social_link flex_show_row">
                            <div className="social_link_wrapper flex_show_row">
                                <img src="../svg/selected.svg" alt=""/>
                                <p>Dribbble</p>
                            </div>
                            <div className="social_link_cancel">
                                <img src="../svg/close_small.svg" alt=""/>
                            </div>
                        </div>
                        <div className="social_link flex_show_row">
                            <div className="social_link_wrapper flex_show_row">
                                <img src="../svg/selected.svg" alt=""/>
                                <p>DevianART</p>
                            </div>
                            <div className="social_link_cancel">
                                <img src="../svg/close_small.svg" alt=""/>
                            </div>
                        </div>
                        <div className="social_link flex_show_row">
                            <div className="social_link_wrapper flex_show_row">
                                <img src="../svg/selected.svg" alt=""/>
                                <p>Behance</p>
                            </div>
                            <div className="social_link_cancel">
                                <img src="../svg/close_small.svg" alt=""/>
                            </div>
                        </div>
                        <div className="social_link flex_show_row">
                            <div className="social_link_wrapper flex_show_row">
                                <img src="../svg/selected.svg" alt=""/>
                                <p>Linkedln</p>
                            </div>
                            <div className="social_link_cancel">
                                <img src="../svg/close_small.svg" alt=""/>
                            </div>
                        </div>
                        <div className="social_link flex_show_row">
                            <div className="social_link_wrapper flex_show_row">
                                <img src="../svg/selected.svg" alt=""/>
                                <p>instagram</p>
                            </div>
                            <div className="social_link_cancel">
                                <img src="../svg/close_small.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Settings