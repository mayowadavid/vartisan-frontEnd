import React, { useState } from 'react'
import axios from 'axios';
const ClientReferencePop = ({handlePop}) => {

    const initialState = {
        title: "",
        description: "",
    }
    const [layoutLength, setLayoutLength] = useState([1, 2]);
    const [reference, setReference] = useState(initialState);
    const [formData, setFormData] = useState();
    const [referenceFile, setReferenceFile] = useState();
    const handleReference = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setReference({...reference, [name]: value});
    }
    
    const handleFile = (e) => {
        e.preventDefault();
        const {files} = e.target;
        setReferenceFile(files);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {title, description} = reference;
        formData = new FormData();
        formData.append('name', title);
        formData.append('description', description);
        formData.append('file', referenceFile);
        axios.post('http://localhost:4000/reference/imageUpload', formData)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          }); 
    }

  return (
    <div className="references_pop_up flex_show_row">
            <div className="reference_pop_wrapper">
                <div className="reference_header_row border flex_show_row">
                    <div className="reference_header remove_margin">
                        <p>Create Album</p>
                    </div>
                    <div className="reference_cancel" onClick={handlePop}>
                        <img src="svg/close_small.svg" alt=""/>
                    </div>
                </div>
                <div className="reference_image_header remove_margin">
                    <p>upload image</p>
                    <p>upload up to 10 images</p>
                </div>
                <div className="reference_image_wrapper flex_show_row">
                {layoutLength.map((num)=> {
                    return(<div className="reference_image_card" key={num}>
                    <input  name="file" onChange={handleFile} type="file" id="file"/>
                    <label htmlFor="file">
                        <div  className="change_reference_image flex_show_column offUpload">
                            <img src="svg/Upload_white.svg" alt=""/>
                            <p>Change image</p>
                        </div>
                    </label>
                    <img src="img/category6.png" alt=""/>
                    <div className="references_content_input flex_show_column">
                        <input onChange={handleReference} type="text" name="title" id=""/>
                        <textarea onChange={handleReference} name="description" id="" cols="30" rows="10"></textarea>
                        <div className="select_project_cover flex_show_row">
                            <input type="radio" name="" id=""/>
                            <p>select as project cover</p>
                        </div>
                    </div>
                </div>);
                })}
                <div className="reference_image_card_holder remove_margin flex_show_column">
                <input onChange={handleReference} type="file" id="file" name="referenceImage"/>
                <label htmlFor="file">
                    <img src="img/plus.png" alt=""/>
                    <p htmlFor="file">Create new album</p>
                </label>
                </div>
                
                <div className="reference_submit_button flex_show_row remove_margin border">
                    <p>Discard</p> <p onClick={handleSubmit}>Save</p>
                </div>
                </div>
            </div>
    </div>
  )
}

export default ClientReferencePop