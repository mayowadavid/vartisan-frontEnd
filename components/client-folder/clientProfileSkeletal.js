import React from 'react'

export const ClientProfileSkeletal = () => {
  return (
    <div className="filtered_category_body">
        <div className="category_row">
                <div className="skeleton-text">
                        <p>Home {">"}</p>
                </div>
                <div className="seller_gig_header_title">
                    <p className='skeleton skeleton-text'></p>
                </div>
        </div>
        <div className="client_wrapper">
            <div className="client_overview">
                <div className="client_details">
                    <div className="client_details_avatar">
                        <label htmlFor="profileImage">
                        <img className="skeleton" alt=""/>
                        </label>
                        <label htmlFor="profileImage">
                            <img className='skeleton' alt=""/>
                        </label>
                    </div>
                    <div className="client_details_content">
                        <p className='skeleton skeleton-text'></p>
                    </div>
                </div>
                <div className="client_gig_container">
                    <p className='skeleton-text'></p>
                    <div className="client_achievement_wrapper">
                        <div className="client_gig_achievement">
                            <div className="client_gig_awards_col">
                                <div className="skel_hex"></div>
                                <div className="client_gig_award_image skeleton">
                                    <img className='skeleton' alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="client_gig_achievement">
                            <div className="client_gig_awards_col">
                                <div className="skel_hex"></div>
                                <div className="client_gig_award_image skeleton">
                                    <img className='skeleton' alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="client_gig_achievement">
                            <div className="client_gig_awards_col">
                                <div className="skel_hex"></div>
                                <div className="client_gig_award_image skeleton">
                                    <img className='skeleton' alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="client_report">
                    <div className="client_flag">
                        <img className='skeleton' alt=""/>
                        <div className="skeleton skeleton-text"></div>
                    </div>
                    <div className="report_divider">
                        <p>|</p>
                    </div>
                    <div className="client_ban">
                        <img className='skeleton' alt=""/>
                        <p className="skeleton skeleton-text"></p>
                    </div>
                </div>
            </div>
            <div className="hex-client_tab">
                <div className="hex_controller_wrapper flex_show_row">
                    <div className="tab_controller">
                        <p className="skeleton skeleton-text"></p>
                    </div>
                    
                </div>
                <p className="skeleton skeleton-text"></p>
                <p className="skeleton skeleton-text"></p>
                <p className="skeleton skeleton-text"></p>
                <p className="skeleton skeleton-text"></p>
                <p className="skeleton skeleton-text"></p>
                <p className="skeleton skeleton-text"></p>
                <p className="skeleton skeleton-text"></p>
                <p className="skeleton skeleton-text"></p>
                <p className="skeleton skeleton-text"></p>
                <p className="skeleton skeleton-text"></p>
            </div>
        </div>
        </div>
  )
}
