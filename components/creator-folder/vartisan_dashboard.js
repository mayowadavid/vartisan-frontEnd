import { useQuery } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../context/mainContext';
import { clean } from '../functions/functions';


const VartisanDashboard = () => {
    const { 
        createHandler, 
        gig, 
        setGig, 
        findAllUserGig
     } = useContext(MainContext);
     const [userGig, setUserGig] = useState([]);
    
     useEffect(async()=> {
        const {data, error} = await findAllUserGig();
        if(data){
            setUserGig(data.findAllUserGig);
            }
     }, [])
    

    const handleSingleGig = async(e, id) => {
       e.preventDefault();
       let result = await userGig.find((data)=> data.id === id);
      let value = await clean({...result});
       setGig({...gig, ...value});
       createHandler();
    }
    
    
    return (
        <div className="gig_mobile_scroll">
                <div className="creator_gig_wrapper">
                    <div className="creator_gig_tab">
                        <div className="creator_gig_holder">
                            <p id="selected_tab">Active</p>
                            <p>Pending</p>
                            <p>Drafts</p>
                            <p>Paused</p>
                        </div>
                        <div className="creator_gig_button">
                            <p onClick={createHandler}>Create new project</p>
                        </div>
                    </div>
                    <div className="creator_gig_counter">
                        <p>Active Project 4</p>
                    </div>
                    <div className="creator_gig_header">
                        <div className="creator_checkbox">
                            <input type="checkbox" />
                        </div>
                        <div className="creator_project_content creator_gig_header_paragraph">
                            <p>Project name</p>
                        </div>
                        <div className="creator_project_impression creator_gig_header_paragraph">
                            <p>Total Impression</p>
                        </div>
                        <div className="creator_project_click creator_gig_header_paragraph">
                            <p>Clicks</p>
                        </div>
                        <div className="creator_project_order creator_gig_header_paragraph">
                            <p>Order</p>
                        </div>
                        <div className="creator_cancelled_order creator_gig_header_paragraph">
                            <p>Cancel Order</p>
                        </div>
                        <div className="creator_order_action creator_gig_header_paragraph">
                            <p>Action</p>
                        </div>
                    </div>
                    <div className="creator_gig_body">
                        {userGig.length !== 0 && userGig.map((data, i) => {
                            const {category, name, id, gig, gigGallery, order} = data;
                            return (
                            <div key={i} onClick={(e)=> handleSingleGig(e, id)} className="creator_gig_row">
                                <div className="creator_checkbox">
                                    <input type="checkbox" />
                                </div>
                                <div className="creator_project_content">
                                    <div className="creator_project_content_image">
                                    <img src={gigGallery?.length > 0 ? gigGallery[0]?.file[0].image : "../../svg/no_caption.svg"} alt=""/>
                                    </div>
                                    <div className="creator_project_content_details">
                                        <p>{name}</p>
                                        <p>{category?.name}</p>
                                    </div>
                                </div>
                                <div className="creator_project_impression">
                                    <p>0</p>
                                </div>
                                <div className="creator_project_click">
                                    <p>0</p>
                                </div>
                                <div className="creator_project_order">
                                    <p>{(order !== null && order?.length) > 0 ? order.length : 0}</p>
                                </div>
                                <div className="creator_cancelled_order">
                                    <p>0</p>
                                </div>
                                <div className="creator_order_action">
                                    <div className="creator_order_action_image">
                                        <img src="../../svg/more_horizontal.svg" alt=""/>
                                    </div>
                                </div>
                            </div>);
                        })}
                    </div>
                </div>
        </div>
    );
}

export default VartisanDashboard;