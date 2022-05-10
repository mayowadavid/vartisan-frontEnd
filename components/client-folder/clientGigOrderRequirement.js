import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/mainContext';
import axios from 'axios';

const ClientGigOrderRequirement = ({sellerData}) => {
    const {
        setOpenOrderRequirement,
        openOrderRequirement,
        openOrderDetails, 
        setOpenOrderDetails,
        setOpenSellerPage,
        createOrderRequirements,
        order,
        setOrder,
        updateOrder,
        orderPayment, 
        setOrderPayment
    } = useContext(MainContext);

    const requirementState = {
        description: '',
        reference: '',
        color: '',
        descriptionFile: {
            name: '',
            file: '',
        },
        referenceFile : {
            name: '',
            file: '',
        },
        colorFile: {
            name: '',
            file: '',
        }
    }

    const [requirementData, setRequirementData] = useState(requirementState);

    const uploadDescription = (datum, data, headers) => {
        
        for (let x = 0; x < data.length; x++){
            const name = data[x].name;
            const file = data[x].file;
            const id = datum.id;
            console.log(name, file, id)
            let formData = new FormData();
            formData.append('descriptionFile', name);
            formData.append('file', file[0]);
            formData.append('id', id);
            axios.post('http://localhost:4000/order-requirement/imageUpload', 
            formData, {headers}).then((dat)=> console.log(dat))
            .catch((error)=> console.log(error));
        }
        
    }

    const uploadReference = (datum, data, headers) => {
        
        for (let x = 0; x < data.length; x++){
            const name = data[x].name;
            const file = data[x].file;
            const id = datum.id;
            let formData = new FormData();
            formData.append('referenceFile', name);
            formData.append('file', file[0]);
            formData.append('id', id);
            axios.post('http://localhost:4000/order-requirement/imageUpload', 
            formData, {headers}).then((dat)=> console.log(dat))
            .catch((error)=> console.log(error));
        }
        
    }

    const uploadColor = (datum, data, headers) => {
        
        for (let x = 0; x < data.length; x++){
            const name = data[x].name;
            const file = data[x].file;
            const id = datum.id;
            let formData = new FormData();
            formData.append('colorFile', name);
            formData.append('file', file[0]);
            formData.append('id', id);
            axios.post('http://localhost:4000/order-requirement/imageUpload', 
            formData, {headers}).then((dat)=> console.log(dat))
            .catch((error)=> console.log(error));
        }
        
    }
    
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setRequirementData({...requirementData, [name]: value})
    }

    const handleFile = (e) => {
        e.preventDefault();
        const { name, value, files } = e.target;
        setRequirementData({...requirementData, [name]: {
            name: files[0].name,
            file: files
        }})
    }
    const submitRequirement = async (e) => {
        e.preventDefault();
        const date = await Date.now();
        const {description, reference, color} = requirementData
        const token = await localStorage.getItem('token');
        const headers = {authorization: token ? `Bearer ${JSON.parse(token)}` : "",}
        const {data: requirements, error} = await createOrderRequirements({
            variables: {
                orderRequirement: { 
                    description, 
                    reference, 
                    color,
                    date: date.toString()
                 },
            }
        })
        const {createOrderRequirement} = await requirements;
        await requirementData.descriptionFile.file !== ''  &&
        uploadDescription(createOrderRequirement, [requirementData.descriptionFile], headers);
        await requirementData.referenceFile.file !== '' &&
        uploadReference(createOrderRequirement, [requirementData.referenceFile], headers);
        await requirementData.colorFile.file !== '' &&
        uploadColor(createOrderRequirement, [requirementData.colorFile], headers);
        await createOrderRequirement !== undefined && updateOrder({
          variables: { 
            orderUpdate: {
                id: order.id,
            orderRequirementId: createOrderRequirement.id
            }
        }
        })
        await setOpenSellerPage(false);
        await setOpenOrderRequirement(false);
        await setOpenOrderDetails(false);
        await setOrderPayment(!orderPayment);
    }
  return (
    <div className="client_requirement_wrapper shadow flex_show_row">
            <div className="client_gig_requirement_container">
                <div className="client_gig_header_row flex_show_row">
                    <div className="client_gig_header remove_margin">
                        <p>Order Requirements</p>
                        <p>Please fill all the Requirements below</p>
                    </div>
                    <div className="client_gig_cancel">
                        <img src="svg/close_small.svg" alt=""/>
                    </div>
                </div>
                <div className="client_requirement_body">
                    <form>
                        <div className="client_requirement_description">
                            <p>Description about the project</p>
                            <textarea name="description" onChange={handleChange} id="" cols="30" rows="10"></textarea>
                            <div className="client_requirement_container remove_margin flex_show_row">
                                <div className="client_requirement_file flex_show_row remove_margin">
                                    <img src="svg/link.svg" alt=""/>
                                    <input type="file" onChange={handleFile} name="descriptionFile" id="descriptionFile"/>
                                    <label htmlFor="descriptionFile">
                                    <p>Attach files</p>
                                    </label>
                                </div>
                                <p>Max 50 Mb</p>
                                <p>{requirementData.descriptionFile.name}</p>
                            </div>
                        </div>
                        <div className="client_requirement_reference remove_margin">
                            <p>Please share your references</p>
                            <input type="text" name="reference" onChange={handleChange} placeholder="description here" id=""/>
                            <div className="client_requirement_container remove_margin flex_show_row">
                                <div className="client_requirement_file flex_show_row remove_margin">
                                    <img src="svg/link.svg" alt=""/>
                                    <input type="file" onChange={handleFile} name="referenceFile" id="referenceFile" />
                                    <label htmlFor="referenceFile">
                                        <p>Attach files</p>
                                    </label>
                                </div>
                                <p>Max 50 Mb</p>
                                <p>{requirementData.referenceFile.name}</p>
                            </div>
                        </div>
                        <div className="client_requirement_reference remove_margin">
                            <p>what color scheme do you want</p>
                            <input type="text" name="color" onChange={handleChange} placeholder="description here" id=""/>
                            <div className="client_requirement_container remove_margin flex_show_row">
                                <div className="client_requirement_file flex_show_row remove_margin">
                                    <img src="svg/link.svg" alt=""/>
                                    <input type="file" onChange={handleFile} name="colorFile" id="colorFile" />
                                    <label htmlFor="colorFile">
                                        <p>Attach files</p>
                                    </label>
                                </div>
                                <p>Max 50 Mb</p>
                                <p>{requirementData.colorFile.name}</p>
                            </div>
                        </div>
                        <div className="client_requirement_button remove_margin flex_show_row">
                            <p>Your request will not begun until the Vartisan has
                                accepted your order request.</p>
                                <p onClick={submitRequirement}>Continue</p>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default ClientGigOrderRequirement