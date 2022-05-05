import { useLazyQuery, useMutation } from '@apollo/client';
import React, { createContext, useState, useEffect } from 'react';
import { CREATE_GIG_FAQ, CREATE_REQUIREMENT, UPDATE_GIG, UPDATE_GIG_FAQ, UPDATE_REQUIREMENT } from '../mutations/Gig/gig';
import { UPDATE_GIG_FORMAT } from '../mutations/gigFormat/gigFormat';
import { UPDATE_TAG } from '../mutations/gigTag/gigTag';
import { CREATE_PRIVATE_COMMiSSION } from '../mutations/PrivateCommission/privateCommission';
import { CREATE_RUSH_ORDER } from '../mutations/RushOrder/rushOrder';
import { CREATE_COMMERCIAL_USE } from '../mutations/commercialUse/commercialUse';
import { useQuery } from '@apollo/client'
import { FETCH_CATEGORIES } from '../queries/category/category';
import { GET_ALL_QUERY } from '../queries/gigs/gig';
import { CREATE_ORDER, CREATE_ORDER_REQUIREMENT, UPDATE_ORDER } from '../mutations/order/order';
import { FIND_ORDER_BY_ID, FIND_ORDER_BY_CLIENT, FIND_ORDER_BY_SELLER } from '../queries/orders/order';
import { CREATE_MESSAGE } from '../mutations/messages/message';
import { CHAT_BY_USER, CHAT_EXISTENCE } from '../queries/chats/chats';
import { CREATE_CHAT } from '../mutations/chats/chats';
import { FETCH_USER_PROFILE } from '../queries/profile/profile';

export const MainContext = createContext();

