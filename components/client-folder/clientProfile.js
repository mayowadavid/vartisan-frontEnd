import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { MainContext } from '../context/mainContext'
import ClientAbout from './clientAbout'
import ClientDescription from './clientDescription'
import ClientReference from './clientReferences'
import ClientRecentOrder from './client_recent_order'

const ClientProfile = () => {

    const [selectedTab, setSelectedTab] = useState("About");
    const [profileImage, setProfileImage] = useState();
    const [clientReference, setClientReference] = useState([]);
    

    const handleTab = (e) => {
        e.preventDefault();
        const {outerText} = e.target;
        setSelectedTab(outerText);
    }
    const { 
        userProfile, 
        userData, 
        fetchUserProfile, 
        handleEditPop, 
        handlePop,
        findUserReference,
        findAllReference,
     } = useContext(MainContext);
    
     useEffect(async()=>{
        const {data, error} = await findUserReference();
        if(data !== undefined){
            const {findReferenceByUser} = data;
            setClientReference(findReferenceByUser);
        }
     }, [])

    const uploadImage = (datum, data, headers) => {
        for (let x = 0; x < data.length; x++){
            const file = data[x];
            const profileId = datum.id;
            let formData = new FormData()
            formData.append('file', file);
            formData.append('profileId', profileId);
            axios.post(`${process.env.NEXT_PUBLIC_url}/profile/imageUpload`, 
            formData, {headers}).then((dat)=>{ dat !== undefined && fetchUserProfile()}).catch((error)=> console.log(error));
        }
    }

    const handleChange = async(e) => {
        e.preventDefault();
        const {files} = e.target;
        setProfileImage(files);
        const token = localStorage.getItem('token');
        const headers = {authorization: token ? `Bearer ${JSON.parse(token)}` : ""}
        userProfile.id !== undefined && await uploadImage(userProfile, files, headers);
    }
    
  return (
      <>
        <div className="filtered_category_body">
        <div className="category_row">
                <div className="seller_slug">
                        <p>Home {">"}</p>
                        <p>Client Profile</p>
                </div>
                <div className="seller_gig_header_title">
                    <p>Client Profile</p>
                </div>
        </div>
        <div className="client_wrapper">
            <div className="client_overview">
                <div className="client_details">
                    <input type="file" onChange={handleChange} id="profileImage"/>
                    <div className="client_details_avatar">
                        <label htmlFor="profileImage">
                        <img src="svg/Upload_white.svg" alt=""/>
                            <p>Change image</p>
                        </label>
                        <label htmlFor="profileImage">
                            <img src={userProfile?.file !== undefined ? userProfile?.file?.image: "svg/avatar.svg"} alt=""/>
                        </label>
                    </div>
                    <div className="client_details_content">
                        <p>{ userData.userName }</p>
                    </div>
                </div>
                <div className="client_gig_container">
                    <p>Achievement</p>
                    <div className="client_achievement_wrapper">
                        <div className="client_gig_achievement">
                            <div className="client_gig_awards_col">
                                <div className="creator_gig_award_hex"></div>
                                <div className="client_gig_award_image">
                                    <img src="img/trophy.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="client_gig_achievement">
                            <div className="client_gig_awards_col">
                                <div className="creator_gig_award_hex"></div>
                                <div className="client_gig_award_image">
                                    <img src="img/trophy.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="client_gig_achievement">
                            <div className="client_gig_awards_col">
                                <div className="creator_gig_award_hex"></div>
                                <div className="client_gig_award_image">
                                    <img src="img/trophy.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="client_report">
                    <div className="client_flag">
                        <img src="svg/flag_outline.svg" alt=""/>
                        <p>Report</p>
                    </div>
                    <div className="report_divider">
                        <p>|</p>
                    </div>
                    <div className="client_ban">
                        <img src="svg/ban.svg" alt=""/>
                        <p>Block</p>
                    </div>
                </div>
            </div>
            <div className="client_tab">
                <div className="tab_controller_wrapper flex_show_row">
                    <div className="tab_controller">
                        <p id={selectedTab == "About" ? "selected_tab" : ""} onClick={handleTab}>About</p>
                        <p id={selectedTab == "Recent Orders" ? "selected_tab" : ""} onClick={handleTab}>Recent Orders</p>
                        <p id={selectedTab == "References" ? "selected_tab" : ""} onClick={handleTab}>References</p>
                    </div>
                    {selectedTab == "About" && (<div onClick={handleEditPop} className="edit_wrapper flex_show_row">
                        <div className="edit_button flex_show_row remove_margin">
                            <img src="svg/Edit.svg" />
                            <p>Edit</p>
                        </div>
                    </div>)}
                </div>
                {selectedTab == "About" && <ClientAbout description={ userProfile.description } />}
                {selectedTab == "Recent Orders" && <ClientRecentOrder />}
                {selectedTab == "References" && <ClientReference clientReference={clientReference} handlePop={handlePop} />}
            </div>
        </div>
        </div>
    </>
  )
}

export default ClientProfile