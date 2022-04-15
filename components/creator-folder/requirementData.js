import React, { useContext, useState } from 'react';
import { MainContext } from '../context/mainContext';
const RequirementData = ({data, i, deleteAction}) => {
    const initialState = {
        requirementName: "",
        required: false,
        text: false,
        link: false,
    }
    const [addNew, setAddNew] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [singleRequirement, setSingleRequirement] = useState(initialState);
    const {gig, setGig}= useContext(MainContext);
    const handleAdd = (e) => {
        e.preventDefault();
        setAddNew(!addNew);
    }

    const handleRequirement = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setRequirement({...requirement, [name]: value});
    }

    const editAction = (e, i) => {
        e.preventDefault();
        const {gigRequirement} = gig;
        setOpenEdit(!openEdit);
        const data = gigRequirement[i];
        setSingleRequirement({...data});
    }

    const handleCheck = (e) => {
        const {name, checked} = e.target;
        setRequirement({...requirement, [name]: checked});
    }

    const handleSubmitRequirement = (e) => {
        e.preventDefault();
        const {gigRequirement} = gig;
        gigRequirement[i] = singleRequirement;
        setGig({...gig, gigRequirement});
        setSingleRequirement(initialState);
        setOpenEdit(!openEdit);
    }

   const {text, link, requirementName, required} = data;
    return (
        <>
       {openEdit == false && (<div className="project_link_wrapper flex_show_row">
            <div className="project_header_details project_description_header">
                <p>{requirementName}</p>
                <div className="project_header_row flex_show_row">
                    <div className="project_link_answer">
                        <p>Answer:</p>
                    </div>
                    <div className="project_link_container flex_show_row">
                        {text == true && (<div className="project_no_link">
                            <p>T Free Text</p>
                        </div>)}
                        {link == true && (<div className="project_free_link_container flex_show_row">
                            <img src="/svg/free_link.svg" alt=""/>
                            <p>Free Text</p>
                        </div>)}
                    </div>
                </div>
            </div>
            <div onClick={ handleAdd } className="faq_more_button">
                {addNew == true && (<div className="faq_drop_button shadow flex_show_col">
                <div className="drop_button remove_margin flex_show_row">
                    <img src="/svg/edit.svg" />
                    <p onClick={(e)=> editAction(e, i) }>Edit</p>
                </div> 
                <div className="drop_button remove_margin flex_show_row">
                    <img src="/svg/delete.svg"/>
                    <p  onClick={(e)=> deleteAction(e, i) }>Delete</p>
                </div>
                </div>)}
                <div className="faq_order_action_image">
                    <img src="/svg/more_horizontal.svg" alt=""/>
                </div>
            </div>
        </div>)}
        {
            (openEdit == true && singleRequirement !== undefined) &&
            (<div className="project_link_wrapper flex_show_row">
            <div className="project_form">
                <input type="text" name="requirementName" value={requirementName} onChange={handleRequirement} placeholder="Requirements"/>
                <div className="project_header_row flex_show_row">
                    <div className="project_link_add_answer">
                        <p>Answer:</p>
                        <div className="project_link_checkbox">
                            <div className="project_link_checkbox_row flex_show_row">
                                <input name="text" checked={text} onChange={handleCheck} type="checkbox" id=""/>
                                <p>Free Text</p>
                            </div>
                            <div className="project_link_checkbox_row flex_show_row">
                                <input type="checkbox" checked={link} onChange={handleCheck} name="link" id=""/>
                                <p>Files Attachment</p>
                            </div>
                        </div>
                    </div>
                    <div className="project_link_required flex_show_row">
                        <input type="checkbox" checked={required} onChange={handleCheck} name="required" id=""/>
                        <p>Required</p>
                    </div>
                </div>
                <div className="project_link_submit_button remove_margin flex_show_row">
                    <p>Cancel</p>
                    <p onClick={handleSubmitRequirement}>Save</p>
                </div>
            </div>
            </div>)
        }
        </>
    )
}

export default RequirementData;