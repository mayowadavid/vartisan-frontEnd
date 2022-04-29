import React, { useContext, useState, useEffect } from 'react'
import {useRouter} from 'next/router';
import { MainContext } from '../context/mainContext'

const ClientOrderOverview = () => {
    const router = useRouter()
    const { userName, activity } = router.query;
    console.log(router.query);
    const {
        order, 
        setOrder, 
        fetchSingleOrder,
        updateOrder,
        createMessage
    } = useContext(MainContext);
    const initialState = {
        date: '',
        time: '',
        description: '',
        userId: '',
        file: []
    }
    useEffect(async()=>{
        if(activity !== undefined){
            const {data, error} = await fetchSingleOrder({
            variables: {
                orderId: activity
            }
        })
        await setOrder({...order, ...data.order});
    }
    }, [activity])
    console.log(order);
    const [message, setMessage] = useState(initialState);
    const [temporaryImage, setTemporaryImage] = useState();

    const handleChange = (e) => {
        e.preventDefault();
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        date.toString();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        time.toString();
        const { name, value } = e.target;
        setMessage({...message, date, time, [name]: value});
    }

    const handleFile = (e) => {
        e.preventDefault();
        const {files} = e.target;
        if(files){
            let selected = files[0];
            let types = ['image/jpeg', 'image/png'];
            let fileType = selected !== undefined ? types.includes(selected.type): setError("unsupported image type* accepted image jpg/png");
            let FileSize = "5000000";
            let filteredImageSize = fileType == true ? selected.size < FileSize : setError("file too large *5mb minimum"); 
            let hold = filteredImageSize == true && (URL.createObjectURL(selected)); 
            hold !== undefined && hold;
            setTemporaryImage(hold);
            //clone due to no direct manipulation
            // const temp = [...gigGallery];
            // temp[i] = {...temp[i], file: files};
            // gigGallery = [...temp];
            // setGig({...gig, gigGallery});
            URL.revokeObjectURL(selected);   
            }
        const {file} = message;
        file = [...file, files[0]];
        setMessage({...message, file});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data, error} = await createMessage({
            variables: {
                messageInput: {
                    orderId: activity,
                    description: message.description,
                    date: message.date,
                    time: message.time
                }
            }
        })
        await console.log(data);
        const { data: newData, error: newErr } = await fetchSingleOrder({
            variables: {
                orderId: activity
            }
        })
        await setOrder({...order, ...newData.order});
        setMessage(initialState);
    }

  return (
    <div className="client_order_body">
            <div className="client_body_wrapper order_submited_row  flex_show_row">
                <div className="client_order_left order_activity">
                    <div className="overview_header flex_show_row">
                        <div className="client_overview_wrapper remove_margin">
                            <p>Order Activity</p>
                            <p>Track your order activity with seller</p>
                        </div>
                        <div className="client_overview_activity flex_show_row">
                            <div className="client_overview_wrap remove_margin flex_show_row">
                                <p>Activity</p>
                                <img src="/svg/caret_down.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="order_overview_body">
                        <div className="order_creations flex_show_row">
                            <img src="/img/complete.png" alt=""/>
                            <p>Order created</p>
                            <p>{order?.date}</p>
                        </div>
                        <div className="order_creations flex_show_row">
                            <img src="/img/complete.png" alt=""/>
                            <p>You submitted the requirements</p>
                            <p>October 2, 2021</p>
                        </div>
                        <div className="order_accepted flex_show_row">
                            <img src="/img/complete.png" alt=""/>
                            <p>Your order was accepted</p>
                        </div>
                        {
                                order?.message?.map((data)=> {
                                    console.log(data.user);
                                    return(
                                        <div className="client_creator_comment">
                                        <div className="client_creator_header flex_show_row">
                                            <div className="client_creator_avatar">
                                                <img src="/img/category.png" alt=""/>
                                            </div>
                                            <div className="client_creator_content remove_margin">
                                                <p>{data?.user?.userName}, Delivered the order</p>
                                                <p>{data?.date}</p>
                                            </div>
                                        </div>
                                        <div className="client_creator_comment_body">
                                            <div className="delivery_chat_message">
                                                <p>{data.description}</p>
                                                <div className="chat_message_wrapper flex_show_row">
                                                    <div className="chat_message_image">
                                                        <img src="/img/category.png" alt=""/>
                                                        <div className="chat_delivery_image_wrap remove_margin flex_show_row">
                                                            <div className="chat_delivery_image chat_delivery_first flex_show_row">
                                                                <img src="/img/image_alt.png" alt=""/>
                                                                <p>Delivery design.jpg</p>
                                                            </div>
                                                            <div className="chat_delivery_image">
                                                                <img src="/svg/download.svg" alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="chat_message_files">
                                                        <div className="source_file remove_margin">
                                                            <p>Source files</p>
                                                            <div className="files_holder flex_show_row remove_margin">
                                                                <img src="/svg/file_blank_fill.svg" alt=""/>
                                                                <p>File name.rar</p>
                                                            </div>
                                                        </div>
                                                        <div className="other_file remove_margin">
                                                            <p>Other files</p>
                                                            <div className="files_holder flex_show_row remove_margin">
                                                                <img src="/svg/file_png.svg" alt=""/>
                                                                <p>Delivery design.png</p>
                                                            </div>
                                                            <div className="files_holder flex_show_row remove_margin">
                                                                <img src="/svg/file_jpg.svg" alt=""/>
                                                                <p>Delivery design.jpg</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        
                        <form onSubmit={handleSubmit}>
                        <div className="chat_submit_message remove_margin flex_show_row">
                            <input type="text" name="description" value={message.description} onChange={handleChange} placeholder="write your message here" id=""/>
                            <p onClick={handleSubmit}>Send</p>
                        </div>
                        </form>
                        <div className="chat_add_file_icon flex_show_row">
                            <div className="chat_file_icon">
                                <img src="/svg/link.svg" alt=""/>
                            </div>
                            <div className="chat_file_icon">
                                <img src="/svg/emoji.svg" alt=""/>
                            </div>
                            <div className="chat_file_icon">
                                <img src="/svg/Video.svg" alt=""/>
                            </div>
                            <div className="chat_extra_order remove_margin flex_show_row">
                                <img src="/svg/plus_circle_outline.svg" alt=""/>
                                <p>Add extra order</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="client_order_right">
                    <div className="client_order_summary remove_margin">
                        <div className="price_summary_wrap flex_show_row remove_margin">
                        <div className="price_summary_header flex_show_row">
                            <img src="/img/category.png" alt=""/>
                            <div className="price_summary_header_content remove_margin">
                                <p>{order?.name}</p>
                                <p>{order?.category}</p>
                            </div>
                        </div>
                        </div>
                        <div className="price_final_total_wrap">
                            <div className="price_total remove_margin flex_show_row">
                                <p>Total</p>
                                <p>{`$${order?.amount * order?.quantity}`}</p>
                            </div>
                            <div className="delivery_time remove_margin flex_show_row">
                                <p>Delivery time</p>
                                <p>{order?.end}</p>
                            </div>
                            <div className="delivery_time remove_margin flex_show_row">
                                <p>Revisions</p>
                                <p>{order?.revision}</p>
                            </div>
                            <div className="orderId remove_margin flex_show_row">
                                <p>Order ID</p>
                                <p>{order?.id}</p>
                            </div>
                            <div className="orderStatus remove_margin flex_show_row">
                                <p>Order status</p>
                                <p>{order?.orderStatus}</p>
                            </div>
                            <div className="project_actions_button flex_show_column remove_margin">
                                <div className="project_actions remove_margin">
                                    <p>Contact Vartisan</p>
                                </div>
                                <div className="project_actions remove_margin">
                                    <p>Approve Delivery</p>
                                </div>
                                <div className="project_actions remove_margin">
                                    <p>Request Revision</p>
                                </div>
                                <div className="project_actions remove_margin">
                                    <p>Cancel Order</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ClientOrderOverview