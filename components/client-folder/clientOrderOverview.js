import React from 'react'
import Footer from '../general-folder/footer'
import ClientHeader from './clientHeader'
import ClientMobileHeader from './clientMobileHeader'

const ClientOrderOverview = () => {
  return (
    <div>
    <ClientHeader />
    <ClientMobileHeader />
    <div className="client_order_body">
            <div className="client_body_wrapper order_submited_row  flex_show_row">
                <div className="client_order_left">
                    <div className="overview_header flex_show_row">
                        <div className="client_overview_wrapper remove_margin">
                            <p>Order Activity</p>
                            <p>Track your order activity with seller</p>
                        </div>
                        <div className="client_overview_activity flex_show_row">
                            <div className="client_overview_wrap remove_margin flex_show_row">
                                <p>Activity</p>
                                <img src="svg/caret_down.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="order_overview_body">
                        <div className="order_creations flex_show_row">
                            <img src="img/complete.png" alt=""/>
                            <p>Order created</p>
                            <p>October 2, 2021</p>
                        </div>
                        <div className="order_creations flex_show_row">
                            <img src="img/complete.png" alt=""/>
                            <p>You submitted the requirements</p>
                            <p>October 2, 2021</p>
                        </div>
                        <div className="order_accepted flex_show_row">
                            <img src="img/complete.png" alt=""/>
                            <p>Your order was accepted</p>
                        </div>
                        <div className="client_creator_comment">
                            <div className="client_creator_header flex_show_row">
                                <div className="client_creator_avatar">
                                    <img src="img/category.png" alt=""/>
                                </div>
                                <div className="client_creator_content remove_margin">
                                    <p>Vartisan Name, Delivered the order</p>
                                    <p>October 2, 2021</p>
                                </div>
                            </div>
                            <div className="client_creator_comment_body">
                                <div className="delivery_chat_message">
                                    <p>
                                        Hi,
                                        Thank you for your order, here is the design result. please check and  let me know if you have any questions
                                    </p>
                                    <div className="chat_message_wrapper flex_show_row">
                                        <div className="chat_message_image">
                                            <img src="img/category.png" alt=""/>
                                            <div className="chat_delivery_image_wrap remove_margin flex_show_row">
                                                <div className="chat_delivery_image chat_delivery_first flex_show_row">
                                                    <img src="img/image_alt.png" alt=""/>
                                                    <p>Delivery design.jpg</p>
                                                </div>
                                                <div className="chat_delivery_image">
                                                    <img src="svg/download.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat_message_files">
                                            <div className="source_file remove_margin">
                                                <p>Source files</p>
                                                <div className="files_holder flex_show_row remove_margin">
                                                    <img src="svg/file_blank_fill.svg" alt=""/>
                                                    <p>File name.rar</p>
                                                </div>
                                            </div>
                                            <div className="other_file remove_margin">
                                                <p>Other files</p>
                                                <div className="files_holder flex_show_row remove_margin">
                                                    <img src="svg/file_png.svg" alt=""/>
                                                    <p>Delivery design.png</p>
                                                </div>
                                                <div className="files_holder flex_show_row remove_margin">
                                                    <img src="svg/file_jpg.svg" alt=""/>
                                                    <p>Delivery design.jpg</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chat_submit_message remove_margin flex_show_row">
                            <input type="text" name="" placeholder="write your message here" id=""/>
                            <p>Send</p>
                        </div>
                        <div className="chat_add_file_icon flex_show_row">
                            <div className="chat_file_icon">
                                <img src="svg/link.svg" alt=""/>
                            </div>
                            <div className="chat_file_icon">
                                <img src="svg/emoji.svg" alt=""/>
                            </div>
                            <div className="chat_file_icon">
                                <img src="svg/Video.svg" alt=""/>
                            </div>
                            <div className="chat_extra_order remove_margin flex_show_row">
                                <img src="svg/plus_circle_outline.svg" alt=""/>
                                <p>Add extra order</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="client_order_right">
                    <div className="client_order_summary remove_margin">
                        <div className="price_summary_wrap flex_show_row remove_margin">
                        <div className="price_summary_header flex_show_row">
                            <img src="img/category.png" alt=""/>
                            <div className="price_summary_header_content remove_margin">
                                <p>Title of the project</p>
                                <p>Categories Name</p>
                            </div>
                        </div>
                        </div>
                        <div className="price_final_total_wrap">
                            <div className="price_total remove_margin flex_show_row">
                                <p>Total</p>
                                <p>$53.05</p>
                            </div>
                            <div className="delivery_time remove_margin flex_show_row">
                                <p>Delivery time</p>
                                <p>2 days</p>
                            </div>
                            <div className="delivery_time remove_margin flex_show_row">
                                <p>Revisions</p>
                                <p>3</p>
                            </div>
                            <div className="orderId remove_margin flex_show_row">
                                <p>Order ID</p>
                                <p>#181001</p>
                            </div>
                            <div className="orderStatus remove_margin flex_show_row">
                                <p>Order status</p>
                                <p>Delivered</p>
                            </div>
                            <div className="project_actions_button flex_show_column remove_margin">
                                <div className="project_actions remove_margin">
                                    <p>Contact Vartisan</p>
                                </div>
                                <div className="project_actions remove_margin">
                                    <p>Approve Delivery</p>
                                </div>
                                <div className="project_actions remove_margin">
                                    <p>Request Revision</p>
                                </div>
                                <div className="project_actions remove_margin">
                                    <p>Cancel Order</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <Footer />
    </div>
  )
}

export default ClientOrderOverview