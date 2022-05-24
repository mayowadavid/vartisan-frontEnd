import React, { useState } from 'react'
import axios from 'axios';
const ClientReferencePop = ({handlePop}) => {

    const initialState = {
        title: "",
        description: "",
        file: [],
        selected: false,
    }
    const [layoutLength, setLayoutLength] = useState([1, 2]);
    const [reference, setReference] = useState(initialState);
    const [allReference, setAllReference] = useState([]);
    const [selected, setSelected] = useState(false);

    const handleReference = (e, i) => {
        e.preventDefault();
        const {name, value} = e.target;
        setReference({...reference, [name]: value});
        const referenceCopy = [...allReference];
        referenceCopy[i] = {...referenceCopy[i], [name]: value};
        allReference = referenceCopy
        setAllReference([...allReference]);
    }
    
    const handleFile = (e, i) => {
        e.preventDefault();
        const {files} = e.target;
        setReference({...reference, file: files});
        const referenceCopy = [...allReference];
        referenceCopy[i] = {...referenceCopy[i], file: files};
        allReference = referenceCopy
        setAllReference([...allReference]);
    }

    const handleCheck = (e, i) => {
        const {name, checked} = e.target;
        //clone due to no direct manipulation
        const referenceCopy = [...allReference];
        const reset = referenceCopy.map((d)=>{
            if(d.selected !== undefined){
                d.selected = false;
            }
            return d;
        } );
        referenceCopy = reset;
        referenceCopy[i] = {...referenceCopy[i], [name]: checked}
        allReference = referenceCopy
        setAllReference([...allReference]);
        setSelected(!selected);
      }

    const uploadReference = (data, headers) => {
        
        for (let x = 0; x < data.length; x++){
            const title = data[x].title;
            const description = data[x].description;
            const file = data[x].file;
            let formData = new FormData();
            formData.append('name', title);
            formData.append('description', description);
            formData.append('file', file[0]);
            axios.post('https://backend-393j.onrender.com/reference/imageUpload', 
            formData, {headers}).then((dat)=> console.log(dat))
            .catch((error)=> console.log(error));
        }
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const headers = {authorization: token ? `Bearer ${JSON.parse(token)}` : ""}
        await uploadReference(allReference, headers);
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
                {layoutLength.map((num, i)=> {
                    return(<div className="reference_image_card" key={i}>
                    <input  name="file" onChange={(e)=> handleFile(e, i)} type="file" id={i}/>
                    <label htmlFor={i}>
                        <div  className="change_reference_image flex_show_column offUpload">
                            <img src="svg/Upload_white.svg" alt=""/>
                            <p>Change image</p>
                        </div>
                    </label>
                    <img src="img/category6.png" alt=""/>
                    <div className="references_content_input flex_show_column">
                        <input onChange={(e)=> handleReference(e, i)} type="text" name="title" id=""/>
                        <textarea onChange={(e)=> handleReference(e, i)} name="description" id="" cols="30" rows="10"></textarea>
                        <div className="select_project_cover flex_show_row">
                            <input type="radio" name="selected" onChange={(e)=>handleCheck(e, i)} id=""/>
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