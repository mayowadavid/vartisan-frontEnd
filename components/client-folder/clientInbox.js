import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/mainContext'
import Footer from '../general-folder/footer'
import ClientHeader from './clientHeader'
import ClientMobileHeader from './clientMobileHeader'
import {useRouter} from 'next/router'
import axios from 'axios'
import Pusher from 'pusher-js';

const ClientInbox = () => {
    const { fetchChatByUser, createMessage } = useContext(MainContext);
    const [allChat, setAllChat] = useState([]);
    const [index, setIndex] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);
    const chatState = {
        id: '',
        message: [],
        receiver: {},
        sender: {},
        senderId: '',
        receiverId: '',
    }
    const [selectedChat, setSelectedChat] = useState(chatState);
    const router = useRouter();
    const { userName } = router.query;

    const initialState = {
    date: '',
    time: '',
    description: '',
    userId: '',
    file: []
    }

    const [message, setMessage] = useState(initialState);
    const [temporaryImage, setTemporaryImage] = useState([]);

    const selector = {
        contact: true,
        inbox: false
    }

    useEffect(async()=>{
        let mounted = true;

        if(selectedChat !== undefined && mounted == true)
        {
        const pusher = new Pusher(`${process.env.NEXT_PUBLIC_key}`, {
        cluster: 'mt1'
        });
        const chatId = selectedChat.id;
        const channel = pusher.subscribe(`${chatId}`);
        await channel.bind('message', function(data) {
            const copy = {...selectedChat};
            copy.message = [...copy.message, data];
            setSelectedChat(copy);
          });
        }
        return (()=>{
            pusher.unsubscribe(`${selectedChat.id}`);
            mounted = false;
        })
    }, [selectedChat])
    
    const [hide, setHide] = useState(selector);

useEffect(async()=>{
    const {data, error} = await fetchChatByUser();
    if(data){
        const {chatsByUser} = data;
        setAllChat(chatsByUser);
    }
}, [message]);

