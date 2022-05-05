import {useRouter} from 'next/router';
import { useContext, useEffect, useState } from 'react';
import {useLazyQuery} from '@apollo/client';
import Footer from '../../components/general-folder/footer';
import PrimaryHeader from '../../components/general-folder/primaryHeader'
import PrimaryMobileHeader from '../../components/general-folder/primaryMobileHeader';
import { FIND_GIG_BY_USER } from '../../components/queries/gigs/gig';
import VartisanPage from '../../components/creator-folder/vartisan-gig-page';
import ClientGigOrder from '../../components/client-folder/clientGigOrder';
import { MainContext } from '../../components/context/mainContext';
import ClientGigOrderRequirement from '../../components/client-folder/clientGigOrderRequirement';
import ClientGigPayment from '../../components/client-folder/clientGigPayment';
import SuccessModal from '../../components/client-folder/success_modal';
import ChatMessagePop from '../../components/client-folder/chatMessagePop';

const ProjectFile = () => {
    const router = useRouter();
    const { name, userName } = router.query;
    const [sellerData, setSellerData] = useState();
    const [vartisanGallery, setVartisanGallery] = useState([]);
    const {
        openOrderDetails,  
        openOrderRequirement,
        openSellerPage, 
        orderPayment, 
        openPopUp, 
        order,
        openMessagePopUp, 
        setOpenMessagePopUp
    } = useContext(MainContext);

    
    const [findUserGig, {data, error}] = useLazyQuery(FIND_GIG_BY_USER, {
        onCompleted: (data)=> {
            const {findGigByUser} = data;
            const clean = (obj) => {
                for (const prop in obj) {
                    if (obj[prop] === false || prop === '__typename' || prop === 'id') {
                      delete obj[prop];
                    }
                  }
                  return obj;
            }
            const galleryFormat = findGigByUser.gigGallery.map((data)=>{
                const {file} = data;
                return {image: file[0].image}
            })
            const copy = {...findGigByUser.gigFormat}
            const gigFormat = clean({...copy});
            setSellerData({...findGigByUser, gigFormat, galleryFormat});
        },
        onError: (error)=> {
            console.log(error)
        }
    });

    useEffect(()=>{
        if(name || userName !== undefined){
            let {data, error} = findUserGig({
                variables: {
                userData: {
                    name, 
                    userName
                }
               }})
        }
    }, [name, userName])
    
    return (
        <div className="Category_page_wrapper">
        {
            sellerData !== undefined && 
            ( (openMessagePopUp == true)  && <ChatMessagePop
            userName={userName}
            sellerData={sellerData} /> )
        }
        {
            sellerData !== undefined && 
            ( (openPopUp == true)  && <SuccessModal 
            order={order} 
            name={name} 
            userName={userName}
            router={router}
            sellerData={sellerData} /> )
        }
        {
            sellerData !== undefined && 
            ( (openOrderRequirement == true)  && <ClientGigOrderRequirement sellerData={sellerData} /> )
        }
        <PrimaryHeader />
        <PrimaryMobileHeader />
        
        {
            sellerData !== undefined && 
            ( (openSellerPage == true)  && <VartisanPage sellerData={sellerData} /> )
        
        }

        {
            sellerData !== undefined && 
            ( (openOrderDetails == true)  && <ClientGigOrder sellerData={sellerData} />)
        
        }  

        {
            sellerData !== undefined && 
            ( (orderPayment == true)  && <ClientGigPayment sellerData={sellerData} /> )
        
        } 

        <Footer />
        </div>
      )
}

export default ProjectFile;