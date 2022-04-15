import React from 'react'
import ClientHeader from './clientHeader'
import ClientMobileHeader from './clientMobileHeader'

const ClientGigPayment = () => {
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
                        <p>Payment Options</p>
                    </div>
                    <div className="client_payment_form">
                        <form>
                            <div className="client_payment_form_wrap">
                                <div className="client_payment_header remove_margin flex_show_row">
                                    <input type="radio" name="" id=""/>
                                    <p>Credit & Debit Cards</p>
                                </div>
                                <div className="client_payment_details flex_show_row">
                                    <div className="client_card_number pay_font remove_margin card_number">
                                        <p>Card number</p>
                                        <input type="number" name="" id=""/>
                                    </div>
                                    <div className="client_card_exp pay_font remove_margin card_number">
                                        <p>Exp Date</p>
                                        <input type="number" name="" id=""/>
                                    </div>
                                    <div className="client_card_security pay_font remove_margin card_number">
                                        <p>Security code</p>
                                        <input type="number" name="" id=""/>
                                    </div>
                                    <div className="client_card_name pay_font card_name remove_margin">
                                        <p>First name</p>
                                        <input type="text" name="" id=""/>
                                    </div>
                                    <div className="client_card_name pay_font card_name remove_margin">
                                        <p>Last name</p>
                                        <input type="text" name="" id=""/>
                                    </div>
                                    <div className="client_save_payment pay_font flex_show_row">
                                        <input type="checkbox" name="" id=""/>
                                        <p>Save for next order</p>
                                    </div>
                                </div>
                            </div>
                            <div className="client_paypal flex_show_row remove_margin">
                                <input type="radio" name="" id=""/>
                                <p>Pay Pal</p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="client_order_right">
                    <div className="client_order_summary remove_margin">
                        <p>Price Summary</p>
                        <div className="price_summary_wrap flex_show_row remove_margin">
                            <div className="price_summary_header flex_show_row">
                                <img src="img/category.png" alt=""/>
                                <div className="price_summary_header_content remove_margin">
                                    <p>Title of the project</p>
                                    <p>Categories Name</p>
                                </div>
                            </div>
                            <div className="price_summary_body">
                                <div className="price_quantity_summary flex_show_row remove_margin">
                                    <p>Quantity</p>
                                    <p>$25.00</p>
                                </div>
                                <div className="price_quantity_details_wrap">
                                    <div className="price_gig_details flex_show_row">
                                        <img src="svg/done.svg" alt=""/>
                                        <p>Commercial rights</p>
                                    </div>
                                    <div className="price_gig_details flex_show_row">
                                        <img src="svg/done.svg" alt=""/>
                                        <p>PNG, PSD, GIF, WEBM</p>
                                    </div>
                                    <div className="price_gig_details flex_show_row">
                                        <img src="svg/done.svg" alt=""/>
                                        <p>Private Fee/other custom fields</p>
                                    </div>
                                    <div className="extra_fast_wrap flex_show_row remove_margin">
                                        <div className="extra_gig_content flex_show_row remove_margin">
                                            <img src="svg/done.svg" alt=""/>
                                            <p>Extra fast 2 Days</p>
                                        </div>
                                        <p>$25.00</p>
                                    </div>
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
                            <div className="price_submit_button remove_margin">
                                <p>Confirm & Pay</p>
                            </div>
                        </div>
                        <div className="final_statement">
                            <p>Secure Payment</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <Footer />
    </div>
  )
}

export default ClientGigPayment