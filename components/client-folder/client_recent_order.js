import React from 'react'
import Footer from '../general-folder/footer';
import ClientHeader from './clientHeader';
import ClientMobileHeader from './clientMobileHeader';

const ClientRecentOrder = () => {
  return (
    <div>
        <div className="recent_order_switch flex_show_row remove_margin">
                    <div className="switch_active flex_show_row">
                        <div className="switch_control"></div>
                    </div>
                    <p>Show on profile</p>
                </div>
                <div className="client_recent_orders_card flex_show_row">
                    <div className="recent_order_image">
                        <img src="img/category5.png" alt=""/>
                    </div>
                    <div className="recent_order_content remove_margin">
                        <p>Title of the project</p>
                        <div className="seller_recent_name remove_margin flex_show_row">
                            <img src="img/category5.png" alt=""/>
                            <p>seller name</p>
                        </div>
                    </div>
                    <div className="recommend_project remove_margin flex_show_row">
                        <img src="svg/thumb_up.svg" alt=""/>
                        <p>Recommend</p>
                    </div>
                    <div className="project_budget remove_margin">
                        <p>$99.99</p>
                    </div>
                    <div className="project_card_button remove_margin">
                        <p>View</p>
                    </div>
                </div>
                <div className="client_recent_orders_card flex_show_row">
                    <div className="recent_order_image">
                        <img src="img/category5.png" alt=""/>
                    </div>
                    <div className="recent_order_content remove_margin">
                        <p>Title of the project</p>
                        <div className="seller_recent_name remove_margin flex_show_row">
                            <img src="img/category5.png" alt=""/>
                            <p>seller name</p>
                        </div>
                    </div>
                    <div className="recommend_project remove_margin flex_show_row">
                        <img src="svg/thumb_up.svg" alt=""/>
                        <p>Recommend</p>
                    </div>
                    <div className="project_budget remove_margin">
                        <p>$99.99</p>
                    </div>
                    <div className="project_card_button remove_margin">
                        <p>View</p>
                    </div>
                </div>
                <div className="client_recent_orders_card flex_show_row">
                    <div className="recent_order_image">
                        <img src="img/category5.png" alt=""/>
                    </div>
                    <div className="recent_order_content remove_margin">
                        <p>Title of the project</p>
                        <div className="seller_recent_name remove_margin flex_show_row">
                            <img src="img/category5.png" alt=""/>
                            <p>seller name</p>
                        </div>
                    </div>
                    <div className="recommend_project remove_margin flex_show_row">
                        <img src="svg/thumb_up.svg" alt=""/>
                        <p>Recommend</p>
                    </div>
                    <div className="project_budget remove_margin">
                        <p>$99.99</p>
                    </div>
                    <div className="project_card_button remove_margin">
                        <p>View</p>
                    </div>
                </div>
                <div className="client_recent_orders_card flex_show_row">
                    <div className="recent_order_image">
                        <img src="img/category5.png" alt=""/>
                    </div>
                    <div className="recent_order_content remove_margin">
                        <p>Title of the project</p>
                        <div className="seller_recent_name remove_margin flex_show_row">
                            <img src="img/category5.png" alt=""/>
                            <p>seller name</p>
                        </div>
                    </div>
                    <div className="recommend_project remove_margin flex_show_row">
                        <img src="svg/thumb_up.svg" alt=""/>
                        <p>Recommend</p>
                    </div>
                    <div className="project_budget remove_margin">
                        <p>$99.99</p>
                    </div>
                    <div className="project_card_button remove_margin">
                        <p>View</p>
                    </div>
                </div>
    </div>
  )
}

export default ClientRecentOrder;