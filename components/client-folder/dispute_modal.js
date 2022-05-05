import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/mainContext'
import {useRouter} from 'next/router';

const DisputeModal = () => {
    const {openDisputePop, setDisputePop, updateOrder} = useContext(MainContext);
    const router = useRouter()
    const { activity } = router.query;

    const handleDispute = (e) => {
        e.preventDefault();
        setDisputePop(!openDisputePop);
    }

    const submitOrder = (e) => {
        e.preventDefault();
        const {data, error} = updateOrder({
            variables: {
                orderUpdate: {
                    id: activity,
                    orderStatus: 'withdrawn'
                }
            }
        })
    }

    return (
        <div className="references_pop_up flex_show_row">
            <div className="success_modal flex_show_column">
                <div onClick={handleDispute} className="close_modal flex_show_row">
                    <img src="/svg/close_small.svg" alt=""/>
                </div>
                <div className="modal_image">
                    <img src="/svg/dispute.svg" alt=""/>
                </div>
                <div className="modal_middle flex_show_column remove_margin">
                    <p>Request Dispute</p>
                </div>
                <div className="modal_body approve_body remove_margin">
                    <p>Your order will be paused while Support looks into the issue. Please contact the Vartisan to try sort out any issues in the meantime.</p>
                </div>
                <div className="modal_action flex_show_row">
                    <div onClick={handleDispute} className="modal_action_button remove_margin">
                        <p>No</p>
                    </div>
                    <div onClick={submitOrder} className="modal_action_button remove_margin">
                        <p>Pause Order</p>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default DisputeModal;