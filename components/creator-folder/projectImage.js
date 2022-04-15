import React, { useContext, useState } from 'react';
import { MainContext } from '../context/mainContext';

const ProjectImage = ({data, i}) => {
    const [error, setError] = useState();
    const [temporaryImage, setTemporaryImage] = useState();
    const {gig}= useContext(MainContext);
    const { gigGallery } = gig;
    const handleFile = (e, i) => {
        const {files} = e.target;
        if(files){
        let selected = files[0];
        let types = ['image/jpeg', 'image/png'];
        let fileType = selected !== undefined ? types.includes(selected.type): setError("unsupported image type* accepted image jpg/png");
        let FileSize = "5000000";
        let filteredImageSize = fileType == true ? selected.size < FileSize : setError("file too large *5mb minimum"); 
        let hold = filteredImageSize == true && (URL.createObjectURL(selected)); 
        hold !== undefined && hold;
        setTemporaryImage(hold);
        gigGallery[i] = {...gigGallery[i], file: files}
        URL.revokeObjectURL(selected);   
        }
  };
  const handleNameChange = (e, i) => {
      e.preventDefault();
      const {name, value} = e.target;
      gigGallery[i] = {...gigGallery[i], name: value}
  }
  const handleCheck = (e, i) => {
    const {name, checked} = e.target;
    gigGallery[i] = {...gigGallery[i], [name]: checked}
  }

    return (
        <div className="gallery_display">
            {temporaryImage === undefined && (
            <div className="image_wrapper remove_margin flex_show_column">
            <input onChange={(e)=>handleFile(e, i)} name="file" type="file" id={i}/>
            <label htmlFor={i}>
            <img src="/svg/image_alt.svg" alt=""/>
            <p>Drag Image here or</p>
            <p>browse</p>
            </label>
            </div>)}
            {temporaryImage !== undefined &&
                (<>
                <input onChange={(e)=>handleFile(e, i)} name="file" type="file" id="file"/><label htmlFor="file">
                <img onChange={(e)=>handleFile(e, i)} src={temporaryImage} alt=""/>
                </label>
                </>)
            }
            <div className="gallery_name">
                <input type="text" name="name" onChange={(e)=>handleNameChange(e, i)} placeholder="Project description" name="" id="" />
            </div>
            <div className="gallery_selector flex_show_row">
                <input name="default" onChange={(e)=>handleCheck(e, i) } type="radio"/> <p>Set as project cover</p>
            </div>
        </div>
    );
}

export default ProjectImage;