import React from 'react'
import Sidebar from './sidebar'
import VartisanHeader from './vartisanHeader'
import VartisanMobileHeader from './vartisanMobileHeader'

const Dashboard = () => {
  return (
    <div className="dashboard_wrapper">
        <Sidebar />
        <div className="admin_content">
            <VartisanHeader />
            <VartisanMobileHeader />
            <div className="admin_body">
                <div className="admin_container">
                    <div className="creator_panel">
                        <div className="creator_avatar">
                            <div className="avatar_image">
                                <div>
                                    <span className="indicator online"></span>
                                </div>
                                <img src="../img/avatarpic.png" alt=""/>
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
                                            <img src="../img/trophy.png" alt=""/>
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
                                                <img src="../img/received.png" alt=""/>
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
                                                <img src="../img/received 1.png" alt=""/>
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
                                        <img src="../img/gig1.png" alt=""/>
                                    </div>
                                    <div className="gig_card_content">
                                        <p>Title of the project</p>
                                        <p>Basic Package</p>
                                    </div>
                                </div>
                                <div className="gig_order_details">
                                    <div className="gig_order_image">
                                        <img src="../img/gig_avatar.png" alt=""/>
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
                                        <img src="../img/gig1.png" alt=""/>
                                    </div>
                                    <div className="gig_card_content">
                                        <p>Title of the project</p>
                                        <p>Basic Package</p>
                                    </div>
                                </div>
                                <div className="gig_order_details">
                                    <div className="gig_order_image">
                                        <img src="../img/gig_avatar.png" alt=""/>
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
                                        <img src="../img/gig1.png" alt=""/>
                                    </div>
                                    <div className="gig_card_content">
                                        <p>Title of the project</p>
                                        <p>Basic Package</p>
                                    </div>
                                </div>
                                <div className="gig_order_details">
                                    <div className="gig_order_image">
                                        <img src="../img/gig_avatar.png" alt=""/>
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
                                        <img src="../img/featured.png" alt=""/>
                                        <div className="active_content">
                                            <div className="active_gig_image">
                                                <img src="../img/featured.png" alt=""/>
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
                                        <img src="../img/featured.png" alt=""/>
                                        <div className="active_content">
                                            <div className="active_gig_image">
                                                <img src="../img/featured.png" alt=""/>
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
                                        <img src="../img/featured.png" alt=""/>
                                        <div className="active_content">
                                            <div className="active_gig_image">
                                                <img src="../img/featured.png" alt=""/>
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
                                        <img src="../img/featured.png" alt=""/>
                                        <div className="active_content">
                                            <div className="active_gig_image">
                                                <img src="../img/featured.png" alt=""/>
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
  )
}

export default Dashboard