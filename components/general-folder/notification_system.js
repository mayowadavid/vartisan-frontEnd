import React, { useContext, useEffect, useState } from 'react'
import ClientHeader from '../client-folder/clientHeader'
import ClientMobileHeader from '../client-folder/clientMobileHeader'
import Pusher from 'pusher-js';
import { MainContext } from '../context/mainContext';

const NotificationSystem = () => {
    const {userProfile, findUserNotification} = useContext(MainContext);
    const [allNotification, setAllNotification] = useState([]);
    const [recentNotification, setRecentNotification] = useState([]);
    useEffect(async()=>{
        let mounted = true;

        if(userProfile.user !== undefined){
        const {user} = userProfile;
        const pusher = new Pusher(`${process.env.NEXT_PUBLIC_key}`, {
        cluster: 'mt1'
        });
        const userId = user.id;
        const channel = pusher.subscribe(`${userId}`);
        await channel.bind('notification', function(data) {
            console.log(data);
            const copy = [...allNotification];
            copy = [...copy, data];
            setRecentNotification(copy);
          });}

        return (()=>{
            pusher.unsubscribe(`${selectedChat.id}`);
            mounted = false;
        })
    }, [userProfile])

    useEffect(async()=>{
    const {data, error} = await findUserNotification();
    setAllNotification(data.findUserNotification);
    }, [])

    console.log(allNotification.length);
  return (
    <div className='overall_notification'>
      <ClientHeader />
      <ClientMobileHeader />
        <div className='notificationWrap'>
            <div className='recentNotification flex_show_col'>
                {recentNotification.length > 0 && (
                <div className='notifcationHead remove_margin border'>
                    <p>Recent Notifications</p>
                </div>)}
                {recentNotification.length > 0 && recentNotification.map(({description})=>
                {
                    return (<div key={i} className='notifcation_row border flex_show_row'>
                            <div className='notification_no_action flex_show_row'>
                                <div className='icon_section'>
                                    <img src='/svg/notifcationFull.svg' />
                                </div>
                                <div className='notification_mesage remove_margin'>
                                    <p>{description}</p>
                                    <p>7:38 Am</p>
                                </div>
                            </div>
                            <div className='notification_action flex_show_row'>
                                <div className='notification_button remove_margin'>
                                    <p>Open</p>
                                </div>
                                <div className='notification_close'>
                                    <img src="/svg/close_small.svg" />
                                </div>
                            </div>
                        </div>)
                })}
            </div>
            <div className='earlierNotification'>
            <div className='notifcationHead remove_margin border'>
                    <p>Earlier Notifications</p>
            </div>
            {
                allNotification.length > 0 && allNotification.map(({description}, i)=> {
                    
                    return (<div key={i} className='notifcation_row border flex_show_row'>
                            <div className='notification_no_action flex_show_row'>
                                <div className='icon_section'>
                                    <img src='/svg/notifcationFull.svg' />
                                </div>
                                <div className='notification_mesage remove_margin'>
                                    <p>{description}</p>
                                    <p>7:38 Am</p>
                                </div>
                            </div>
                            <div className='notification_action flex_show_row'>
                                <div className='notification_button remove_margin'>
                                    <p>Open</p>
                                </div>
                                <div className='notification_close'>
                                    <img src="/svg/close_small.svg" />
                                </div>
                            </div>
                        </div>)
                })
            }
            {allNotification.length == 0 && 
               <div className='notification_empty flex_show_row'>
               <p>There are no notification at the moment</p> 
               </div>
            }
            </div> 
        </div>
    </div>
  )
}

export default NotificationSystem