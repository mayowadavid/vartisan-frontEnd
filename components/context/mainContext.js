import React, { createContext, useState, useEffect } from 'react';

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
        gigName: "",
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
        fileFormat: {
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
        tags: [],
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
        gigFaq: [],
        gigRequirement: [],
        gigGallery: [],
        gigVideo: [],
    };
    const [gig, setGig] = useState(initialState);

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
        initialState
        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainContextProvider;