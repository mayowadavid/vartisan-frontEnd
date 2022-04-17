import { useMutation } from '@apollo/client';
import React, { createContext, useState, useEffect } from 'react';
import { CREATE_GIG_FAQ, CREATE_REQUIREMENT, UPDATE_GIG, UPDATE_GIG_FAQ, UPDATE_REQUIREMENT } from '../mutations/Gig/gig';
import { UPDATE_GIG_FORMAT } from '../mutations/gigFormat/gigFormat';
import { UPDATE_TAG } from '../mutations/gigTag/gigTag';
import { CREATE_PRIVATE_COMMiSSION } from '../mutations/PrivateCommission/privateCommission';
import { CREATE_RUSH_ORDER } from '../mutations/RushOrder/rushOrder';
import { CREATE_COMMERCIAL_USE } from '../mutations/commercialUse/commercialUse';
import { useQuery } from '@apollo/client'
import { FETCH_CATEGORIES } from '../queries/category/category';

export const MainContext = createContext();

const MainContextProvider = (props) => {

    const [userData, setUserData] = useState();
    const [userProfile, setUserProfile]= useState();
    const [profileId, setProfileId]= useState();
    const [userDescription, setUserDescription] = useState();
    const [closeDashboard, setCloseDashboard] = useState(true);
    const [overview, setOverview] = useState(false);
    const [pricing, setPricing] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [showRequirement, setShowRequirement] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    const [category, setCategory] = useState();
    const [openFaq, setOpenFaq] = useState(false);
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

    const{data, loading} = useQuery(FETCH_CATEGORIES,
        {onCompleted: (data) => {
          setCategory(data);
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

    return (
        <MainContext.Provider value={{ 
        userData,
        setUserData,
        userProfile,
        setUserProfile,
        profileId,
        setProfileId,
        userDescription,
        setUserDescription,
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
        updateRequirement
        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainContextProvider;