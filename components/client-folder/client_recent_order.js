import React, { useContext, useState, useEffect } from 'react'
import { MainContext } from '../context/mainContext'
import {useRouter} from 'next/router'

const ClientRecentOrder = () => {
    const { fetchClientOrders } = useContext(MainContext);
    const router = useRouter();
    const { userName } = router.query;

    const [clientOrder, setClientOrder] = useState();

    useEffect(async()=>{
       if( userName !== undefined ){
    const {data, error} = await fetchClientOrders();
       await setClientOrder([...data.findClientOrder]);
    }
    }, [userName])

    const handleClick = (e, data) => {
        e.preventDefault();
        router.replace(`/${userName}/manage_orders/${data.id}`);
    }

  return (
    <div>
        <div className="recent_order_switch flex_show_row remove_margin">
                    <div className="switch_active flex_show_row">
                        <div className="switch_control"></div>
                    </div>
                    <p>Show on profile</p>
                </div>
                {
                    clientOrder !== undefined && clientOrder?.map((data)=>{
                        return(
                            <div className="client_recent_orders_card flex_show_row">
                                <div className="recent_order_image">
                                    <img src={data?.gigImage !== undefined ? data.gigImage : "img/category5.png"} alt=""/>
                                </div>
                                <div className="recent_order_content remove_margin">
                                    <p>{data?.name}</p>
                                    <div className="seller_recent_name remove_margin flex_show_row">
                                        <img src="img/category5.png" alt=""/>
                                        <p>{data?.client?.userName}</p>
                                    </div>
                                </div>
                                <div className="recommend_project remove_margin flex_show_row">
                                    <img src="svg/thumb_up.svg" alt=""/>
                                    <p>Recommend</p>
                                </div>
                                <div className="project_budget remove_margin">
                                    <p>{`$${data?.amount}`}</p>
                                </div>
                                <div className="project_card_button remove_margin">
                                    <p onClick={(e)=> handleClick(e, data)}>View</p>
                                </div>
                            </div>
                        )
                    })
                }
    </div>
  )
}

export default ClientRecentOrder;