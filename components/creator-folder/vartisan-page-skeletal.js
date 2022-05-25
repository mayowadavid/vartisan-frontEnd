import React from 'react'

export const VartisanPageSkeletal = () => {
    const data = [1, 2, 3, 4];
  return (
    <div className="filtered_category_body">
    <div className="category_row">
    <div className="seller_slug">
            <p>Home{`>`}</p>
            <p>Categories</p>
    </div>
    <div className="seller_gig_header_title">
        <p className='skeleton skeleton-text'></p>
    </div>
    </div>
    <div className="seller_gig_wrapper">
        <div className="seller_gig_media">
                <div className="seller_showcase">
                    <img className='skeleton' alt=""/>
                </div>
                <div className="seller_thumbnail">
                    {!sellerData !== 0 &&
                        data.map((i)=> {
                            return (
                        <div key={i} className="thumbnail_wrap">
                            <img className='skeleton' alt=""/>
                        </div>)
                        })}
                </div>
        </div>
        <div className="seller_gig_content_wrap">
            <div className="seller_gig_achievement">
                <div className="seller_gig_profile">
                    <div className="seller_avatar">
                        <div>
                            <span className="seller online"></span>
                        </div>
                        <img src={sellerData?.user?.profile?.file?.image !== undefined ?
                         sellerData?.user?.profile?.file?.image : "../svg/avatar.svg"} alt=""/>
                    </div>
                    <div className="seller_gig_name">
                    <p className='skeleton skeleton-text'></p>
                    <p className='skeleton skeleton-text'></p>
                    </div>
                    <div className="seller_gig_more">
                        <img src="../img/more_vertical.png" alt=""/>
                    </div>
                </div>
                <div className="seller_gig_achievement_details">
                    <p>Achievements</p>
                    <div className="seller_gigs_award_wrap">
                        <div className="seller_gig_awards">
                            <div className="seller_gig_awards_col">
                                <div className="seller_gig_award_hex"></div>
                                <div className="seller_gig_award_image">
                                    <img className='skeleton' alt=""/>
                                </div>
                            </div>
                            <div className="seller_award_content">
                            <p className='skeleton skeleton-text'></p>
                            <p className='skeleton skeleton-text'></p>
                            </div>
                        </div>
                        <div className="seller_gig_awards">
                            <div className="seller_gig_awards_col">
                                <div className="seller_gig_award_hex"></div>
                                <div className="seller_gig_award_image">
                                    <img className='skeleton' alt=""/>
                                </div>
                            </div>
                            <div className="seller_award_content">
                            <p className='skeleton skeleton-text'></p>
                            <p className='skeleton skeleton-text'></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="seller_order_section">
                    <p className='skeleton skeleton-text'></p>
                    <div className="seller_gig_contacts">
                    <p className='skeleton skeleton-text'></p>
                    </div>
                </div>
                
            </div>
            <div className="seller_gig_fields">
                <div className="seller_gig_field_header">
                    <p className='skeleton skeleton-text'></p>
                    <p className='skeleton skeleton-text'></p>
                </div>
                <div className="seller_gig_field_category">
                    <div className="seller_field_col">
                    <p className='skeleton skeleton-text'></p>
                    <p className='skeleton skeleton-text'></p>
                    </div>
                    <div className="seller_field_col">
                    <p className='skeleton skeleton-text'></p>
                    <p className='skeleton skeleton-text'></p>
                    </div>
                </div>
                <div className="seller_gig_offer">
                    <div className="seller_gig_row">
                        <img src="../img/done.jpg" alt=""/>
                        <p className='skeleton skeleton-text'></p>
                    </div>
                    <div className="seller_gig_row">
                        <img src="../img/done.jpg" alt=""/>
                        <p className='skeleton skeleton-text'></p>
                    </div>
                    <div className="seller_gig_row">
                        <img src="../img/done.jpg" alt=""/>
                        <p className='skeleton skeleton-text'></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="seller_description">
            <div className="seller_description_title">
            <p className='skeleton skeleton-text'></p>
            </div>
            <p className='skeleton skeleton-text'></p>
        </div>
        <div className="seller_gig_mobile_achievement">
            <div className="seller_gig_profile">
                <div className="seller_avatar">
                    <div>
                        <span className="seller online"></span>
                    </div>
                    <img className='skeleton' alt=""/>
                </div>
                <div className="seller_gig_name">
                <p className='skeleton skeleton-text'></p>
                <p className='skeleton skeleton-text'></p>
                </div>
                <div className="seller_gig_more">
                    <img src="../img/more_vertical.png" alt=""/>
                </div>
            </div>
            <div className="seller_gig_achievement_details">
            <p className='skeleton skeleton-text'></p>
                <div className="seller_gigs_award_wrap">
                    <div className="seller_gig_awards">
                        <div className="seller_gig_awards_col">
                            <div className="seller_gig_award_hex"></div>
                            <div className="seller_gig_award_image">
                                <img src="../img/trophy.png" alt=""/>
                            </div>
                        </div>
                        <div className="seller_award_content">
                        <p className='skeleton skeleton-text'></p>
                        <p className='skeleton skeleton-text'></p>
                        </div>
                    </div>
                    <div className="seller_gig_awards">
                        <div className="seller_gig_awards_col">
                            <div className="seller_gig_award_hex"></div>
                            <div className="seller_gig_award_image">
                                <img src="../img/trophy.png" alt=""/>
                            </div>
                        </div>
                        <div className="seller_award_content">
                            <p className='skeleton skeleton-text'></p>
                            <p className='skeleton skeleton-text'></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="seller_order_section">
            <p className='skeleton skeleton-text'></p>
                <div className="seller_gig_contacts">
                <p className='skeleton skeleton-text'></p>
                <p className='skeleton skeleton-text'></p>
                </div>
            </div>
            
        </div>
        <div className="seller_review">
            <div className="seller_review_header">
                <div className="seller_review_header_content">
                <p className='skeleton skeleton-text'></p>
                </div>
                <div className="seller_review_icon">
                    <div className="seller_arrow">
                        <img src="../img/arrow_left.png" alt=""/>
                    </div>
                    <div className="seller_arrow">
                        <img src="../img/arrow_right.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="seller_review_row">
                <div className="seller_review_card">
                    <div className="seller_review_card_header">
                        <div className="seller_review_header_col">
                            <div className="seller_review_avatar">
                                <img src="../img/review.png" alt=""/>
                            </div>
                            <div className="seller_review_content">
                            <p className='skeleton skeleton-text'></p>
                            <p className='skeleton skeleton-text'></p>
                            </div>
                        </div>
                        <div className="seller_review_rate">
                            <div className="seller_border flex_show_row">
                                <img src="../svg/thumb_up.svg" alt=""/>
                                <p className='skeleton skeleton-text'></p>
                            </div>
                        </div>
                    </div>
                    <div className="seller_review_description">
                    <p className='skeleton skeleton-text'></p>
                    <p className='skeleton skeleton-text'></p>
                    <p className='skeleton skeleton-text'></p>
                    </div>
                    <div className="seller_review_time">
                    <p className='skeleton skeleton-text'></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="more_seller_gig">
            <div className="more_seller_header">
            <p className='skeleton skeleton-text'></p>
            </div>
            <div className="seller_card_row">
            {
                !otherGig && data.map((d)=>{
                    return (
                            <div className="seller_card">
                                <img className='skeleton' alt=""/>
                                <div className="seller_content">
                                    <div className="seller_gig_image">
                                        <img className='skeleton' alt=""/>
                                    </div>
                                    <div className="seller_gig_title">
                                        <p className='skeleton skeleton-text'></p>
                                        <p className='skeleton skeleton-text'></p>
                                    </div>
                                    <div className="seller_gig_price">
                                    <p className='skeleton skeleton-text'></p>
                                        <p className='skeleton skeleton-text'></p>
                                    </div>
                                </div>
                            </div>
                    )
                })
            }
            </div>
        </div>
    </div>
    </div>
    );
}