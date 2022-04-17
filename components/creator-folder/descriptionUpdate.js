import React, { useContext, useState } from 'react';
import { MainContext } from '../context/mainContext';

const DescriptionUpdate = (props) => {
    const initialState = {
        name: "",
        description: "",
    }
    const [faq, setFaq] = useState(initialState);
    
    const {gig, setGig, handleOpenFaq, openFaq}= useContext(MainContext);
    const handleDecription = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setFaq({...faq, [name]: value});
    }

    const handleSubmitFaq = (e) => {
        e.preventDefault();
        const {gigFaq} = gig;
        gigFaq = [...gigFaq, faq];
        setGig({...gig, gigFaq});
        setFaq(initialState);
        handleOpenFaq();
    }

    return (
        <div>
            <div className="faq_wrapper flex_show_row">
                <div className="faq_header project_description_header">
                    <p>Frequently Asked Questions</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit nec </p>
                </div>
                <div className="add_new_faq_button flex_show_row">
                    <p onClick={handleOpenFaq}>Add a questions</p>
                    <img src="/svg/plus_circle.svg" alt=""/>
                </div>
            </div>
           {openFaq == true && (<div className="faq_questions">
                <div className="faq_header_details_update project_form project_description_header">
                    <input type="text" name="name" value={faq.name} onChange={handleDecription}/>
                    <textarea rows="4" value={faq.description} onChange={handleDecription} cols="50" name="description" form="usrform"></textarea>
                </div>
                <div className="faq_submit_button remove_margin flex_show_row">
                    <p>Cancel</p>
                    <p onClick={handleSubmitFaq}>Save</p>
                </div>
            </div>)}
        </div>
    );
}

export default DescriptionUpdate;