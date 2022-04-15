import React from 'react'
import Footer from '../general-folder/footer'
import ClientHeader from './clientHeader'
import ClientMobileHeader from './clientMobileHeader'

const ClientGigOrder = () => {
  return (
    <div>
    <ClientHeader />
    <ClientMobileHeader />
    <div className="client_order_body">
            <div className="client_header_order_status remove_margin flex_show_row">
                <div className="client_header_order_line flex_show_row remove_margin">
                    <div className="order_number_wrap flex_show_row remove_margin">
                        <p>1</p>
                    </div>
                </div>
                <p>Order Details</p>
                <div className="client_header_order_line flex_show_row remove_margin">
                    <div className="client_order_line"></div>
                    <div className="order_number_wrap flex_show_row remove_margin">
                        <p>2</p>
                    </div>
                </div>
                <p>Submit requirement</p>
                <div className="client_header_order_line flex_show_row remove_margin">
                    <div className="client_order_line"></div>
                    <div className="order_number_wrap flex_show_row remove_margin">
                        <p>3</p>
                    </div>
                </div>
                <p>Confirm payment</p>
            </div>
            <div className="status_name remove_margin">
                <p>Order Details</p>
            </div>
            <div className="client_body_wrapper flex_show_row">
                <div className="client_order_left">
                    <div className="order_header">
                        <p>Order Details</p>
                    </div>
                    <div className="client_order_row flex_show_row">
                        <img src="img/category.png" alt=""/>
                        <div className="client_order_content remove_margin">
                            <p>Title of the project</p>
                            <p>Categories Name</p>
                            <div className="order_recommends flex_show_row remove_margin">
                                <img src="svg/thumb_up.svg" alt=""/>
                                <p>14 Recommend</p>
                            </div>
                        </div>
                        <div className="client_order_quantity_row flex_show_row">
                            <div className="client_order_quantity flex_show_row remove_margin">
                                <p>Qty</p>
                                <input type="number" placeholder="1" name="" id=""/>
                            </div>
                            <div className="client_order_amount remove_margin">
                                <p>$25</p>
                            </div>
                        </div>
                    </div>
                    <div className="client_extra_order">
                        <p>Add extra order</p>
                    </div>
                    <div className="client_extra_order_row">
                        <div className="client_extra_order_features flex_show_row remove_margin">
                            <div className="client_extra_check flex_show_row">
                                <input type="checkbox" name="" id=""/>
                                <p>Rush order:3 day Delivery</p>
                            </div>
                            <p>$25</p>
                        </div>
                    </div>
                    <div className="client_extra_order_row">
                        <div className="client_extra_order_features flex_show_row remove_margin">
                            <div className="client_extra_check flex_show_row">
                                <input type="checkbox" name="" id=""/>
                                <p>Commercial Fee</p>
                            </div>
                            <p>$45</p>
                        </div>
                    </div>
                    <div className="client_extra_order_row">
                        <div className="client_extra_order_features flex_show_row remove_margin">
                            <div className="client_extra_check flex_show_row">
                                <input type="checkbox" name="" id=""/>
                                <p>Private Commission</p>
                            </div>
                            <p>$25</p>
                        </div>
                    </div>
                </div>
                <div className="client_order_right">
                    <div className="client_order_summary remove_margin">
                        <p>Price Summary</p>
                        <div className="price_subtotal flex_show_row remove_margin">
                            <p>Subtotal</p> <p>$50</p>
                        </div>
                        <div className="client_tax remove_margin">
                            <p>Tax</p>
                        </div>
                        <div className="client_total_delivery">
                            <div className="client_total remove_margin flex_show_row">
                                <p>Total</p>
                                <p>$50.00</p>
                            </div>
                            <div className="client_deliveries remove_margin flex_show_row">
                                <p>Delivery time</p>
                                <p>2 days</p>
                            </div>
                        </div>
                        <div className="client_submit remove_margin">
                            <p>Continue</p>
                        </div>
                        <div className="order_message">
                            <p>You won't be charged yet</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <Footer />
    </div>
  )
}

export default ClientGigOrder