import React, { useContext } from 'react';
import { MainContext } from '../context/mainContext';
import {useRouter} from 'next/router';
const SuccessModal = ({order}) => {
    const {openPop, setOpenPopUp, userProfile} = useContext(MainContext);
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault();
        setOpenPopUp(!openPop);
        router.push(`/${userProfile?.user?.userName}/manage_orders/${order.id}`);
    }
    const contactSeller = (e) => {
        e.preventDefault();
        setOpenPopUp(!openPop);
        router.push(`/${userProfile?.user?.userName}/inbox`);
    }
    return (<div className="references_pop_up flex_show_row">
    <div className="success_modal flex_show_column">
        <div onClick={handleSubmit} className="close_modal flex_show_row">
            <img src="/svg/close_small.svg" alt=""/>
        </div>
        <div className="modal_image">
            <img src="/svg/success_box.svg" alt=""/>
        </div>
        <div className="modal_middle flex_show_column remove_margin">
            <p>Congratulations!</p>
            <p>Your request has been submitted</p>
        </div>
        <div className="modal_body remove_margin">
            <p>The Vartisan has 24 hours to accept or reject your request. If your request is rejected, you will receive an instant refund.</p>
        </div>
        <div className="modal_button remove_margin">
            <p onClick={handleSubmit}>Project Activity</p>
        </div>
        <div className="modal_footer">
            <p onClick={contactSeller}>Contact Vartisan</p>
        </div>
    </div>
</div>)
}

export default SuccessModal;