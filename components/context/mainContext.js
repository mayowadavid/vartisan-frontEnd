import { useLazyQuery, useMutation, useSubscription } from '@apollo/client';
import React, { createContext, useState, useEffect } from 'react';
import { CREATE_GIG_FAQ, CREATE_REQUIREMENT, DELETE_GIG_REQUIREMENT, UPDATE_GIG, UPDATE_GIG_FAQ, UPDATE_REQUIREMENT } from '../mutations/Gig/gig';
import { UPDATE_GIG_FORMAT } from '../mutations/gigFormat/gigFormat';
import { UPDATE_TAG } from '../mutations/gigTag/gigTag';
import { CREATE_PRIVATE_COMMiSSION } from '../mutations/PrivateCommission/privateCommission';
import { CREATE_RUSH_ORDER } from '../mutations/RushOrder/rushOrder';
import { CREATE_COMMERCIAL_USE } from '../mutations/commercialUse/commercialUse';
import { useQuery } from '@apollo/client'
import { FETCH_CATEGORIES } from '../queries/category/category';
import { FIND_ALL_USER_GIG, GET_ALL_QUERY } from '../queries/gigs/gig';
import { CREATE_ORDER, CREATE_ORDER_REQUIREMENT, UPDATE_ORDER } from '../mutations/order/order';
import { FIND_ORDER_BY_ID, FIND_ORDER_BY_CLIENT, FIND_ORDER_BY_SELLER } from '../queries/orders/order';
import { CREATE_MESSAGE } from '../mutations/messages/message';
import { CHAT_BY_USER, CHAT_EXISTENCE } from '../queries/chats/chats';
import { CREATE_CHAT } from '../mutations/chats/chats';
import { FETCH_USER_PROFILE } from '../queries/profile/profile';
import { SignUp } from '../mutations/users/user';
import { FIND_ALL_REFERENCE, FIND_USER_REFERENCE } from '../queries/reference/reference';
import {Router, useRouter} from 'next/router';
import { CREATE_CATEGORY, SUB_CATEGORY, UPDATE_CATEGORY } from '../mutations/categories/category';
import { MESSSAGE_SUBSCRIPTION } from '../subscriptions/message';
import { FETCH_USERS } from '../queries/user/user';
import { CREATE_BLOG, DELETE_BLOG, UPDATE_BLOG } from '../mutations/blog/blog';
import { UPDATE_PROFILE } from '../mutations/profile/profile';
import { FIND_USER_NOTIFICATION } from '../queries/notification/notification';
import { FIND_USER_BLOG } from '../queries/blog/blog';

export const MainContext = createContext();

const MainContextProvider = (props) => {
    const router = useRouter()
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
    const [editAbout, setEditAbout] = useState(false);
    const [popReference, setPopReference] = useState(false);
    const [chatId, setChatId] = useState();
    const [allGig, setGetAllGig] = useState([]);
    const [projectImage, setProjectImage] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState();
    const [newNotification, setNewNotification] = useState(false);
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

    const adminCategoryState = {
        displayCategory: true,
        createCategory: false,
        subCategory: false,
        editCategory: false,
        deleteCategory: false,
    }

    const [adminCategoryCreate, setAdminCategoryCreate] = useState(adminCategoryState);

    const blogState = {
        displayBlog: true,
        createBlog: false,
        editBlog: false,
        deleteBlog: false
    }

    const [adminBlog, setAdminBlog] = useState(blogState);

    const adminRoute = {
        dashboard: true,
        commission: false,
        projects: false,
        message: false,
        promotions: false,
        categories: false,
        blog: false,
        homePage: false,
        payment: false,
        vartisan: false,
        user_client: false,
        general_settings: false,
    }

    const [adminPage, setAdminPage] = useState(adminRoute);

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

    const handleEditPop = () => {
        setEditAbout(!editAbout);
    }

    const handlePop = (e) => {
        e.preventDefault();
        setPopReference(!popReference);
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

    const [updateBlogData] = useMutation(UPDATE_BLOG, {
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

    const [getUsers] = useLazyQuery(FETCH_USERS, {
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

    const [findAllReference] = useLazyQuery(FIND_ALL_REFERENCE, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    });

    const [findUserReference] = useLazyQuery(FIND_USER_REFERENCE, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    });

    const [findAllUserGig] = useLazyQuery(FIND_ALL_USER_GIG, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    });

    const [findUserNotification] = useLazyQuery(FIND_USER_NOTIFICATION, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [findUseBlog] = useLazyQuery(FIND_USER_BLOG, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

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

    const [createCategory] = useMutation(CREATE_CATEGORY, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [createSubCategory] = useMutation(SUB_CATEGORY, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [userSignUp] = useMutation(SignUp, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [createBlog] = useMutation(CREATE_BLOG, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [updateProfile] = useMutation(UPDATE_PROFILE, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [updateCategory] = useMutation(UPDATE_CATEGORY, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [deleteBlog] = useMutation(DELETE_BLOG, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })

    const [deleteGigRequirement] = useMutation(DELETE_GIG_REQUIREMENT, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error)=> {
            console.log(error);
        }
    })
    
    
    useEffect(async ()=> {
        try{
            const {data, error} = await fetchUserProfile();
            const {findUserProfile} = data;
            setUserProfile({...userProfile, ...findUserProfile})
        }catch(error){
            router.push('/login');
        }
    }, []);

    const {data: gigData, error} = useQuery(GET_ALL_QUERY, {
        onCompleted: (data) => {
            if(data){
            const { getAllgig } = data;
            setGetAllGig(getAllgig);
            }
        },
        onError: (error) => {
            console.log(error);
        }
    });

    const {data: subData, error: subErr} = useSubscription(MESSSAGE_SUBSCRIPTION, {
        onCompleted: (data) => {
            if(data){
            console.log(data)
            }
        },
        onError: (error) => {
            console.log(error);
        }
    });

    const { gigGallery } = gig;

    useEffect(()=>{
        const newImage = gigGallery?.map(({file})=> {
            return file[0]?.image
        })
        setProjectImage(newImage);
    }, [])

    const { categories } = category !== undefined && category;

    return (
        <MainContext.Provider value={{ 
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
        fetchUserProfile,
        userSignUp,
        editAbout, 
        setEditAbout,
        handleEditPop,
        popReference, 
        setPopReference,
        handlePop,
        findAllReference,
        findUserReference,
        adminCategoryCreate,
        setAdminCategoryCreate,
        createCategory,
        createSubCategory,
        allGig, 
        setGetAllGig,
        projectImage,
        getUsers,
        adminBlog, 
        setAdminBlog,
        createBlog,
        updateProfile,
        findAllUserGig,
        findUserNotification,
        findUseBlog,
        updateCategory,
        selectedBlog, 
        setSelectedBlog,
        categories,
        updateBlogData,
        deleteBlog,
        deleteGigRequirement,
        adminPage, 
        setAdminPage,
        newNotification, 
        setNewNotification,
        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainContextProvider;