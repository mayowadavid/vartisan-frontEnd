import { useContext, useEffect, useState } from "react";
import {useRouter} from 'next/router';
import { MainContext } from "../context/mainContext";

const VartisanPage = ({sellerData}) => {
    const router = useRouter();
    const { userName } = router.query;
    const {
        setOpenSellerPage,
        openSellerPage,
        openOrderDetails, 
        setOpenOrderDetails,
        fetchChatExistence,
        openMessagePopUp, 
        setOpenMessagePopUp,
        setChatId,
        findAllUserGig,
    } = useContext(MainContext);

    const chatData = {
        chatExist: false,
        createNew: false,
    }
   
    const [createChat, setCreateChat] = useState(chatData);
    const [otherGig, setOtherGig] = useState();

    useEffect(async ()=>{
        const {data: userGig, error: userError} = await findAllUserGig();
        setOtherGig(userGig.findAllUserGig);
    }, [])

    const requestOrder = (e) => {
        e.preventDefault();
        setOpenSellerPage(!openSellerPage);
        setOpenOrderDetails(!openOrderDetails);
    }

    const handleMessage = (e) => {
        e.preventDefault();
        setOpenMessagePopUp(!openMessagePopUp);
    }

    useEffect(async()=>{
    try {
        const { data, error } = await fetchChatExistence({
            variables: {
                userChatInput: {
                    receiverId: sellerData.user.id,
                }
            }
    });
        await data !== undefined && setCreateChat({...chatData, chatExist: true, createNew: false});
        await data !== undefined && setChatId(data.findChatByExistence.id);
    }
    catch(error) {
        await error !== undefined && 
        setCreateChat({...chatData, chatExist: false, createNew: true});
    }

        
        
    }, [])
    
    return (
        <div className="filtered_category_body">
                <div className="category_row">
                <div className="seller_slug">
                        <p>Home{`>`}</p>
                        <p>Categories</p>
                </div>
                <div className="seller_gig_header_title">
                    <p>{sellerData.name}</p>
                </div>
                </div>
                <div className="seller_gig_wrapper">
                    <div className="seller_gig_media">
                            <div className="seller_showcase">
                                <img src={sellerData?.galleryFormat[0]?.image !== undefined ? sellerData.galleryFormat[0]?.image :"../img/Seller_image.jpg"} alt=""/>
                            </div>
                            <div className="seller_thumbnail">
                                {sellerData.galleryFormat.length !== 0 ?
                                    sellerData.galleryFormat.map(({image}, i)=> {
                                        return (
                                    <div key={i} className="thumbnail_wrap">
                                        <img src={image} alt=""/>
                                    </div>)
                                    })
                                 : <div className="thumbnail_wrap">
                                    <img src="../img/featured.png" alt=""/>
                                </div>}
                            </div>
                    </div>
                    <div className="seller_gig_content_wrap">
                        <div className="seller_gig_achievement">
                            <div className="seller_gig_profile">
                                <div className="seller_avatar">
                                    <div>
                                        <span className="seller online"></span>
                                    </div>
                                    <img src={sellerData?.user?.profile?.file?.image !== undefined ?
                                     sellerData?.user?.profile?.file?.image : "../svg/avatar.svg"} alt=""/>
                                </div>
                                <div className="seller_gig_name">
                                    <p>{sellerData.user.userName}</p>
                                    <p>{sellerData?.category?.name}</p>
                                </div>
                                <div className="seller_gig_more">
                                    <img src="../img/more_vertical.png" alt=""/>
                                </div>
                            </div>
                            <div className="seller_gig_achievement_details">
                                <p>Achievements</p>
                                <div className="seller_gigs_award_wrap">
                                    <div className="seller_gig_awards">
                                        <div className="seller_gig_awards_col">
                                            <div className="seller_gig_award_hex"></div>
                                            <div className="seller_gig_award_image">
                                                <img src="../img/trophy.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="seller_award_content">
                                            <p>Top Creator</p>
                                            <p>Since 2020 - presents</p>
                                        </div>
                                    </div>
                                    <div className="seller_gig_awards">
                                        <div className="seller_gig_awards_col">
                                            <div className="seller_gig_award_hex"></div>
                                            <div className="seller_gig_award_image">
                                                <img src="../img/trophy.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="seller_award_content">
                                            <p>Top Creator</p>
                                            <p>Since 2020 - presents</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="seller_order_section">
                                <p onClick={requestOrder}>Request Order</p>
                                <div className="seller_gig_contacts">
                                    <p onClick={handleMessage}>Message</p>
                                    <p>Terms</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="seller_gig_fields">
                            <div className="seller_gig_field_header">
                                <p>From</p>
                                <p>{`$${sellerData.amount}`}</p>
                            </div>
                            <div className="seller_gig_field_category">
                                <div className="seller_field_col">
                                    <p>Category</p>
                                    <p>Video Editing</p>
                                </div>
                                <div className="seller_field_col">
                                    <p>Completion Time</p>
                                    <p>{sellerData.deliveryPeriod}</p>
                                </div>
                            </div>
                            <div className="seller_gig_offer">
                                <div className="seller_gig_row">
                                    <img src="../img/done.jpg" alt=""/>
                                    <p>Commercial rights</p>
                                </div>
                                <div className="seller_gig_row">
                                    <img src="../img/done.jpg" alt=""/>
                                    <p>
                                    {Object.keys(sellerData?.gigFormat).map((data)=> {
                                        return (`${data}, `)
                                    })}</p>
                                </div>
                                <div className="seller_gig_row">
                                    <img src="../img/done.jpg" alt=""/>
                                    <p>Private Fee/other custom fields</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="seller_description">
                        <div className="seller_description_title">
                            <p>Project Description</p>
                        </div>
                        <p>{sellerData.description}</p>
                    </div>
                    <div className="seller_gig_mobile_achievement">
                        <div className="seller_gig_profile">
                            <div className="seller_avatar">
                                <div>
                                    <span className="seller online"></span>
                                </div>
                                <img src="../img/category.png" alt=""/>
                            </div>
                            <div className="seller_gig_name">
                                <p>Michael John</p>
                                <p>Logo Designer</p>
                            </div>
                            <div className="seller_gig_more">
                                <img src="../img/more_vertical.png" alt=""/>
                            </div>
                        </div>
                        <div className="seller_gig_achievement_details">
                            <p>Achievements</p>
                            <div className="seller_gigs_award_wrap">
                                <div className="seller_gig_awards">
                                    <div className="seller_gig_awards_col">
                                        <div className="seller_gig_award_hex"></div>
                                        <div className="seller_gig_award_image">
                                            <img src="../img/trophy.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="seller_award_content">
                                        <p>Top Creator</p>
                                        <p>Since 2020 - presents</p>
                                    </div>
                                </div>
                                <div className="seller_gig_awards">
                                    <div className="seller_gig_awards_col">
                                        <div className="seller_gig_award_hex"></div>
                                        <div className="seller_gig_award_image">
                                            <img src="../img/trophy.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="seller_award_content">
                                        <p>Top Creator</p>
                                        <p>Since 2020 - presents</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="seller_order_section">
                            <p>Request Order</p>
                            <div className="seller_gig_contacts">
                                <p>Message</p>
                                <p>Terms</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="seller_review">
                        <div className="seller_review_header">
                            <div className="seller_review_header_content">
                                <p>Reviews</p>
                            </div>
                            <div className="seller_review_icon">
                                <div className="seller_arrow">
                                    <img src="../img/arrow_left.png" alt=""/>
                                </div>
                                <div className="seller_arrow">
                                    <img src="../img/arrow_right.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="seller_review_row">
                            <div className="seller_review_card">
                                <div className="seller_review_card_header">
                                    <div className="seller_review_header_col">
                                        <div className="seller_review_avatar">
                                            <img src="../img/review.png" alt=""/>
                                        </div>
                                        <div className="seller_review_content">
                                            <p>John hales</p>
                                            <p>Achievement</p>
                                        </div>
                                    </div>
                                    <div className="seller_review_rate">
                                        <div className="seller_border flex_show_row">
                                            <img src="../svg/thumb_up.svg" alt=""/>
                                            <p>21</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="seller_review_description">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ultrices duis sed enim dignissim malesuada leo.
                                    </p>
                                </div>
                                <div className="seller_review_time">
                                    <p>5 Days ago</p>
                                </div>
                            </div>
                            <div className="seller_review_card">
                                <div className="seller_review_card_header">
                                    <div className="seller_review_header_col">
                                        <div className="seller_review_avatar">
                                            <img src="../img/review.png" alt=""/>
                                        </div>
                                        <div className="seller_review_content">
                                            <p>John hales</p>
                                            <p>Achievement</p>
                                        </div>
                                    </div>
                                    <div className="seller_review_rate">
                                        <div className="seller_border flex_show_row">
                                            <img src="../svg/thumb_down.svg" alt=""/>
                                            <p>5</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="seller_review_description">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ultrices duis sed enim dignissim malesuada leo.
                                    </p>
                                </div>
                                <div className="seller_review_time">
                                    <p>5 Days ago</p>
                                </div>
                            </div>
                            <div className="seller_review_card">
                                <div className="seller_review_card_header">
                                    <div className="seller_review_header_col">
                                        <div className="seller_review_avatar">
                                            <img src="../img/review.png" alt=""/>
                                        </div>
                                        <div className="seller_review_content">
                                            <p>John hales</p>
                                            <p>Achievement</p>
                                        </div>
                                    </div>
                                    <div className="seller_review_rate">
                                        <div className="seller_border flex_show_row">
                                            <img src="../svg/thumb_up.svg" alt=""/>
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="seller_review_description">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ultrices duis sed enim dignissim malesuada leo.
                                    </p>
                                </div>
                                <div className="seller_review_time">
                                    <p>5 Days ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more_seller_gig">
                        <div className="more_seller_header">
                            <p>More Projects</p>
                        </div>
                        <div className="seller_card_row">
                        {
                            otherGig !== undefined && otherGig.map((d)=>{
                                return (
                                        <div className="seller_card">
                                            <img src={d?.gigGallery[0]?.file[0]?.image !== undefined ? d?.gigGallery[0]?.file[0]?.image : "../../svg/no_caption.svg"} alt=""/>
                                            <div className="seller_content">
                                                <div className="seller_gig_image">
                                                    <img src={d?.user?.profile?.file?.image !== undefined ? d?.user?.profile?.file?.image : "../../svg/no_caption.svg"} alt=""/>
                                                </div>
                                                <div className="seller_gig_title">
                                                    <p>{d?.user?.userName}</p>
                                                    <p>{d?.category?.name}</p>
                                                </div>
                                                <div className="seller_gig_price">
                                                    <p>from</p>
                                                    <p>{`$${d?.amount}`}</p>
                                                </div>
                                            </div>
                                        </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default VartisanPage;