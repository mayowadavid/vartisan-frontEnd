import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/mainContext';
import {useMutation, useQuery} from '@apollo/client';

const ClientGigOrder = ({sellerData}) => {
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState();
    const {
        order, 
        setOrder, 
        openOrderDetails,  
        setOpenOrderDetails, 
        openOrderRequirement,
        setOpenOrderRequirement,
        createOrder,
    } = useContext(MainContext);
    const [gigImage, setGigImage] = useState();

    const secondaryHolder = {
        rushOrder: false,
        privateOrder: false,
        commercial: false,
    }

    const [secondaryOrder, setSecondaryOrder] = useState(secondaryHolder);

    const handleCheck = (e) => {
        const { name, checked } = e.target;
        setSecondaryOrder({...secondaryOrder, ...secondaryHolder, [name]: checked});
    }

    useEffect(()=>{
        const totalUpdate = quantity * sellerData.amount;
        setTotal(totalUpdate);
    }, [quantity])

    useEffect(()=>{
        if(sellerData.gigGallery.length !== 0){
            const image = sellerData.gigGallery[0].file[0].image;
            setGigImage(image);
        }
    }, [])

    const totalChange = (e) => {
        e.preventDefault();
        const {value} = e.target;
        setQuantity(value);
    }

    const submitOrder = async(e) => {
    e.preventDefault();
    const date = await Date.now();
    const orderData = { 
        gigId: sellerData.id,
        quantity: quantity.toString(),
        category: sellerData.category.name,
        name: sellerData.name,
        date: date.toString(),
        gigImage,
        vartisan: sellerData.user.userName,
        sellerId: sellerData.user.id,
        amount: total.toString(),
        commercial: secondaryOrder.commercial,
        rushOrder: secondaryOrder.rushOrder,
        privateOrder: secondaryOrder.privateOrder,
        rushOrderAmount: sellerData?.rushOrder?.price,
        rushOrderDelivery: sellerData?.rushOrder?.deliveryPeriod,
        commercialOrderAmount: sellerData?.commercialUse?.price,
        commercialOrderDelivery: sellerData?.commercialUse?.deliveryPeriod,
        privateOrderAmount: sellerData?.privateCommission?.price,
        privateOrderDelivery: sellerData?.privateCommission?.deliveryPeriod,
        end: sellerData?.deliveryPeriod,
    }

    const { data: dataValue, error } = await createOrder({
        variables: {
            orderInput:  orderData,
        }
    })
    await setOrder({ ...order,  ...dataValue.createOrder });
    await setOpenOrderRequirement(!openOrderRequirement);

    }
    console.log(sellerData);
  return (
        <div className="client_order_body">
                <div className="client_header_order_status remove_margin flex_show_row">
                    <div className="client_header_order_line flex_show_row remove_margin">
                        <div className="order_number_wrap flex_show_row remove_margin">
                            <p>1</p>
                        </div>
                    </div>
                    <p>Order Details</p>
                    <div className="client_header_order_line flex_show_row remove_margin">
                        <div className="client_order_line"></div>
                        <div className="order_number_wrap flex_show_row remove_margin">
                            <p>2</p>
                        </div>
                    </div>
                    <p>Submit requirement</p>
                    <div className="client_header_order_line flex_show_row remove_margin">
                        <div className="client_order_line"></div>
                        <div className="order_number_wrap flex_show_row remove_margin">
                            <p>3</p>
                        </div>
                    </div>
                    <p>Confirm payment</p>
                </div>
                <div className="status_name remove_margin">
                    <p>Order Details</p>
                </div>
                <div className="client_body_wrapper flex_show_row">
                    <div className="client_order_left">
                        <div className="order_header">
                            <p>Order Details</p>
                        </div>
                        <div className="client_order_row flex_show_row">
                            <img src={sellerData.galleryFormat[0]?.image !== undefined ? sellerData.galleryFormat[0]?.image :"../img/Seller_image.jpg"} alt=""/>
                            <div className="client_order_content remove_margin">
                                <p>{sellerData?.name}</p>
                                <p>{sellerData?.category?.name}</p>
                                <div className="order_recommends flex_show_row remove_margin">
                                    <img src="/svg/thumb_up.svg" alt=""/>
                                    <p>14 Recommend</p>
                                </div>
                            </div>
                            <div className="client_order_quantity_row flex_show_row">
                                <div className="client_order_quantity flex_show_row remove_margin">
                                    <p>Qty</p>
                                    <input type="number" onChange={totalChange} placeholder="1" value={quantity} id=""/>
                                </div>
                                <div className="client_order_amount remove_margin">
                                    <p>{`$${sellerData?.amount}`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="client_extra_order">
                            <p>Add extra order</p>
                        </div>
                        {sellerData?.rushOrder?.status == true &&
                        (<div className="client_extra_order_row">
                            <div className="client_extra_order_features flex_show_row remove_margin">
                                <div className="client_extra_check flex_show_row">
                                    <input type="checkbox" checked={secondaryOrder.rushOrder} onChange={handleCheck} name="rushOrder" id=""/>
                                    <p>Rush order:{sellerData?.rushOrder?.deliveryPeriod}</p>
                                </div>
                                <p>{`$${sellerData?.rushOrder?.price}`}</p>
                            </div>
                        </div>)}
                        {sellerData?.commercialUse?.status == true &&
                        (<div className="client_extra_order_row">
                            <div className="client_extra_order_features flex_show_row remove_margin">
                                <div className="client_extra_check flex_show_row">
                                    <input type="checkbox" checked={secondaryOrder.commercial} onChange={handleCheck} name="commercial" id=""/>
                                    <p>Commercial Fee:{sellerData?.commercialUse?.deliveryPeriod}</p>
                                </div>
                                <p>{`$${sellerData?.commercialUse?.price}`}</p>
                            </div>
                        </div>)}
                        {sellerData?.privateCommission?.status == true &&
                        (<div className="client_extra_order_row">
                            <div className="client_extra_order_features flex_show_row remove_margin">
                                <div className="client_extra_check flex_show_row">
                                    <input type="checkbox" checked={secondaryOrder.privateOrder} onChange={handleCheck} name="privateOrder" id=""/>
                                    <p>Private Commission:{sellerData?.privateCommission?.deliveryPeriod}</p>
                                </div>
                                <p>{`$${sellerData?.privateCommission?.price}`}</p>
                            </div>
                        </div>)}
                    </div>
                    <div className="client_order_right">
                        <div className="client_order_summary remove_margin">
                            <p>Price Summary</p>
                            <div className="price_subtotal flex_show_row remove_margin">
                                <p>Subtotal</p> <p>{`$${total}`}</p>
                            </div>
                            <div className="client_tax remove_margin">
                                <p>Tax</p>
                            </div>
                            <div className="client_total_delivery">
                                <div className="client_total remove_margin flex_show_row">
                                    <p>Total</p>
                                    <p>{`$${total}`}</p>
                                </div>
                                <div className="client_deliveries remove_margin flex_show_row">
                                    <p>Delivery time</p>
                                    <p>{sellerData?.deliveryPeriod}</p>
                                </div>
                            </div>
                            <div className="client_submit remove_margin">
                                <p onClick={submitOrder}>Continue</p>
                            </div>
                            <div className="order_message">
                                <p>You won't be charged yet</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default ClientGigOrder