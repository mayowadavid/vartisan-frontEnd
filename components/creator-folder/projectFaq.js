import React, { useContext, useState } from 'react';
import { MainContext } from '../context/mainContext';

const ProjectFaq = ({deleteAction, data, i}) => {
    const [addNew, setAddNew] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [faq, setFaq] = useState();
    const {gig, setGig}= useContext(MainContext);
            const handleAdd = (e) => {
                e.preventDefault();
                setAddNew(!addNew);
            }
            
            const initialState = {
                name: "",
                description: "",
            }

            // const handleEdit = (e) => {
            //     e.preventDefault();
            //     setOpenEdit(!openEdit);
            // }
            const handleDecription = (e) => {
                e.preventDefault();
                const {name, value} = e.target;
                setFaq({...faq, [name]: value});
            }
            
            const editAction = (e, i) => {
                e.preventDefault();
                const {gigFaq} = gig;
                setOpenEdit(!openEdit);
                const data = gigFaq[i];
                setFaq({...data});
            }

            const handleSubmitFaq = (e) => {
                e.preventDefault();
                const {gigFaq} = gig;
                const gigFaqCopy = [...gigFaq];
                gigFaqCopy[i] = faq;
                gigFaq = [...gigFaqCopy]
                setGig({...gig, gigFaq});
                setFaq(initialState);
                setOpenEdit(!openEdit);
            }

    return(<>
        {openEdit == false && (<div key={i} className="faq_questions flex_show_row">
            <div className="faq_header_details remove_margin project_description_header">
                <p>{data.name}</p>
                <p>{data.description}</p>
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
            (openEdit == true && faq !== undefined) && 
        (<div className="faq_questions">
            <div className="faq_header_details_update project_form project_description_header">
                <input type="text" name="name" value={faq.name} onChange={handleDecription}/>
                <textarea rows="4" value={faq.description} onChange={handleDecription} cols="50" name="description" form="usrform"></textarea>
            </div>
            <div className="faq_submit_button remove_margin flex_show_row">
                <p>Cancel</p>
                <p onClick={handleSubmitFaq}>Save</p>
            </div>
        </div>)
    }
    </>
    )
}

export default ProjectFaq;