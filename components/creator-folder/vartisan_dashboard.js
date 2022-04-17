import { useQuery } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../context/mainContext';
import { clean } from '../functions/functions';
import { GET_ALL_QUERY } from '../queries/gigs/gig';

const VartisanDashboard = () => {
    const { createHandler, gig, setGig } = useContext(MainContext);
    const [allGig, setGetAllGig] = useState([]);
    

    const handleSingleGig = async(e, id) => {
       e.preventDefault();
       let result = await allGig.find((data)=> data.id === id);
      let value = await clean({...result});
       setGig({...gig, ...value});
       createHandler();
    }

    const {data, error} = useQuery(GET_ALL_QUERY, {
        onCompleted: (data) => {
            if(data){
            const { getAllgig } = data;
            setGetAllGig(getAllgig);
            }
        },
        onError: (data) => {
            console.log(data);
        }
    });
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
                        {allGig.length !== 0 && allGig.map((data, i) => {
                            const {category, name, id} = data;
                            return (
                            <div key={i} onClick={(e)=> handleSingleGig(e, id)} className="creator_gig_row">
                                <div className="creator_checkbox">
                                    <input type="checkbox" />
                                </div>
                                <div className="creator_project_content">
                                    <div className="creator_project_content_image">
                                        <img src="../img/category.png" alt=""/>
                                    </div>
                                    <div className="creator_project_content_details">
                                        <p>{name}</p>
                                        <p>{category.name}</p>
                                    </div>
                                </div>
                                <div className="creator_project_impression">
                                    <p>670</p>
                                </div>
                                <div className="creator_project_click">
                                    <p>50</p>
                                </div>
                                <div className="creator_project_order">
                                    <p>12</p>
                                </div>
                                <div className="creator_cancelled_order">
                                    <p>2</p>
                                </div>
                                <div className="creator_order_action">
                                    <div className="creator_order_action_image">
                                        <img src="../svg/more_horizontal.svg" alt=""/>
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