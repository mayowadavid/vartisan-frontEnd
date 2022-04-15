import { set } from 'mongoose';
import React, { useEffect, useState, useContext } from 'react'
import { MainContext } from '../../components/context/mainContext'

const Pricing = () => {
  const [deliveryDays, setDeliveryDays] = useState();
  const [revision, setRevision] = useState();
  const [rotate, setRotate] = useState(false);
  const [secondRotate, setSecondRotate] = useState(false);
  const {setShowDescription, setPricing, setGig, gig} = useContext(MainContext);
  const deliveryDaysArray = new Array(90);
  const value =()=>{
    let a = [];
      for(let i= 1; i <= deliveryDaysArray.length; ++i){
        a.push(i);
     }
     return setDeliveryDays(a);
    };
    useEffect(()=>{
        value();
    }, []);

  const revisionsArray = new Array(10);
  const revisionValue =()=>{
    let a = [];
      for(let i= 1; i <= revisionsArray.length; ++i){
        a.push(i);
     }
     return setRevision(a);
    };
    useEffect(()=>{
        revisionValue();
    }, []);

    const handleArrow = (e) => {
        e.preventDefault();
        setRotate(!rotate);
    }

    const handleSecondArrow = (e) => {
        e.preventDefault();
        setSecondRotate(!secondRotate);
    }

    const submitPricing = (e) => {
        e.preventDefault();
        setPricing(false);
        setShowDescription(true);
    }
    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setGig({...gig, [name]: value})
    }

    const handleRushOrder = (e) => {
        const {rushOrder} = gig;
        const {name, value} = e.target;
        rushOrder = {...rushOrder, [name]: value}
        setGig({...gig, rushOrder});
    }

    const handleRushCheck = (e) => {
        const {checked} = e.target;
        const {rushOrder} = gig;
        rushOrder = {...rushOrder, status: checked}
        setGig({...gig, rushOrder});
    }

    const handleCommercialUse = (e) => {
        const {commercialUse} = gig;
        const {name, value} = e.target;
        commercialUse = {...commercialUse, [name]: value}
        setGig({...gig, commercialUse});
    }

    const handleCommercialCheck = (e) => {
        const {checked} = e.target;
        const {commercialUse} = gig;
        commercialUse = {...commercialUse, status: checked }
        setGig({...gig, commercialUse});
    }

    const handlePrivateCommission = (e) => {
        const {privateCommission} = gig;
        const {name, value} = e.target;
        privateCommission = {...privateCommission, [name]: value}
        setGig({...gig, privateCommission});
    }

    const handlePrivateCheck = (e) => {
        const {checked} = e.target;
        const {privateCommission} = gig;
        privateCommission = {...privateCommission, status: checked}
        setGig({...gig, privateCommission});
    }

    const handleCheck = (e) => {
        const {name, checked} = e.target;
        setGig({...gig, [name]: checked});
    }

  return (
    <div className="creator_manage_gig">
                <div className="gig_project_control flex_show_row">
                    <div className="project_control_container">
                        <div className="control_line"></div>
                        <div className="gig_project_row flex_show_row">
                            <div className="gig_tag_column flex_show_column remove_margin">
                                <img src="/svg/mark.svg" alt=""/>
                                <p>Overview</p>
                            </div>
                            <div className="gig_tag_column flex_show_column remove_margin">
                                <img src="/svg/pen.svg" alt=""/>
                                <p>pricing</p>
                            </div>
                            <div className="gig_tag_column flex_show_column remove_margin">
                                <img src="/svg/mark.svg" alt=""/>
                                <p>Description</p>
                            </div>
                            <div className="gig_tag_column flex_show_column remove_margin">
                                <img src="/svg/mark.svg" alt=""/>
                                <p>Requirements</p>
                            </div>
                            <div className="gig_tag_column flex_show_column remove_margin">
                                <img src="/svg/mark.svg" alt=""/>
                                <p>Gallery</p>
                            </div>
                        </div>
                    </div>
                    <div className="project_submit project_submit_header flex_show_row">
                        <p>Save as Draft</p>
                        <p onClick={submitPricing}>Continue</p>
                    </div>
                </div>
                <div className="creator_wrap_holder flex_show_row">
                    <div className="project_gig_container">
                        <div className="gig_project_body shadow">
                            <div className="gig_project_header under_line">
                                <p>Project Pricing</p>
                            </div>
                            <div className="project_half_form flex_show_row under_line">
                                <p>Delivery Days</p>
                                <div className="project_delivery_days_selector flex_show_row form_border" >
                                <div className={rotate == true ? "rotate_arrow": "project_arrow"}><img src="/svg/caret_down.svg" alt=""/></div> 
                                    <select onClick={handleArrow} name="deliveryPeriod" onChange={handleChange}>
                                        {deliveryDays !== undefined && 
                                        (deliveryDays.map((data, i)=> {
                                            return (<option key={i} >{data + " " + "days"}</option>);
                                        }))}
                                    </select>
                                </div>
                            </div>
                            <div className="project_half_form flex_show_row under_line">
                                <p>Number of Revisions</p>
                                <div className="project_delivery_days_selector flex_show_row form_border">
                                <div className={rotate == true ? "rotate_arrow": "project_arrow"}><img src="/svg/caret_down.svg" alt=""/></div>
                                <select name="numberOfRevision" onClick={handleSecondArrow} onChange={handleChange}>
                                        {revision !== undefined && 
                                        (revision.map((data, i)=> {
                                            return (<option key={i}>{data + " " + "days"}</option>);
                                        }))}
                                </select>
                                </div>
                            </div>
                            <div className="project_form">
                                <div className="hint_display_header flex_show_row">
                                    <p>Service included</p> <img src="/svg/info_circle.svg" alt=""/>
                                </div>
                                <span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit nec</p> </span>
                                <div className="project_category_selector form_border">
                                    <div className="source_field_container flex_show_row">
                                        <div className="sourcebox_wrapper remove_margin flex_show_row">
                                            <input name="sourceFile" onChange={handleCheck} type="checkbox" /> <p>Source File</p>
                                        </div>
                                        <div className="sourcebox_wrapper remove_margin flex_show_row">
                                            <input  name="commercial" onChange={handleCheck} type="checkbox"/> <p>Commercial Use</p>
                                        </div>
                                        <div className="sourcebox_wrapper remove_margin flex_show_row">
                                            <input name="aiFiles" onChange={handleCheck} type="checkbox"/> <p>Ai Files</p>
                                        </div>
                                        <div className="sourcebox_wrapper remove_margin flex_show_row">
                                            <input name="customIllustration" onChange={handleCheck} type="checkbox"/> <p>Custom Illustration</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="project_half_form flex_show_row upper_line">
                                <p>Project Price</p>
                                <div className="project_delivery_days_selector flex_show_row form_border">
                                    <p>$</p> <input type="number" name="amount" onChange={handleChange} placeholder="20"/>
                                </div>
                            </div>
                        </div>
                        <div className="gig_project_extra shadow">
                            <div className="gig_project_header under_line">
                                <p>Extra Package</p>
                            </div>
                            <div className="gig_extra_package">
                                <div className="gig_extra_selector flex_show_row">
                                    <input name="status" onClick={handleRushCheck} type="checkbox"/>
                                    <p>Rush Order: 3 Day Delivery</p>
                                </div>
                                <div className="gig_extra_input flex_show_row">
                                    <div className="gig_extra_amount">
                                        <p>For an extra</p>
                                        <div className="gig_extra_amount_row flex_show_row form_border">
                                            <p>$</p>
                                            <input name="price" onChange={handleRushOrder} type="number" placeholder="25"/>
                                        </div>
                                    </div>
                                    <div className="gig_extra_days">
                                        <p>Additional Days</p>
                                        <div className="gig_extra_amount_row flex_show_row form_border">
                                        <div className={rotate == true ? "rotate_arrow": "project_arrow"}><img src="/svg/caret_down.svg" alt=""/></div> 
                                        <select name="deliveryPeriod" onClick={handleSecondArrow} onChange={handleRushOrder}>
                                            {revision !== undefined && 
                                            (revision.map((data, i)=> {
                                                return (<option key={i}>{data + " " + "days"}</option>);
                                            }))}
                                        </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gig_extra_package">
                                <div className="gig_extra_selector flex_show_row">
                                    <input onChange={handleCommercialCheck} name="status" type="checkbox"/>
                                    <p>Commercial Fee</p>
                                </div>
                                <div className="gig_extra_input flex_show_row">
                                    <div className="gig_extra_amount">
                                        <p>For an extra</p>
                                        <div className="gig_extra_amount_row flex_show_row form_border">
                                            <p>$</p>
                                            <input name="price" type="number" onChange={handleCommercialUse} placeholder="20"/>
                                        </div>
                                    </div>
                                    <div className="gig_extra_days">
                                        <p>Additional Days</p>
                                        <div className="gig_extra_amount_row flex_show_row form_border">
                                        <div className={rotate == true ? "rotate_arrow": "project_arrow"}><img src="/svg/caret_down.svg" alt=""/></div> 
                                        <select name="deliveryPeriod" onClick={handleSecondArrow} onChange={handleCommercialUse}>
                                            {revision !== undefined && 
                                            (revision.map((data, i)=> {
                                                return (<option key={i}>{data + " " + "days"}</option>);
                                            }))}
                                        </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gig_extra_package">
                                <div className="gig_extra_selector flex_show_row">
                                    <input name="status" onChange={handlePrivateCheck} type="checkbox"/>
                                    <p>Private Commission</p>
                                </div>
                                <div className="gig_extra_input flex_show_row">
                                    <div className="gig_extra_amount">
                                        <p>For an extra</p>
                                        <div className="gig_extra_amount_row flex_show_row form_border">
                                            <p>$</p>
                                            <input name="price" type="number" onChange={handlePrivateCommission} placeholder="20"/>
                                        </div>
                                    </div>
                                    <div className="gig_extra_days">
                                        <p>Additional Days</p>
                                        <div className="gig_extra_amount_row flex_show_row form_border">
                                        <div className={rotate == true ? "rotate_arrow": "project_arrow"}><img src="/svg/caret_down.svg" alt=""/></div> 
                                        <select name="deliveryPeriod" onClick={handleSecondArrow} onChange={handlePrivateCommission}>
                                            {revision !== undefined && 
                                            (revision.map((data, i)=> {
                                                return (<option key={i}>{data + " " + "days"}</option>);
                                            }))}
                                        </select> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project_submit flex_show_row">
                                <p>Save as Draft</p>
                                <p onClick={submitPricing}>Continue</p>
                            </div>
                        </div>
                    </div>
                    <div className="project_gig_tip remove_margin shadow">
                        <p>Tips For Your Project</p>
                        <ul>
                            <li><p>Lorem ipsum dolor sit amet, cing elit. Hendrerit nec </p></li>
                            <li><p>Lorem ipsum dolor sit amet, cing elit. Hendrerit nec </p></li>
                            <li><p>Lorem ipsum dolor sit amet, cing elit. Hendrerit nec </p></li>
                            <li><p>Lorem ipsum dolor sit amet, cing elit. Hendrerit nec </p></li>
                            <li><p>Lorem ipsum dolor sit amet, cing elit. Hendrerit nec </p></li>
                        </ul>
                        <a href=""><p>Learn more about the Tips</p></a>
                    </div>
                </div>
    </div>
  )
}

export default Pricing