useEffect(()=>{
    if(allChat.length > 0){
        const currentUser = allChat[index];
        setSelectedChat({...selectedChat, ...currentUser});
    }
}, [allChat, index])
useEffect(()=>{
    if(selectedChat !== undefined){
        const currentIndex = selectedChat?.message?.length - 1;
        setMessageIndex(currentIndex);
    }
}, [selectedChat])
console.log(selectedChat);
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

    const uploadFiles = (datum, data, headers, chatId) => {
        for (let x = 0; x < data.length; x++){
            const file = data[x];
            const time = datum.time;
            const date = datum.date;
            let formData = new FormData();
            formData.append('file', file[0]);
            formData.append('chatId', chatId);
            formData.append('date', date);
            formData.append('time', time);
            formData.append('messageId', messageId);
            axios.post(`${process.env.NEXT_PUBLIC_url}/messages/imageUpload`, 
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
            axios.post(`${process.env.NEXT_PUBLIC_url}/messages/imageUpload`, 
            formData, {headers}).then((dat)=> console.log(dat))
            .catch((error)=> console.log(error));
        } 
    }
    const sortArray = (data) => {
        let newData = data !== undefined && [...data];
        if(newData?.length > 0 ){newData?.sort((x, y) => x?.time - y?.time)
        return newData;}
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const chatId = selectedChat.id;
        let userMessage;
        if(message.description !== ''){
            const {data, error} = await createMessage({
            variables: {
                messageInput: {
                    chatId,
                    description: message.description,
                    date: message.date,
                    time: message.time,
                }
            }
        });
        // axios.post('https://backend-393j.onrender.com/messages/message', {
        //     userName,
        //     message: message.description,
        // }).then((dat)=> console.log(dat))
        // .catch((error)=> console.log(error));
        userMessage = await data.createMessage;
        const token = await localStorage.getItem('token');
        const headers = {authorization: token ? `Bearer ${JSON.parse(token)}` : ""}
        message.file.length > 0 && updateMessageFiles(userMessage, message.file, headers);
        await setMessage(initialState);
    } else {
        const token = await localStorage.getItem('token');
        const headers = {authorization: token ? `Bearer ${JSON.parse(token)}` : "",}
        await uploadFiles(message, message.file, headers, selectedChat.id);
        await setMessage(initialState);
        const {data: chatData, error: chatError} = await fetchChatByUser();
        const {chatsByUser} = await chatData;
        await setAllChat(chatsByUser);
    }
    }

    const handleMobile = (e) => {
        e.preventDefault();
        const {contact, inbox} = hide;
        setHide({contact: !contact, inbox: !inbox});
    }

    const changeChat = (e, i) => {
        e.preventDefault();
        setIndex(i);
    }

    const removeFile = (e, d) => {
        e.preventDefault();
        const filtered = temporaryImage.filter((data, i)=> i !== d);
        setTemporaryImage(filtered);
    }


    const ClientContact = ({d, userName, i})=> {
        const {sender, receiver, message, id} = d;
        return (
            <div key ={i} onClick={(e)=> changeChat(e, i)} className="client_contact_list">
                <div className="individual_contact" onClick={handleMobile}>
                    <div className="individual_contact_row">
                        <div className="individual_avatar_holder flex_show_row">
                            <img src={sender?.userName == userName ?
                             receiver?.profile?.file?.image:
                              sender?.profile?.file !== null?
                              sender?.profile?.file?.image :
                              "../../svg/avatar.png"} alt=""/>
                        </div>
                        <div className="individual_contact_title">
                            <p>{ sender?.userName == userName ? receiver?.userName : sender?.userName }</p>
                            <p>{ message[message?.length - 1]?.description}</p>
                        </div>
                    </div>
                    <div className="individual_last_date">
                        <p>{new Date(parseInt(message[message?.length - 1]?.time)).getHours() + ':' + new Date(parseInt(message[message?.length - 1]?.time)).getMinutes()}</p>
                    </div>
                </div>
            </div>
        )
    } 

  return (
    <div>
    <ClientHeader />
    <ClientMobileHeader />
    <div className="client_inbox_wrapper">
            <div className="client_inbox_body">
                <div className={`client_contacts ${hide.contact !== true && "hidden_contact"}`}>
                    <div className="client_contact_header">
                        <div className="conversation_filter">
                            <div className="conversation_filter_by">
                                <p>All Conversation</p> <img src="../../img/Arrow - Down 2.png" alt=""/>
                            </div>
                        </div>
                        <div className="client_search">
                            <img src="../../img/Search.png" alt=""/>
                        </div>
                    </div>
                    {
                        allChat?.length >= 0 && allChat?.map((d, i)=> <ClientContact key={i} d={d} userName={userName} i={i} />)
                    }
                </div>
                <div className={`client_inbox ${hide.inbox !== true && "hidden_inbox"}`}>
                    <div className="client_inbox_header">
                        <div onClick={handleMobile} className='back_arrow'>
                            <img src="../../img/arrow_left.jpg" />
                        </div>
                        <div className="client_inbox_header_details">
                            <p>{selectedChat?.sender.userName == userName ? selectedChat?.receiver?.userName : selectedChat?.sender?.userName}</p>
                            <p>{`Local time ${months[new Date().getMonth()]+ ' ' + new Date().getDate() + ', ' +  new Date().getHours() + ':' + new Date().getMinutes()}`}</p>
                        </div>
                        <div className="client_inbox_search">
                            <img src="../../img/Search.png" alt=""/>
                            <input type="text" placeholder="Search Conversation"/>
                        </div>
                        <div className="client_inbox_more">
                            <img src="../../svg/more_horizontal.svg" alt=""/>
                        </div>
                    </div>
                    <div className="client_inbox_chat_body">
                        {
                            selectedChat?.message?.length > 0 && sortArray(selectedChat?.message)?.map(({ date, description, time, user, file }, i)=>{
                                const currentTime = parseInt(time);
                                const hours = new Date(currentTime).getHours() + ':' + new Date(currentTime).getMinutes()
                            
                                return(
                                    <div key={i} className="individual_messsage_container">
                                        <div className="individual_message">
                                            <div className="individual_message_row">
                                                <div className="message_avatar">
                                                    <img src={user?.profile?.file?.image !== undefined ? user?.profile?.file?.image :"../../svg/avatar.png"} alt="../../svg/avatar.png" />
                                                </div>
                                                <div className="message_details">
                                                    <p>{user?.userName == userName ? "Me": user?.userName}</p>
                                                    <p>{description}</p>
                                                </div>
                                            </div>
                                            <div className="message_time">
                                                <p>{hours}</p>
                                            </div>
                                        </div>
                                        {(file !== null) && (file.map(({name, image, video}, i)=> {
                                            return(
                                                <div key={i} className="individual_file">
                                                    <div className="individual_file_container">
                                                        <div className="individual_file_header">
                                                            <img src="../../svg/image_alt.svg" alt=""/>
                                                            <p>{name}</p>
                                                        </div>
                                                        <div className="individual_file_wrapper">
                                                            <div className="file_download_icon flex_show_row">
                                                                <img src="../../svg/download.svg" alt=""/>
                                                            </div>
                                                            {image !== null && (<img src={image} alt=""/>)}
                                                            {video !== null && (<video width="750" height="500" controls >
                                                                <source src={video} type="video/mp4"/>
                                                            </video>)}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }))}
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
                    <div className="client_inbox_chat_footer">
                        <div className="chat_inbox_input">
                            <input onChange={handleChange} type="text" value={message.description} name="description" placeholder="write your message here"/>
                            <div className="chat_submit">
                                <p onClick={handleSubmit} >Send</p>
                            </div>
                        </div>
                        <div className="chat_attachments">
                            <input type='file' onChange={handleFile} id="file"/>
                            <div className="chat_link">
                                <label htmlFor="file">
                                <img src="../../svg/link_02.svg" alt=""/>
                                </label>
                            </div>
                            <div className="chat_emoji">
                                <img src="../../svg/emoji.svg" alt=""/>
                            </div>
                            <div className="chat_report remove_margin">
                                <p>Report</p>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    <Footer />
    </div>
  )
}

export default ClientInbox;