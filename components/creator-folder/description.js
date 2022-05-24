import React, { useContext, useState } from 'react'
import { MainContext } from '../context/mainContext';
import DescriptionUpdate from './descriptionUpdate';
import ProjectFaq from './projectFaq';

const Description = () => {
const {
    gig, 
    setGig, 
    setOpenFaq, 
    handleDescription,
    updateGig,
    updateGigFaq,
    createGigFaq
}= useContext(MainContext);
const {gigFaq} = gig;
const [progress, setProgress] = useState(false);
const handleDecription = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setGig({...gig, [name]: value});
}

const deleteAction = (e, id) => {
    e.preventDefault();
    let {gigFaq} = gig;
   gigFaq = gigFaq.filter((data, i)=>  i !== id);
   return setGig({...gig, gigFaq});
}

const createGigFaqs = (dataholder, gigsFaq) => {
    for (let x = 0; x < gigsFaq.length; x++){
        const name = gigsFaq[x].name;
        const description= gigsFaq[x].description;
        createGigFaq({
            variables: {
                createFaq : {
                    name,
                    description,
                    gigId: dataholder.id,
                }
            }
        })
    }
}

const updateGigFaqs = (dataholder, gigsFaq) => {
    for (let x = 0; x < gigsFaq.length; x++){
        const name = gigsFaq[x].name;
        const description= gigsFaq[x].description;
        const id = gigsFaq[x].id;
        console.log(gigsFaq, dataholder);
        updateGigFaq({
            variables: {
                updateFaq : {
                    id,
                    name,
                    description,
                    gigId: dataholder.id,
                }
            }
        })
    }
}

const submitDescription = async (e) => {
    e.preventDefault();
    await setProgress(!progress);
    const { gigFaq } = gig;
    if(gig.id !== ""){
        const {data: gigData, error: gigError} = await updateGig({
            variables: {
                updateGig : {
                    id: gig.id,
                    description: gig.description,
                }
            }
        });

    const gigFaqWithId = await gigFaq.filter((details)=> details.id !== undefined);
    await gigFaqWithId !== undefined && updateGigFaqs(gigData.updateGig, gigFaqWithId);
    const gigFaqWithoutId = await gigFaq.filter((details) => details.id == undefined);
    await gigFaqWithId !== undefined && createGigFaqs(gigData.updateGig, gigFaqWithoutId);
    }
    await setProgress(!progress);
    handleDescription();
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
                            <img src="/svg/pen.svg" alt=""/>
                            <p>Description</p>
                        </div>
                        <div className="gig_tag_column flex_show_column remove_margin">
                            <img src="/svg/mark.svg" alt=""/>
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
                    {
                        progress == true ? <p className="loader"><img src="svg/white-loading.svg" /></p>:
                        <p onClick={submitDescription}>Continue</p>
                    }
                </div>
            </div>
            <div className="creator_wrap_holder flex_show_row">
                <div className="project_gig_container">
                    <div className="gig_project_body shadow">
                        <div className="gig_project_header under_line">
                            <p>Project Description</p>
                        </div>
                        <div className="project_summary">
                            <div className="project_description_header">
                                <p>Project Summary</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit nec </p>
                            </div>
                            <div className="project_summary_wrapper form_border">
                                <textarea value={gig.description} name="description" onChange={handleDecription} id="" cols="30" rows="10"></textarea>
                            </div>
                            <DescriptionUpdate />
                            {gigFaq.length !== 0 && gigFaq.map((data, i)=> {
                                return(<ProjectFaq deleteAction={deleteAction} key={i} data={data} i={i} />)})
                                }
                        </div>
                        <div className="project_submit flex_show_row">
                            <p>Save as Draft</p>
                            {
                                progress == true ? <p className="loader"><img src="svg/white-loading.svg" /></p>:
                                <p onClick={submitDescription}>Continue</p>
                            }
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

export default Description;