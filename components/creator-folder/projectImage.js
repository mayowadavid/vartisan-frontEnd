import React, { useContext, useState } from 'react';
import { MainContext } from '../context/mainContext';

const ProjectImage = ({data, i}) => {
    const [error, setError] = useState();
    const [temporaryImage, setTemporaryImage] = useState();
    const [projectName, setProjectName] = useState({name: ''});
    const [selected, setSelected] = useState(false);
    const {gig, setGig}= useContext(MainContext);
    const { gigGallery, gigGalleryId } = gig;
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
        //clone due to no direct manipulation
        const temp = [...gigGallery];
        temp[i] = {...temp[i], file: files};
        gigGallery = [...temp];
        setGig({...gig, gigGallery});
        URL.revokeObjectURL(selected);   
        }
  };
  const handleNameChange = (e, i) => {
      e.preventDefault();
      const {name, value} = e.target;
      //clone due to no direct manipulation
      const temp = [...gigGallery];
      temp[i] = {...temp[i], name: value};
      gigGallery = [...temp];
      setGig({...gig, gigGallery});
      setProjectName({name: value});
  }
  const handleCheck = async(e, i) => {
    const {name, checked} = e.target;
    //clone due to no direct manipulation
    const temp = await [...gigGallery];
    const reset = await temp.map((d)=>{
        if(d.default !== undefined){
            d.default = false;
        }
        return d;
    } );
    reset[i] = {...reset[i], [name]: checked}
    gigGallery = [...reset];
    await setGig({...gig, gigGallery});
    await setSelected(!selected);
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
                <img onChange={(e)=>handleFile(e, i)} src={gigGalleryId !== "" ? gigGallery[i].image : temporaryImage} alt=""/>
                </label>
                </>)
            }
            <div className="gallery_name">
                <input type="text" id={i} value={gigGalleryId !== "" ? gigGallery[i].name : projectName.name} name="name" onChange={(e)=>handleNameChange(e, i)} placeholder="Project description" name="" id="" />
            </div>
            <div className="gallery_selector flex_show_row">
                <input name="default" id={i} checked={gigGalleryId !== "" ? gigGallery[i].default : selected } onChange={(e)=>handleCheck(e, i) } type="radio"/> <p>Set as project cover</p>
            </div>
        </div>
    );
}

export default ProjectImage;