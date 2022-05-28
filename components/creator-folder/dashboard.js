import React, { useContext, useState, useEffect } from 'react'
import Sidebar from './sidebar'
import VartisanHeader from './vartisanHeader'
import VartisanMobileHeader from './vartisanMobileHeader'
import { MainContext } from '../../components/context/mainContext'
import {useRouter} from 'next/router'

const Dashboard = () => {
   const { 
       fetchVartisanOrders, 
       setChangeState, 
       vartisanState, 
       findAllUserGig,
       userProfile,
     } = useContext(MainContext);
   const router = useRouter();
   const { userName } = router.query;
   const [vartisanOrder, setVartisanOrder] = useState();
   const [otherGig, setOtherGig] = useState([]);
   const [activeGig, setActiveGig] = useState(0);
   const [completeOrder, setCompleteOrder] = useState(0);
   const [activeOrder, setActiveOrder] = useState(0);

    useEffect(async()=>{
       if( userName !== undefined ){
    const {data, error} = await fetchVartisanOrders();
       await setVartisanOrder([...data.findSellerOrder]);
       const orderData = data !== undefined && data.findSellerOrder.filter((d)=> d.status == 'completed');
       orderData !== false && setCompleteOrder(orderData.length);
       const newOrderData = data !== undefined && data.findSellerOrder.filter((d)=> d.status == 'active');
       newOrderData !== false && setActiveOrder(newOrderData.length);
    }
    }, [userName])

    useEffect(()=> {
        setChangeState({...vartisanState, dashboard: true});
    }, [])

    useEffect(async ()=>{
        const {data: userGig, error: userError} = await findAllUserGig();
        const available = userGig !== undefined && userGig?.findAllUserGig.filter((d)=> d.status == 'active');
        available !== undefined ? setActiveGig(available.length) : setActiveGig(activeGig);
        if(!userGig && userGig.findAllUserGig.length >= 4){
            const result = [];
            const size = 4;
            for(let i = 0; i < userGig.findAllUserGig.length; i += size ){
                const chunk = userGig.findAllUserGig.slice(i, i + size);
                result.push(chunk);
            }
            setOtherGig(result[0]);
        } else {
            setOtherGig(userGig.findAllUserGig);
        }
        
    }, [])

    const handleClick = (e, data) => {
        e.preventDefault();
        router.replace(`/${userName}/manage_orders/${data.id}`);
    }
  return (
    <div className="dashboard_wrapper">
        <Sidebar />
        <div className="admin_content">
            <VartisanHeader />
            <VartisanMobileHeader />
            <div className="admin_body">
                <div className="admin_container">
                    <div className="creator_panel">
                        <div className="creator_avatar">
                            <div className="avatar_image">
                                <div>
                                    <span className="indicator online"></span>
                                </div>
                                <img src={userProfile?.file !== null? userProfile?.file?.image: "svg/avatar.svg"} alt=""/>
                            </div>
                            <div className="avatar_content">
                                <p>{ userName }</p>
                                <p>Top Creator</p>
                            </div>
                            <div className='contact-vartisan remove_margin'>
                                <p>Get Quote</p>
                                <p>Contact Me</p>
                            </div>
                        </div>
                        <div className="creator_container">
                            <div className="creator_body">
                                <h5>Achievements</h5>
                            </div>
                            <div className='achievement_hold'>
                                <div className="creator_achievement">
                                    <div className="creator_award">
                                        <div className="hexagon"></div>
                                        <div className="achievement_image">
                                                <img src="../../img/trophy.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="creator_content">
                                        <p>Top Creator</p>
                                        <p> Since 2020 - Presents</p>
                                    </div>
                                </div>
                                <div className="creator_achievement">
                                    <div className="creator_award">
                                            <div className="hexagon"></div>
                                            <div className="achievement_image">
                                                    <img src="../../img/received.png" alt=""/>
                                            </div>
                                    </div>
                                    <div className="creator_content">
                                        <p>Five Orders</p>
                                        <p>Mostly get five order</p>
                                    </div>
                                </div>
                                <div className="creator_achievement">
                                    <div className="creator_award">
                                            <div className="hexagon"></div>
                                            <div className="achievement_image">
                                                    <img src="../../img/received 1.png" alt=""/>
                                            </div>
                                    </div>
                                    <div className="creator_content">
                                        <p>Five Orders</p>
                                        <p>Mostly get five orders</p>
                                    </div>
                                </div>
                            </div>
                            <div className="creator_action">
                                    <p>See more</p>
                            </div>
                            <div className="creator_descriptions">
                                <p>Description</p>
                                <p dangerouslySetInnerHTML={{__html: userProfile.description}} />
                            </div>
                        </div>
                    </div>
                    <div className="panel_board">
                        <div className="board_showcase">
                            <div className="board_wrapper">
                                <div className="performance_card">
                                    <p>Active projects</p>
                                    <p>{activeGig}</p>
                                    <p>View</p>
                                </div>
                                <div className="performance_card">
                                    <p>Complete Order</p>
                                    <p>{completeOrder}</p>
                                    <p>View</p>
                                </div>
                                <div className="performance_card">
                                    <p>New Request</p>
                                    <p>{activeOrder}</p>
                                    <p>View</p>
                                </div>
                                <div className="performance_card">
                                    <p>Earned in October</p>
                                    <p>$144.99</p>
                                    <p>View</p>
                                </div>
                                <div className="performance_card">
                                    <p>wallet amount</p>
                                    <p>$1124.99</p>
                                    <p>View</p>
                                </div>
                            </div>
                        </div>
                        <div className="due_project_header">
                            <p>Project Deadline</p>
                            <p>See all</p>
                        </div>
                        <div className="gig_table_header">
                            <div className="project_name_header">
                                <p>Project name</p>
                            </div>
                            <div className="order_by">
                                <p>Order by</p>
                            </div>
                            <div className="project_price">
                                <p>Price</p>
                            </div>
                            <div className="project_time">
                                <p>Delivery Time</p>
                            </div>
                        </div>
                        <div className="gig_table">
                            {
                                vartisanOrder !== undefined && vartisanOrder.map(
                                    (data, i) => {
                                        return (
                                            <div key={i} className="gig_table_row">
                                                <div className="gig_card_wrapper">
                                                    <div className="gig_card_image">
                                                        <img src={data?.gigImage !== undefined? data?.gigImage :"../../img/gig_avatar.png"} alt=""/>
                                                    </div>
                                                    <div className="gig_card_content">
                                                        <p>{data?.name}</p>
                                                        <p>Basic Package</p>
                                                    </div>
                                                </div>
                                                <div className="gig_order_details">
                                                    <div className="gig_order_image">
                                                        <img src="../../img/gig_avatar.png" alt=""/>
                                                    </div>
                                                    <div className="gig_order_content">
                                                        <p>{data?.client?.userName}</p>
                                                    </div>
                                                </div>
                                                <div className="gig_order_price">
                                                    <p>{`$${data.amount}`}</p>
                                                </div>
                                                <div className="gig_time">
                                                    <p>4h 18m Left</p>
                                                </div>
                                                <div className="gig_view">
                                                    <p onClick={(e)=> handleClick(e, data)}>View</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                        {
                        otherGig !== undefined && 
                        (<div className="gig_table_container">
                            <div className="active_gig_header">
                                <p>Active Project</p>
                                <p>See all</p>
                            </div>
                            {otherGig !== undefined && otherGig.map((d)=>{
                                    return(
                                        <div className="active_gig_card">
                                            <div className="active_card_row">
                                                <div className="active_card">
                                                            <img src={d?.gigGallery[0]?.file[0]?.image !== undefined ? d?.gigGallery[0]?.file[0]?.image : "../../svg/no_caption.svg"} alt=""/>
                                                            <div className="active_content">
                                                                <div className="active_gig_image">
                                                                    <img src={d?.user?.profile?.file?.image !== undefined ? d?.user?.profile?.file?.image : "../../svg/no_caption.svg"} alt=""/>
                                                                </div>
                                                                <div className="active_gig_title">
                                                                    <p>{d?.user?.userName}</p>
                                                                    <p>{d?.category?.name}</p>
                                                                </div>
                                                                <div className="active_gig_price">
                                                                    <p>from</p>
                                                                    <p>{`$${d?.amount}`}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                            </div>) }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard