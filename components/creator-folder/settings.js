import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/mainContext'
import { clean } from '../functions/functions'
import MobileSideBar from './mobileSidebar'
import Sidebar from './sidebar'
import VartisanHeader from './vartisanHeader'
import VartisanMobileHeader from './vartisanMobileHeader'

const Settings = () => {
    const {
        setChangeState, 
        vartisanState, 
        userProfile,
        updateProfile,
        sideMenu
    } = useContext(MainContext);

    useEffect(()=> {
        setChangeState({...vartisanState, settings: true});
    }, []);

    useEffect(()=>{
    if(userProfile.user !== undefined){
        const result = clean(userProfile);
        const {
        firstName,
        lastName,
        language,
        user,
        id
        } = result;
        const { userName, email } = user;
        setProfile({
            ...profile,
            id, 
            userName,
            email,
            firstName,
            lastName,
            language,
        });}
    }, [userProfile])


    const profileState = {
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        languageOption: ['english', 'french', 'german']
    }
    
    const [profile, setProfile] = useState(profileState);

    const handleProfile = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setProfile({...profile, [name]: value});
    }

    const submit = async (e) => {
        const {
            id,
        firstName,
        lastName,
        language
        } = profile;
        e.preventDefault();
        const {data, error} = await updateProfile({
            variables: {
                profileInput: {
                    id,
                    lastName,
                    firstName,
                    language
                }
            }
        });
    }
  return (
      <>
        { sideMenu == true && <MobileSideBar />}
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
                    <p>Username (can not be changed)</p>
                    <div className="settings_form_column flex_show_row">
                        <img src="../../../svg/pen-edit.svg" alt=""/>
                        <input type="text" disabled={true} value={profile.userName} onChange={handleProfile}/>
                    </div>
                </div>
                <div className="settings_form_input">
                    <p>Email</p>
                    <div className="settings_form_column flex_show_row">
                        <img src="../../../svg/pen-edit.svg" alt=""/>
                        <input type="text" value={profile.email} name="email" onChange={handleProfile}/>
                    </div>
                </div>
                <div className="settings_form_input">
                    <p>First Name</p>
                    <div className="settings_form_column flex_show_row">
                        <img src="../../../svg/pen-edit.svg" alt=""/>
                        <input type="text" value={profile.firstName} name="firstName" onChange={handleProfile}/>
                    </div>
                </div>
                <div className="settings_form_input">
                    <p>Last Name</p>
                    <div className="settings_form_column flex_show_row">
                        <img src="../../../svg/pen-edit.svg" alt=""/>
                        <input type="text" value={profile.lastName} name="lastName" onChange={handleProfile}/>
                    </div>
                </div>
                <div className="settings_form_input">
                    <p>Languages</p>
                    <div className="settings_form_column flex_show_row form_border">
                                    <select name="language" onChange={handleProfile} className="select_form flex_show_row">
                                        {
                                            profile?.languageOption?.length > 0 && 
                                            profile?.languageOption?.map((d, i)=>{
                                                return (
                                                    <option key={i}>{d}</option>
                                                )
                                            })
                                        }
                                    </select>
                        <div className="icon_wrapper">
                            <img src="../../../svg/caret_down.svg" alt=""/>
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
                            <img src="../../../svg/selected.svg" alt=""/>
                            <p>Twitter</p>
                        </div>
                        <div className="social_link_cancel">
                            <img src="../../../svg/close_small.svg" alt=""/>
                        </div>
                    </div>
                    <div className="social_link flex_show_row">
                        <div className="social_link_wrapper flex_show_row">
                            <img src="../../../svg/selected.svg" alt=""/>
                            <p>Dribbble</p>
                        </div>
                        <div className="social_link_cancel">
                            <img src="../../../svg/close_small.svg" alt=""/>
                        </div>
                    </div>
                    <div className="social_link flex_show_row">
                        <div className="social_link_wrapper flex_show_row">
                            <img src="../../../svg/selected.svg" alt=""/>
                            <p>DevianART</p>
                        </div>
                        <div className="social_link_cancel">
                            <img src="../../../svg/close_small.svg" alt=""/>
                        </div>
                    </div>
                    <div className="social_link flex_show_row">
                        <div className="social_link_wrapper flex_show_row">
                            <img src="../../../svg/selected.svg" alt=""/>
                            <p>Behance</p>
                        </div>
                        <div className="social_link_cancel">
                            <img src="../../../svg/close_small.svg" alt=""/>
                        </div>
                    </div>
                    <div className="social_link flex_show_row">
                        <div className="social_link_wrapper flex_show_row">
                            <img src="../../../svg/selected.svg" alt=""/>
                            <p>Linkedln</p>
                        </div>
                        <div className="social_link_cancel">
                            <img src="../../../svg/close_small.svg" alt=""/>
                        </div>
                    </div>
                    <div className="social_link flex_show_row">
                        <div className="social_link_wrapper flex_show_row">
                            <img src="../../../svg/selected.svg" alt=""/>
                            <p>instagram</p>
                        </div>
                        <div className="social_link_cancel">
                            <img src="../../../svg/close_small.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="settings_submit remove_margin flex_show_row">
                <p onClick={submit}>Continue</p>
            </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Settings