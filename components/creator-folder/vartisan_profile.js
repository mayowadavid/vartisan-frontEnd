import React, { useContext } from 'react'
import { MainContext } from '../context/mainContext'


const VartisanProfile = () => {
    const { userDescription} = useContext(MainContext);
  return (
    <div  className="Category_page_wrapper">
    <div className="Category_page_wrapper">
        <div className="filtered_category_body">
            <div className="creator_wrapper">
                <div className="creator_overview">
                    <div className="creator_details">
                        <div className="creator_details_more flex_show_row">
                            <img src="svg/more_vertical.svg" alt=""/>
                        </div>
                        <div className="creator_details_avatar">
                            <img src="img/avatarpic.png" alt=""/>
                        </div>
                        <div className="creator_details_content">
                            <p>Michal John</p>
                            <p>Logo Designer</p>
                        </div>
                    </div>
                    <div className="creator_contact">
                        <div className="contact_wrapper">
                            <p>Request Order</p>
                        </div>
                        <div className="gig_contacts remove_margin flex_show_row">
                            <p>Message</p>
                            <p>Terms</p>
                        </div>
                    </div>
                    <div className="creator_gig_container">
                        <p>Achievement</p>
                        <div className="creator_achievement_wrapper">
                            <div className="creator_gig_achievement">
                                <div className="creator_gig_awards_col">
                                    <div className="creator_gig_award_hex"></div>
                                    <div className="creator_gig_award_image">
                                        <img src="img/trophy.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="creator_gig_achievement">
                                <div className="creator_gig_awards_col">
                                    <div className="creator_gig_award_hex"></div>
                                    <div className="creator_gig_award_image">
                                        <img src="img/trophy.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="creator_gig_achievement">
                                <div className="creator_gig_awards_col">
                                    <div className="creator_gig_award_hex"></div>
                                    <div className="creator_gig_award_image">
                                        <img src="img/trophy.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="creator_skills">
                        <p>Linked Account</p>
                        <div className="creator_skills_wrapper">
                            <p>Devianart</p>
                            <p>Twitter</p>
                            <p>instagram</p>
                        </div>
                    </div>
                </div>
                <div className="creator_tab">
                    <div className="about_vartisan">
                        <div className="about_vartisan_header flex_show_row remove_margin">
                            <p>About the vartisan</p>
                            <p>Join 10 july 2022</p>
                        </div>
                        <div className="about_vartisan_description">
                            {userDescription}
                        </div>
                    </div>
                    <div className="tab_controller">
                        <p>Projects</p>
                        <p id="selected_tab">Portfolio</p>
                        <p>Reviews</p>
                    </div>
                    <div className="portfolio_image">
                        <div className="portfolio_image_container">
                            <div className="float_port">
                                <div className="float_favorite">
                                    <img src="svg/Heart.svg" alt=""/>
                                </div>
                                <div className="float_new">
                                    <p>New</p>
                                </div>
                            </div>
                            <img src="img/category4.png" alt=""/>
                        </div>
                        <div className="portfolio_image_container">
                            <img src="img/category3.png" alt=""/>
                        </div>
                        <div className="portfolio_image_container">
                            <img src="img/category2.png" alt=""/>
                        </div>
                        <div className="portfolio_image_container">
                            <img src="img/category6.png" alt=""/>
                        </div>
                        <div className="portfolio_image_container">
                            <div className="float_port">
                                <div className="float_favorite">
                                    <img src="svg/Heart.svg" alt=""/>
                                </div>
                                <div className="float_new">
                                    <p>New</p>
                                </div>
                            </div>
                            <img src="img/category.png" alt=""/>
                        </div>
                        <div className="portfolio_image_container">
                            <div className="float_port">
                                <div className="float_new">
                                    <p>New</p>
                                </div>
                            </div>
                            <img src="img/category5.png" alt=""/>
                        </div>
                        <div className="portfolio_image_container">
                            <div className="float_port">
                                <div className="float_favorite">
                                    <img src="svg/Heart.svg" alt=""/>
                                </div>
                                <div className="float_new">
                                    <p>New</p>
                                </div>
                            </div>
                            <img src="img/category7.png" alt=""/>
                        </div>
                        <div className="portfolio_image_container">
                            <div className="float_port">
                                <div className="float_new">
                                    <p>New</p>
                                </div>
                            </div>
                            <img src="img/category1.png" alt=""/>
                        </div>
                        <div className="portfolio_image_container">
                            <div className="float_port">
                            </div>
                            <img src="img/category4.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default VartisanProfile