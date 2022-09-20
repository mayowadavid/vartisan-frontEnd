import { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/mainContext";
import {useRouter} from 'next/router';


const ChatMessagePop = ({sellerData}) => {
    const router = useRouter();
    const {userName} = router;
    const { 
        createMessage, 
        chatId, 
        createChat,
        openMessagePopUp, 
        setOpenMessagePopUp,
        fetchChatExistence,
        userData,
        setChatId
     } = useContext(MainContext);

    const initialState = {
        date: '',
        time: '',
        description: '',
        userId: '',
        file: []
    }

    console.log(userData);

    useEffect(async()=>{
     if(userData.id !== '' ) { 
        try {
            const { data, error } = await fetchChatExistence({
                variables: {
                    userChatInput: {
                        receiverId: userData.id,
                    }
                }
        });
        console.log(data);
            await data !== undefined && setChatId(data.findChatByExistence.id);
        }
        catch(error) {
            await error !== undefined && console.log(error);
        }}
    }, [userData])

    console.log(chatId);
    const [message, setMessage] = useState(initialState);
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

    const closePop = (e) => {
        e.preventDefault();
        setOpenMessagePopUp(!openMessagePopUp);
    }

    const submitMessage = async(e) => {
        e.preventDefault();
        if(chatId !== undefined){
            const {data, error} = await createMessage({
                variables: {
                    messageInput: {
                        chatId: chatId,
                        description: message.description,
                        date: message.date,
                        time: message.time,
                    }
                }
            });
        setMessage(initialState); 
        setOpenMessagePopUp(!openMessagePopUp);
        } else if (sellerData !== undefined) {
                const {data: chatData, error: chatError} = await createChat({
                    variables: {
                        chatInput: {
                            receiverId: sellerData?.user?.id
                        }
                    }
                });
                console.log('error');
                const newId = await chatData?.createChat.id;
                await console.log(newId);

                const {data, error} = await createMessage({
                    variables: {
                        messageInput: {
                            chatId: newId,
                            description: message.description,
                            date: message.date,
                            time: message.time,
                        }
                    }
                })
        } else {
            const {data: chatData, error: chatError} = await createChat({
                variables: {
                    chatInput: {
                        receiverId: userData.id
                    }
                }
            });
            console.log('error');
            const newId = await chatData?.createChat.id;
            await console.log(newId);

            const {data, error} = await createMessage({
                variables: {
                    messageInput: {
                        chatId: newId,
                        description: message.description,
                        date: message.date,
                        time: message.time,
                    }
                }
            })
        }
        setMessage(initialState);
        setOpenMessagePopUp(!openMessagePopUp);
    }
    return (
        <div className="message_pop_up">
        <div className="chat_message_wrap">
            <div className="chat_message_header flex_show_row">
                <div className="chat_message_header_content remove_margin">
                    <p>Send a message</p>
                </div>
                <div onClick={closePop} className="cancel_chat_message flex_show_row">
                    <img src="../../svg/close_small.svg" alt=""/>
                </div>
            </div>
            <div className="chat_message_body_wrap flex_show_row">
                <div className="chat_message_seller_details">
                    <div className="seller_details_wrap under_line">
                        <div className="chat_seller_avatar flex_show_row">
                            <img src="../../img/category.png" alt=""/>
                        </div>
                        <p>{userName}</p>
                    </div>
                    <div className="chat_seller_message">
                        <p>please include</p>
                        <ul>
                            <li>Project description</li>
                            <li>Project instructions</li>
                            <li>Relevant files</li>
                            <li>Your budget</li>
                        </ul>
                    </div>
                </div>
                <div className="chat_message_client_input flex_show_column">
                    <form onSubmit={submitMessage}>
                        <div className="chat_message_input">
                            <textarea type="text" onChange={handleChange} name="description" id="" />
                        </div>
                        <div className="chat_message_submit remove_margin">
                            <p onClick={submitMessage}>Submit</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ChatMessagePop;