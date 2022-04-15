import React from 'react'

const CustomOffer = () => {
  return (
    <div>
        <div className="custom_offer flex_show_row">
        <div className="custom_offer_form">
            <div className="custom_offer_header_row flex_show_row">
                <div className="custom_offer_header flex_show_row remove_margin">
                    <p>Custom Offer</p>
                    <p>Quotes expire if not accepted within 7 days.</p>
                </div>
                <div className="close_custom_offer">
                    <img src="svg/close_small.svg" alt=""/>
                </div>
            </div>
            <div className="custom_offer_body">
                <form action="">
                    <div className="select_creator_project">
                        <p>Select the project</p>
                        <div className="select_creator_drop">
                            <img src="svg/caret_down.svg" alt=""/>
                            <div className="select_creator_wrap remove_margin">
                                <p>Project name</p>
                            </div>
                        </div>
                    </div>
                    <div className="project_price_rev flex_show_row">
                        <div className="custom_price_wrapper remove_margin">
                            <p>Project Price</p>
                            <div className="custom_project_price flex_show_row">
                                <p>$</p><input type="number" name="projectPrice" placeholder="number" id=""/>
                            </div>
                        </div>
                        <div className="custom_revisions remove_margin">
                            <p>Revisions</p>
                            <div className="custom_project_revision flex_show_row">
                                <input type="number" name="revision" placeholder="number" id=""/><img src="svg/caret_down.svg" alt=""/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="project_description remove_margin">
                        <p>Description</p>
                        <textarea name="" placeholder="Example, hi this is my custom offer" id="" cols="15" rows="10"></textarea>
                    </div>
                    <div className="other_offers">
                        <p>Offer includes</p>
                        <div className="extended_offers">
                            <div className="select_extension flex_show_row">
                                <input type="checkbox" name="" id=""/>
                                <p>Source File</p>
                            </div>
                            <div className="select_extension flex_show_row">
                                <input type="checkbox" name="" id=""/>
                                <p>Commercial Fee</p>
                            </div>
                            <div className="select_extension custom_order_margin flex_show_row">
                                <div className="customp_order_content flex_show_row">
                                    <input type="checkbox" name="" id=""/>
                                    <p>Rush Order Delivery</p>
                                </div>
                                <div className="custom_rush_order_deliver flex_show_row">
                                     <input type="number" name="" id=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="submit_custom_template flex_show_row">
                        <div className="submit_custom_content remove_margin">
                            <p>Save as Template</p>
                        </div>
                        <div className="submit_custom_button flex_show_row remove_margin">
                            <p>cancel</p>
                            <p>Send offer</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div className="dashboard_wrapper">
        <div className="sidebar">
            <div className="sidebar_logo">
                <p>Logo</p>
            </div>
            <div className="side_wrapper">
                <div className="side_body">
                    <div id="active" className="side_button active">
                        <div className="side_image">
                            <img src="svg/dashboard.svg" alt=""/>
                        </div>
                        <div className="side_content">
                            <p>Dashboard</p>
                        </div>
                    </div>
                    <div className="side_button">
                        <div className="side_image">
                            <img src="svg/gig.svg" alt=""/>
                        </div>
                        <div className="side_content">
                            <p>Gig</p>
                        </div>
                    </div>
                    <div className="side_button">
                        <div className="side_image">
                            <img src="svg/earnings.svg" alt=""/>
                        </div>
                        <div className="side_content">
                            <p>Earnings</p>
                        </div>
                    </div>
                    <div className="side_button">
                        <div className="side_image">
                            <img src="svg/analytics.svg" alt=""/>
                        </div>
                        <div className="side_content">
                            <p>analytics</p>
                        </div>
                    </div>
                    <div className="side_button">
                        <div className="side_image">
                            <img src="svg/Wallet.svg" alt=""/>
                        </div>
                        <div className="side_content">
                            <p>wallet</p>
                        </div>
                    </div>
                    <div className="side_button">
                        <div className="side_image">
                            <img src="svg/Profile.svg" alt=""/>
                        </div>
                        <div className="side_content">
                            <p>Creator profile</p>
                        </div>
                    </div>
                </div>
                <div className="side_footer">
                    <div className="side_button">
                        <div className="side_image">
                            <img src="svg/setting.svg" alt=""/>
                        </div>
                        <div className="side_content">
                            <p>Settings</p>
                        </div>
                    </div>
                    <div className="side_button">
                        <div className="side_image">
                            <img src="svg/Logout.svg" alt=""/>
                        </div>
                        <div className="side_content">
                            <p>Log Out</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="admin_content">
            <div className="admin_header">
                <div className="search_bar">
                    <img src="img/Search.png" alt=""/>
                    <input type="text" placeholder="Search"/>
                </div>
                <div className="header_content">
                    <p>How it works</p>
                    <p>Supports</p>
                    <p>Client Mode</p>
                </div>
                <div className="header_icon">
                    <img src="svg/Notification.svg" alt=""/>
                    <img src="svg/chat.svg" alt=""/>
                </div>
                <div className="header_avatar">
                    <img src="img/avatarpic.png" alt=""/>
                </div>
            </div>
            <div className="admin_body">
                <div className="admin_container">
                    <div className="creator_panel">
                        <div className="creator_avatar">
                            <div className="avatar_image">
                                <div>
                                    <span className="indicator online"></span>
                                </div>
                                <img src="img/avatarpic.png" alt=""/>
                            </div>
                            <div className="avatar_content">
                                <p>Creator Name</p>
                                <p>Top Creator</p>
                            </div>
                        </div>
                        <div className="creator_container">
                            <div className="creator_body">
                                <h5>Achievements</h5>
                            </div>
                            <div className="creator_achievement">
                                <div className="creator_award">
                                    <div className="hexagon"></div>
                                    <div className="achievement_image">
                                            <img src="img/trophy.png" alt=""/>
                                    </div>
                                </div>
                                <div className="creator_content">
                                    <p>Top Creator</p>
                                    <p> Since 2020 - Presents</p>
                                </div>
                            </div>
                            <div className="creator_achievement">
                                <div className="creator_award">
                                        <div className="hexagon"></div>
                                        <div className="achievement_image">
                                                <img src="img/received.png" alt=""/>
                                        </div>
                                </div>
                                <div className="creator_content">
                                    <p>Five Orders</p>
                                    <p>Mostly get five order</p>
                                </div>
                            </div>
                            <div className="creator_achievement">
                                <div className="creator_award">
                                        <div className="hexagon"></div>
                                        <div className="achievement_image">
                                                <img src="img/received 1.png" alt=""/>
                                        </div>
                                </div>
                                <div className="creator_content">
                                    <p>Five Orders</p>
                                    <p>Mostly get five orders</p>
                                </div>
                            </div>
                            <div className="creator_action">
                                <p>See more</p>
                            </div>
                            <div className="creator_descriptions">
                                <p>Description</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, sit ullamcorper nec urna vel. Nam in magna varius ac vitae ac. Sem quam id varius mauris.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="panel_board">
                        <div className="board_showcase">
                            <div className="board_wrapper">
                                <div className="performance_card">
                                    <p>Active projects</p>
                                    <p>5</p>
                                    <p>View</p>
                                </div>
                                <div className="performance_card">
                                    <p>Complete Order</p>
                                    <p>25</p>
                                    <p>View</p>
                                </div>
                                <div className="performance_card">
                                    <p>New Request</p>
                                    <p>4</p>
                                    <p>View</p>
                                </div>
                                <div className="performance_card">
                                    <p>Earned in October</p>
                                    <p>$144.99</p>
                                    <p>View</p>
                                </div>
                                <div className="performance_card">
                                    <p>wallet amount</p>
                                    <p>$1124.99</p>
                                    <p>View</p>
                                </div>
                            </div>
                        </div>
                        <div className="due_project_header">
                            <p>Due Today</p>
                            <p>See all</p>
                        </div>
                        <div className="gig_table_header">
                            <div className="project_name">
                                <p>Project name</p>
                            </div>
                            <div className="order_by">
                                <p>Order by</p>
                            </div>
                            <div className="project_price">
                                <p>Price</p>
                            </div>
                            <div className="project_time">
                                <p>Delivery Time</p>
                            </div>
                        </div>
                        <div className="gig_table">
                            <div className="gig_table_row">
                                <div className="gig_card_wrapper">
                                    <div className="gig_card_image">
                                        <img src="img/gig1.png" alt=""/>
                                    </div>
                                    <div className="gig_card_content">
                                        <p>Title of the project</p>
                                        <p>Basic Package</p>
                                    </div>
                                </div>
                                <div className="gig_order_details">
                                    <div className="gig_order_image">
                                        <img src="img/gig_avatar.png" alt=""/>
                                    </div>
                                    <div className="gig_order_content">
                                        <p>Michael John</p>
                                    </div>
                                </div>
                                <div className="gig_order_price">
                                    <p>$99,99</p>
                                </div>
                                <div className="gig_time">
                                    <p>4h 18m Left</p>
                                </div>
                                <div className="gig_view">
                                    <p>View</p>
                                </div>
                            </div>
                            <div className="gig_table_row">
                                <div className="gig_card_wrapper">
                                    <div className="gig_card_image">
                                        <img src="img/gig1.png" alt=""/>
                                    </div>
                                    <div className="gig_card_content">
                                        <p>Title of the project</p>
                                        <p>Basic Package</p>
                                    </div>
                                </div>
                                <div className="gig_order_details">
                                    <div className="gig_order_image">
                                        <img src="img/gig_avatar.png" alt=""/>
                                    </div>
                                    <div className="gig_order_content">
                                        <p>Michael John</p>
                                    </div>
                                </div>
                                <div className="gig_order_price">
                                    <p>$99,99</p>
                                </div>
                                <div className="gig_time">
                                    <p>4h 18m Left</p>
                                </div>
                                <div className="gig_view">
                                    <p>View</p>
                                </div>
                            </div>
                            <div className="gig_table_row">
                                <div className="gig_card_wrapper">
                                    <div className="gig_card_image">
                                        <img src="img/gig1.png" alt=""/>
                                    </div>
                                    <div className="gig_card_content">
                                        <p>Title of the project</p>
                                        <p>Basic Package</p>
                                    </div>
                                </div>
                                <div className="gig_order_details">
                                    <div className="gig_order_image">
                                        <img src="img/gig_avatar.png" alt=""/>
                                    </div>
                                    <div className="gig_order_content">
                                        <p>Michael John</p>
                                    </div>
                                </div>
                                <div className="gig_order_price">
                                    <p>$99,99</p>
                                </div>
                                <div className="gig_time">
                                    <p>4h 18m Left</p>
                                </div>
                                <div className="gig_view">
                                    <p>View</p>
                                </div>
                            </div>
                        </div>
                        <div className="gig_table_container">
                            <div className="active_gig_header">
                                <p>Active Project</p>
                                <p>See all</p>
                            </div>
                            <div className="active_gig_card">
                                <div className="active_card_row">
                                    <div className="active_card">
                                        <img src="img/featured.png" alt=""/>
                                        <div className="active_content">
                                            <div className="active_gig_image">
                                                <img src="img/featured.png" alt=""/>
                                            </div>
                                            <div className="active_gig_title">
                                                <p>Micheal John</p>
                                                <p>logo editing</p>
                                            </div>
                                            <div className="active_gig_price">
                                                <p>Starting from</p>
                                                <p>$40</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="active_card">
                                        <img src="img/featured.png" alt=""/>
                                        <div className="active_content">
                                            <div className="active_gig_image">
                                                <img src="img/featured.png" alt=""/>
                                            </div>
                                            <div className="active_gig_title">
                                                <p>Micheal John</p>
                                                <p>logo editing</p>
                                            </div>
                                            <div className="active_gig_price">
                                                <p>Starting from</p>
                                                <p>$40</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="active_card">
                                        <img src="img/featured.png" alt=""/>
                                        <div className="active_content">
                                            <div className="active_gig_image">
                                                <img src="img/featured.png" alt=""/>
                                            </div>
                                            <div className="active_gig_title">
                                                <p>Micheal John</p>
                                                <p>logo editing</p>
                                            </div>
                                            <div className="active_gig_price">
                                                <p>Starting from</p>
                                                <p>$40</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="active_card">
                                        <img src="img/featured.png" alt=""/>
                                        <div className="active_content">
                                            <div className="active_gig_image">
                                                <img src="img/featured.png" alt=""/>
                                            </div>
                                            <div className="active_gig_title">
                                                <p>Micheal John</p>
                                                <p>logo editing</p>
                                            </div>
                                            <div className="active_gig_price">
                                                <p>Starting from</p>
                                                <p>$40</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default CustomOffer