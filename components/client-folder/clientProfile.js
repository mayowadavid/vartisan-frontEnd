import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/mainContext'
import ClientAbout from './clientAbout'
import ClientDescription from './clientDescription'
import ClientReference from './clientReferences'
import ClientRecentOrder from './client_recent_order'
import ClientReferencePop from './client_reference_pop'

const ClientProfile = () => {

    const [selectedTab, setSelectedTab] = useState("About");
    const [popReference, setPopReference] = useState(false);
    const [editAbout, setEditAbout] = useState(false);
    

    const handleTab = (e) => {
        e.preventDefault();
        const {outerText} = e.target;
        setSelectedTab(outerText);
    }
    const { userDescription } = useContext(MainContext);

    const handlePop = (e) => {
        e.preventDefault();
        setPopReference(!popReference);
    }

    const handleEditPop = (e) => {
        e.preventDefault();
        setEditAbout(!editAbout);
    }

  return (
      <>
        { editAbout == true && <ClientDescription handleEditPop={handleEditPop} /> }
        { popReference == true && <ClientReferencePop handlePop={handlePop} /> }
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
                    <div className="client_details_avatar">
                        <img src="img/category.png" alt=""/>
                    </div>
                    <div className="client_details_content">
                        <p>Esther Howard</p>
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
                {selectedTab == "About" && <ClientAbout userDescription={userDescription} />}
                {selectedTab == "Recent Orders" && <ClientRecentOrder />}
                {selectedTab == "References" && <ClientReference handlePop={handlePop} />}
            </div>
        </div>
        </div>
    </>
  )
}

export default ClientProfile