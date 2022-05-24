import React, { useContext, useState, useEffect } from 'react'
import {useRouter} from 'next/router';
import { MainContext } from '../context/mainContext'
import Pusher from 'pusher-js'

const ClientOrderOverview = () => {
    const router = useRouter()
    const { userName, activity } = router.query;
    const {
        order, 
        setOrder, 
        fetchSingleOrder,
        updateOrder,
        createMessage,
        openApprovePop, 
        setApprovePop,
        openDisputePop, 
        setDisputePop,
        openMessagePopUp, 
        setOpenMessagePopUp,
        setUserData,
        userData
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

    useEffect(async()=>{
        let mounted = true;

        if(mounted == true && order?.id !== '')
        {
        const pusher = new Pusher('7a5d084ba01736c92a64', {
        cluster: 'mt1'
        });
        const orderId = activity;
        const channel = pusher.subscribe(`${orderId}`);
        await channel.bind('message', function(data) {
            console.log(data);
            const copy = {...order};
            console.log(copy);
            copy.message = [...copy.message, data];
            setOrder(copy);
          });
        }
        return (()=>{
            pusher.unsubscribe(`${selectedChat.id}`);
            mounted = false;
        })
    }, [order])
    
    const [message, setMessage] = useState(initialState);
    const [temporaryImage, setTemporaryImage] = useState([]);
    const months = [
        'January', 
        'February', 
        'March', 
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
    ];

    const handleChange = (e) => {
        e.preventDefault();
        const today = new Date();
        const months = [
            'January', 
            'February', 
            'March', 
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
        ];
        const monthIndex = today.getMonth();
        const date = months[monthIndex] +'-'+today.getDate()+'-'+today.getFullYear();
        date.toString();
        const time = today.getTime().toString();
        const { name, value } = e.target;
        setMessage({...message, date, time, [name]: value});
    }
    const sortArray = (data) => {
        let newData = data !== undefined && [...data];
        if(newData?.length > 0 ){newData?.sort((x, y) => x?.time - y?.time)
        return newData;}
    }

    const uploadFiles = (datum, data, headers, orderId) => {
        for (let x = 0; x < data.length; x++){
            const file = data[x];
            const time = datum.time;
            const date = datum.date;
            let formData = new FormData();
            formData.append('file', file[0]);
            formData.append('orderId', orderId);
            formData.append('date', date);
            formData.append('time', time);
            formData.append('messageId', messageId);
            axios.post('https://backend-393j.onrender.com/messages/imageUpload', 
            formData, {headers}).then((dat)=> console.log(dat))
            .catch((error)=> console.log(error));
        } 
    }

    const updateMessageFiles = (datum, data, headers) => {
        for (let x = 0; x < data.length; x++){
            const file = data[x];
            const messageId = datum.id;
            let formData = new FormData();
            formData.append('file', file[0]);
            formData.append('messageId', messageId);
            axios.post('https://backend-393j.onrender.com/messages/imageUpload', 
            formData, {headers}).then((dat)=> console.log(dat))
            .catch((error)=> console.log(error));
        } 
    }

    const handleFile = (e) => {
        e.preventDefault();
        const {files} = e.target;
        if(files){
            let selected = files[0];
            let types = [
                'image/jpeg', 
                'image/png',
                'video/mpeg', 
                'video/mp4',
                'image/gif'
        ];
            let acceptedFile = selected !== undefined ? types.includes(selected.type): setError("unsupported image type* accepted image jpg/png");
            let FileSize = "5000000";
            let filteredImageSize = acceptedFile == true ? selected.size < FileSize : setError("file too large *5mb minimum"); 
            let hold = filteredImageSize == true && (URL.createObjectURL(selected)); 
            hold !== undefined && hold;
            console.log(files[[0]])
            let fileType;
            const imageType = [
                'image/jpeg',
                'image/png',
                'image/tiff',
                'image/svg+xml',
              ];
              const videoType = ['video/mpeg', 'video/mp4'];
              const documentType = [
                'application/msword',
                'application/gzip',
                'application/vnd.oasis.opendocument.text',
                'application/pdf',
                'application/vnd.ms-powerpoint',
                'application/vnd.rar',
                'video/mp2t',
                'text/plain',
                'application/zip',
                '	application/x-7z-compressed',
              ];
              const gifType = ['image/gif'];
              if (imageType.includes(files[0].type)) {
                fileType = 'image';
              } else if (videoType.includes(files[0].type)) {
                fileType = 'video';
              } else if (documentType.includes(files[0].type)) {
                fileType = 'document';
              } else if (gifType.includes(files[0].type)) {
                fileType = 'gif';
              }
            }
        setTemporaryImage([...temporaryImage, {file: hold, fileType}]);
        
        const {file} = message;
        file = [...file, files];
        setMessage({...message, file});
        URL.revokeObjectURL(selected);
    }

    const removeFile = (e, d) => {
        e.preventDefault();
        const filtered = temporaryImage.filter((data, i)=> i !== d);
        setTemporaryImage(filtered);
    }

    const handleApproveOrder = (e) => {
        e.preventDefault(); 
        const date = Date.now();
        if(activity !== undefined){
            const {data, error} = updateOrder({
                variables: {
                    orderUpdate: {
                        id: activity,
                        approveDate: date.toString(),
                        orderStatus: 'completed'
                    }
                }
            })
        data !== undefined && setApprovePop(!openApprovePop);
        }
    }

    const handleMessage = (e) => {
        e.preventDefault(); 
        const id = userName == order?.client?.userName ? order?.seller?.id : order?.client?.id
        setUserData({...userData, id});
        setOpenMessagePopUp(!openMessagePopUp);
    }

    const handleCancelOrder = (e) => {
        e.preventDefault();
        const date = Date.now();
        if(activity !== undefined){
            const {data, error} = updateOrder({
                variables: {
                    orderUpdate: {
                        id: activity,
                        approveDate: date.toString(),
                        orderStatus: 'cancelled'
                    }
                }
            })
        data !== undefined && setDisputePop(!openDisputePop);
        }
    }

    const handleRevision = (e) => {
        e.preventDefault();
        if(activity !== undefined){
            const {data, error} = updateOrder({
                variables: {
                    orderUpdate: {
                        id: activity,
                        orderStatus: 'revision'
                    }
                }
            })
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const orderId = order.id;
        let userMessage;
        if(message.description !== ''){
            const {data, error} = await createMessage({
                variables: {
                    messageInput: {
                        orderId: activity,
                        description: message.description,
                        date: message.date,
                        time: message.time,
                    }
                }
            });
            userMessage = await data.createMessage;
            const token = await localStorage.getItem('token');
            const headers = {authorization: token ? `Bearer ${JSON.parse(token)}` : ""}
            message.file.length > 0 && updateMessageFiles(userMessage, message.file, headers);
            await setMessage(initialState); 
         } else {
            const token = await localStorage.getItem('token');
            const headers = {authorization: token ? `Bearer ${JSON.parse(token)}` : "",}
            await uploadFiles(message, message.file, headers, order.id);
            await setMessage(initialState);
        }
    }
    const currentTime = parseInt(order?.date);
    const deliveryDay = months[new Date(currentTime).getMonth()] + ' ' + new Date(currentTime).getDate() + ',' + ' ' + new Date(currentTime).getFullYear();
    const requirementDate = parseInt(order?.orderRequirement?.date);
    const deliveryFormat = months[new Date(requirementDate).getMonth()] + ' ' + new Date(requirementDate).getDate() + ',' + ' ' + new Date(requirementDate).getFullYear();
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
                            <p>{deliveryDay}</p>
                        </div>
                        <div className="order_creations flex_show_row">
                            <img src="/img/complete.png" alt=""/>
                            <p>You submitted the requirements</p>
                            <p>{deliveryFormat}</p>
                        </div>
                        <div className="order_accepted flex_show_row">
                            <img src="/img/complete.png" alt=""/>
                            <p>Your order was accepted</p>
                        </div>
                        {
                             order?.message !== undefined && sortArray(order?.message)?.map((data, i)=> {
                                
                            
                                    return(
                                        <div key={i} className="client_creator_comment">
                                        <div className="client_creator_header flex_show_row">
                                            <div className="client_creator_avatar">
                                                <img src="/img/category.png" alt=""/>
                                            </div>
                                            <div className="client_creator_content remove_margin">
                                                <p>{data?.user?.userName == order.seller.userName ? `${data?.user?.userName}, delivered the order`: `${data?.user?.userName}, requested revision`}</p>
                                                <p>{data?.date}</p>
                                            </div>
                                        </div>
                                        <div className="client_creator_comment_body">
                                            <div className="delivery_chat_message">
                                                <p>{data.description}</p>
                                                {
                                                    data.file.length > 0 && date.file.map(({image, video, document, gif, name})=>{
                                                        <div className="chat_message_wrapper flex_show_row">
                                                            {image !== null &&
                                                            (<div className="chat_message_image">
                                                                <img src="/img/category.png" alt=""/>
                                                                <div className="chat_delivery_image_wrap remove_margin flex_show_row">
                                                                    <div className="chat_delivery_image chat_delivery_first flex_show_row">
                                                                        <img src={image} alt=""/>
                                                                        <p>{name}</p>
                                                                    </div>
                                                                    <div className="chat_delivery_image">
                                                                        <img src="/svg/download.svg" alt=""/>
                                                                    </div>
                                                                </div>
                                                            </div>)}
                                                            <div className="chat_message_files">
                                                                {document !== null &&
                                                                (<div className="source_file remove_margin">
                                                                    <p>Source files</p>
                                                                    <div className="files_holder flex_show_row remove_margin">
                                                                        <img src="/svg/file_blank_fill.svg" alt=""/>
                                                                        <p>{name}</p>
                                                                    </div>
                                                                </div>)}
                                                                <div className="other_file remove_margin">
                                                                    <p>Other files</p>
                                                                    {video !== null && 
                                                                    (<div className="files_holder flex_show_row remove_margin">
                                                                        <img src="/svg/file_png.svg" alt=""/>
                                                                        <p>{name}</p>
                                                                    </div>)}
                                                                    {gif !== null &&
                                                                    (<div className="files_holder flex_show_row remove_margin">
                                                                        <img src="/svg/file_jpg.svg" alt=""/>
                                                                        <p>{name}</p>
                                                                    </div>)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                    </div>
                    <form className="chat_footer_form" onSubmit={handleSubmit}>
                        {temporaryImage.length > 0 &&
                            
                            <div className="file_wrapper flex_show_row">
                            {
                            temporaryImage.map(({file, fileType}, i)=> {
                            return (
                            <div key={i} className="file_container">
                                <div onClick={(e)=> removeFile(e, i)} className="delete_file"><img src="../../svg/close_small.svg" /></div>
                            {fileType == 'image' && (<img src={file} />)}
                            {fileType == 'video' && (<video width="750" height="500" controls >
                                                            <source src={file} type="video/mp4"/>
                                                    </video>)}
                                </div>) })
                                }
                            </div>
                        }
                        <div className="chat_submit_message remove_margin flex_show_row">
                            <input type="text" name="description" value={message.description} onChange={handleChange} placeholder="write your message here" id=""/>
                            <p onClick={handleSubmit}>Send</p>
                        </div>
                        <div className="chat_add_file_icon flex_show_row">
                            <input type='file' onChange={handleFile} id="file"/>
                            <div className="chat_link flex_show_row">
                                <label htmlFor="file">
                                <img src="../../svg/link_02.svg" alt=""/>
                                </label>
                            </div>
                            <div className="chat_link flex_show_row">
                                <img src="/svg/emoji.svg" alt=""/>
                            </div>
                            <div className="chat_extra_order remove_margin flex_show_row">
                                <img src="/svg/plus_circle_outline.svg" alt=""/>
                                <p>Add extra order</p>
                            </div>
                        </div>
                        </form>
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
                                <div onClick={handleMessage} className="project_actions remove_margin">
                                    <p>{order?.client?.userName == userName ? 'Contact Vartisan': 'Contact Client'}</p>
                                </div>
                                {(order?.client?.userName == userName && order?.orderStatus !== 'completed') &&
                                (<>
                                <div onClick={handleApproveOrder} className="project_actions remove_margin">
                                    <p>Approve Delivery</p>
                                </div>
                                <div onClick={handleRevision} className="project_actions remove_margin">
                                    <p>Request Revision</p>
                                </div>
                                <div onClick={handleCancelOrder} className="project_actions remove_margin">
                                    <p>Cancel Order</p>
                                </div>
                                </>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ClientOrderOverview