const MainContextProvider = (props) => {

    const [profileId, setProfileId]= useState();
    const [closeDashboard, setCloseDashboard] = useState(true);
    const [overview, setOverview] = useState(false);
    const [pricing, setPricing] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [showRequirement, setShowRequirement] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    const [category, setCategory] = useState();
    const [openFaq, setOpenFaq] = useState(false);
    const [openSellerPage, setOpenSellerPage] = useState(true);
    const [openOrderDetails, setOpenOrderDetails] = useState(false);
    const [openOrderRequirement, setOpenOrderRequirement] = useState(false);
    const [orderPayment, setOrderPayment] = useState(false);
    const [openPopUp, setOpenPopUp] = useState(false);
    const [openMessagePopUp, setOpenMessagePopUp] = useState(false);
    const [openApprovePop, setApprovePop] = useState(false);
    const [openDisputePop, setDisputePop] = useState(false);
    const [chatId, setChatId] = useState();
    const vartisanState = {
        dashboard: false,
        projects: false,
        message: false,
        earning: false,
        analytic: false,
        wallet: false,
        profile: false,
        settings: false,
        logOut: false,
    }

    const [changeState, setChangeState] = useState(vartisanState);

    const initialUser = {
        id: '',
        userName: '',
        email: '',
    }
    const [userData, setUserData] = useState(initialUser);
    const initialState = {
        id: "",
        name: "",
        categoryId: "",
        subCategoryId: "",
        deliveryPeriod: "",
        numberOfRevision: "",
                amount: "",
            description: "",
            commercial: false,
               aiFiles: false,
    customIllustration: false,
        gigFormatId: "",
        sourceFile: false,
        gigFormat: {
            ai: false,
            psd: false,
            swf: false,
            gif: false,
            blend: false,
            bmpr: false,
            eps: false,
            jpg: false,
            fig: false,
            ico: false,
            png: false,
            other: false,
         },
         gigTagId: "",
        gigTag: [],
    rushOrder: {
        status: false,
        price: "",
        deliveryPeriod: "",
        },
    commercialUse: {
        status: false,
        price: "",
        deliveryPeriod: "",
        },
    privateCommission: {
        status: false,
        price: "",
        deliveryPeriod: "",
        },
        gigGalleryId: "",
        rushOrderId: "",
        privateCommissionId: "",
        commercialUseId: "",
        gigFaq: [],
        gigRequirement: [],
        gigGallery: [],
        gigVideo: [],
    };
    const [gig, setGig] = useState(initialState);
    const profileState = {
        id: '',
        description: '',
        descriptionMarkDown: '',
        firstName: '',
        lastName: '',
        activeOrders: '',
        completedOrder: '',
        canceledOrder: '',
        specialization: '',
        achievement: '',
        rank: '',
        language: '',
        onlineStatus: '',
        reference: '',
        role: ''
    }
    const [userProfile, setUserProfile] = useState(profileState);
    const orderData = {
        id:'',
        userId: '',
        quantity: '',
        category: '',
        date: '',
        name: '',
        gigImage: '',
        vartisan: '',
        revision: '',
        orderStatus: '',
        amount: '',
        sourceFile: false,
        commercial: false,
        rushOrder: false,
        privateOrder: false,
        rushOrderAmount: '',
        rushOrderDelivery: '',
        commercialOrderAmount: '',
        commercialOrderDelivery: '',
        privateOrderAmount: '',
        privateOrderDelivery: '',
        end: '',
        orderFaqId: '',
        orderRequirementId: '',
    }

    const [order, setOrder] = useState(orderData);

    const {data, loading} = useQuery(FETCH_CATEGORIES,
        {onCompleted: (data) => {
          setCategory(data);
          console.log(data);
        },
        onError: (error) => {
            console.log(error);
        }});

    const createHandler = () => {
        setCloseDashboard(false);
        setOverview(true);
    }

    const handleOverView = (e) => {
        e.preventDefault();
        setOverview(false);
    }

    const handleOpenFaq = () => {
        setOpenFaq(!openFaq);
    }

    const handleDescription = () => {
        setShowDescription(!showDescription);
        setShowRequirement(!showRequirement)
    }

    const proceedRequirement = () => {
        setShowRequirement(false);
        setShowGallery(true);
    }

    const [createPrivateCommission] = useMutation(CREATE_PRIVATE_COMMiSSION, {
        onCompleted: (data)=> {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [createCommercialUse] = useMutation(CREATE_COMMERCIAL_USE, {
        onCompleted: (data)=> {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [createRushOrder] = useMutation(CREATE_RUSH_ORDER, {
        onCompleted: (data)=> {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [updateGig] = useMutation(UPDATE_GIG, {
        onCompleted: (data)=> {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [updateGigFormat] = useMutation(UPDATE_GIG_FORMAT, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [updateGigTag] = useMutation(UPDATE_TAG, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [createGigFaq] = useMutation(CREATE_GIG_FAQ, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [updateGigFaq] = useMutation(UPDATE_GIG_FAQ, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [createRequirement] = useMutation(CREATE_REQUIREMENT, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [updateRequirement] = useMutation(UPDATE_REQUIREMENT, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [getAllGig] = useLazyQuery(GET_ALL_QUERY, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    });

    const [fetchSingleOrder] = useLazyQuery(FIND_ORDER_BY_ID, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    });

    const [fetchVartisanOrders] = useLazyQuery(FIND_ORDER_BY_SELLER, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    });

    const [fetchClientOrders] = useLazyQuery(FIND_ORDER_BY_CLIENT, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    });

    const [fetchUserProfile] = useLazyQuery(FETCH_USER_PROFILE, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    });

    const [fetchChatExistence] = useLazyQuery(CHAT_EXISTENCE, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    });

    const [fetchChatByUser] = useLazyQuery(CHAT_BY_USER, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    });

    const [createOrder] = useMutation(CREATE_ORDER, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [createOrderRequirements] = useMutation(CREATE_ORDER_REQUIREMENT, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [updateOrder] = useMutation(UPDATE_ORDER, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [createMessage] = useMutation(CREATE_MESSAGE, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [createChat] = useMutation(CREATE_CHAT, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })
    
    useEffect(async ()=> {
        const {data, error} = await fetchUserProfile();
        const {findUserProfile} = data;
        setUserProfile({...userProfile, ...findUserProfile})
    }, []);

    return (
        <MainContext.Provider value={{ 
        userData,
        setUserData,
        userProfile,
        setUserProfile,
        profileId,
        setProfileId,
        closeDashboard,
        createHandler,
        handleOverView,
        overview,
        category, 
        setCategory,
        gig,
        setGig,
        setPricing,
        pricing,
        setOverview,
        showDescription, 
        setShowDescription,
        openFaq, 
        handleOpenFaq,
        showRequirement, 
        setShowRequirement,
        setCloseDashboard,
        handleDescription,
        showGallery, 
        setShowGallery,
        proceedRequirement,
        initialState,
        updateGig,
        updateGigFormat,
        updateGigTag,
        createRushOrder,
        createPrivateCommission,
        createCommercialUse,
        updateGigFaq,
        createGigFaq,
        createRequirement,
        updateRequirement,
        getAllGig,
        userData, 
        setUserData,
        order, 
        setOrder,
        openOrderDetails, 
        setOpenOrderDetails,
        openOrderRequirement, 
        setOpenOrderRequirement,
        orderPayment, 
        setOrderPayment,
        openSellerPage, 
        setOpenSellerPage,
        createOrder,
        createOrderRequirements,
        updateOrder,
        openPopUp, 
        setOpenPopUp,
        fetchSingleOrder,
        createMessage,
        fetchVartisanOrders,
        changeState, 
        setChangeState,
        vartisanState,
        fetchClientOrders,
        fetchChatExistence,
        openMessagePopUp, 
        setOpenMessagePopUp,
        chatId, 
        setChatId,
        createChat,
        fetchChatByUser,
        openApprovePop, 
        setApprovePop,
        openDisputePop, 
        setDisputePop,
        fetchUserProfile
        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainContextProvider;