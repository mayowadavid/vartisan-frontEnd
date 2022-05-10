import React, { useContext } from 'react';
import { MainContext } from '../context/mainContext';
import {useRouter} from 'next/router';

const ApproveModal = () => {
    const {openApprovePop, setApprovePop, updateOrder} = useContext(MainContext);
    const router = useRouter()
    const { activity } = router.query;

    const submitOrder = async (e) => {
        e.preventDefault();
        const date = await Date.now();
        if(activity !== undefined){
            const {data, error} = await updateOrder({
            variables: {
                orderUpdate: {
                    id: activity,
                    orderStatus: 'completed',
                    approvalDate: date.toString(),
                }
            }
        })
        await data !== undefined && setApprovePop(!openApprovePop);}
    }

    const closePop = async (e) => {
        e.preventDefault();
        setApprovePop(!openApprovePop);
    }

    return (
        <div className="references_pop_up flex_show_row">
            <div className="success_modal flex_show_column">
                <div onClick={closePop} className="close_modal flex_show_row">
                    <img src="/svg/close_small.svg" alt=""/>
                </div>
                <div className="modal_image">
                    <img src="/svg/approve_box.svg" alt=""/>
                </div>
                <div className="modal_middle flex_show_column remove_margin">
                    <p>Approve the delivery</p>
                </div>
                <div className="modal_body approve_body remove_margin">
                    <p>Ready to receive the final delivery? 
                        Make sure you’ve double checked
                        the final deliverables.</p>
                </div>
                <div className="modal_action flex_show_row">
                    <div onClick={closePop} className="modal_action_button remove_margin">
                        <p>No</p>
                    </div>
                    <div onClick={submitOrder} className="modal_action_button remove_margin">
                        <p>Yes</p>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default ApproveModal;