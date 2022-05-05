const ClientFeedback = () => {
    return (
        <div className="client_order_body">
            <div className="client_body_wrapper flex_show_row">
                <div className="client_order_left">
                    <div className="client_feedback">
                        <div className="client_feedback_header remove_margin">
                            <p>Public Feedback</p>
                            <p>Share your experience with the Vartisan</p>
                        </div>
                        <div className="client_feedback_body">
                            <div className="client_feedback_recommend_row flex_show_row">
                                <div className="client_feedback_content remove_margin">
                                    <p>Do you recommend this Vartisan?</p>
                                    <p>Give the Vartisan a like or dislike</p>
                                </div>
                                <div className="client_feedback_rating flex_show_row">
                                    <div className="client_rate_thumb flex_show_row">
                                        <img src="../../svg/thumb_up.svg" alt=""/>
                                    </div>
                                    <div className="client_rate_thumb flex_show_row">
                                        <img src="../../svg/thumb_down.svg" alt=""/>
                                    </div>
                                </div>
                                <div className="client_feedback_comment remove_margin">
                                    <p>Leave a public review regarding your project to the Vartisan</p>
                                    <textarea name="" placeholder="your message" id="" cols="30" rows="10"></textarea>
                                </div>
                                <div className="feedback_characters">
                                    <p>0/200 characters</p>
                                </div>
                                <div className="feedbacks_button flex_show_row remove_margin">
                                    <p>{`Skip & remind me`}</p>
                                    <p>Send Feedback</p>
                                </div>
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
                                <p>Approved</p>
                            </div>
                            <div className="project_actions_button flex_show_column remove_margin">
                                <div className="project_actions remove_margin">
                                    <p>Contact Vartisan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientFeedback;