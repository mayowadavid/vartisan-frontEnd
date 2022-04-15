import React, { useContext, useState } from 'react';
import RequirementData from './requirementData'
import { MainContext } from '../context/mainContext';

const Requirement = () => {
    const initialState = {
        requirementName: "",
        required: false,
        text: false,
        link: false,
    }

    const [requirement, setRequirement] = useState(initialState);
    const {requirementName, required, text, link} = requirement;
    const [openRequirement, setOpenRequirement] = useState(false);
    
    const {gig, setGig, proceedRequirement}= useContext(MainContext);
    const handleRequirement = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setRequirement({...requirement, [name]: value});
    }

    const handleSubmitRequirement = (e) => {
        e.preventDefault();
        const {gigRequirement} = gig;
        gigRequirement = [...gigRequirement, requirement];
        setGig({...gig, gigRequirement});
        setRequirement(initialState);
        // handleOpenFaq();
    }
    const deleteAction = (e, id) => {
        e.preventDefault();
        let {gigRequirement} = gig;
        gigRequirement = gigRequirement.filter((data, i)=>  i !== id);
       return setGig({...gig, gigRequirement});
    }

    const handleCheck = (e) => {
        const {name, checked} = e.target;
        setRequirement({...requirement, [name]: checked});
    }
    const { gigRequirement } = gig;

    const handleOpenRequirement = () => {
        setOpenRequirement(!openRequirement);
    }


  return (
    <div className="creator_manage_gig">
                <div className="gig_project_control flex_show_row">
                    <div className="project_control_container">
                        <div className="control_line"></div>
                        <div className="gig_project_row flex_show_row">
                            <div className="gig_tag_column flex_show_column remove_margin">
                                <img src="/svg/mark.svg" alt=""/>
                                <p>Overview</p>
                            </div>
                            <div className="gig_tag_column flex_show_column remove_margin">
                                <img src="/svg/mark.svg" alt=""/>
                                <p>pricing</p>
                            </div>
                            <div className="gig_tag_column flex_show_column remove_margin">
                                <img src="/svg/mark.svg" alt=""/>
                                <p>Description</p>
                            </div>
                            <div className="gig_tag_column flex_show_column remove_margin">
                                <img src="/svg/pen.svg" alt=""/>
                                <p>Requirements</p>
                            </div>
                            <div className="gig_tag_column flex_show_column remove_margin">
                                <img src="/svg/mark.svg" alt=""/>
                                <p>Gallery</p>
                            </div>
                        </div>
                    </div>
                    <div className="project_submit project_submit_header flex_show_row">
                        <p>Save as Draft</p>
                        <p onClick={proceedRequirement}>Continue</p>
                    </div>
                </div>
                <div className="creator_wrap_holder flex_show_row">
                    <div className="project_gig_container">
                        <div className="gig_project_body shadow">
                            <div className="project_requirement under_line flex_show_row">
                                <div className="gig_project_header">
                                    <p>Project Requirements</p>
                                </div>
                                <div className="add_new_requirement_button flex_show_row">
                                    <p onClick={handleOpenRequirement}>Add a requirement</p>
                                    <img src="/svg/plus_circle.svg" alt=""/>
                                </div>
                            </div>
                            <div className="project_link">
                            {gigRequirement.length !== 0 && gigRequirement.map((data, i)=>{
                    return (<RequirementData key={i} data={data} i={i} deleteAction={deleteAction} />)})}
                            </div>
                           {openRequirement !== false && ( <div className="project_link_wrapper flex_show_row">
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
                            </div>)}
                            <div className="project_submit flex_show_row">
                                <p>Save as Draft</p>
                                <p onClick={proceedRequirement}>Continue</p>
                            </div>
                        </div>
                    </div>
                    <div className="project_gig_tip remove_margin shadow">
                        <p>Tips For Your Project</p>
                        <ul>
                            <li><p>Lorem ipsum dolor sit amet, cing elit. Hendrerit nec </p></li>
                            <li><p>Lorem ipsum dolor sit amet, cing elit. Hendrerit nec </p></li>
                            <li><p>Lorem ipsum dolor sit amet, cing elit. Hendrerit nec </p></li>
                            <li><p>Lorem ipsum dolor sit amet, cing elit. Hendrerit nec </p></li>
                            <li><p>Lorem ipsum dolor sit amet, cing elit. Hendrerit nec </p></li>
                        </ul>
                        <a href=""><p>Learn more about the Tips</p></a>
                    </div>
                </div>
        </div>
  )
}

export default Requirement;