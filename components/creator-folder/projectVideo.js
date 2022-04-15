import React, { useContext, useState } from 'react';
import { MainContext } from '../context/mainContext';
const ProjectVideo = () => {
    const [error, setError] = useState();
    const [temporaryVideo, setTemporaryVideo] = useState();
    const {gig}= useContext(MainContext);
    const { gigVideo } = gig;
    const handleFile = (e) => {
        e.preventDefault();
        const {files} = e.target;
        if(files){
        let selected = files[0];
        let types = ['video/mpeg', 'video/mp4'];
        let fileType = selected !== undefined ? types.includes(selected.type): setError("unsupported Video type* accepted Video 'video/mpeg', 'video/mp4'");
        let FileSize = "5000000";
        let filteredVideoSize = fileType == true ? selected.size < FileSize : setError("file too large *5mb minimum"); 
        let hold = filteredVideoSize == true && (URL.createObjectURL(selected)); 
        hold !== undefined && hold;
        setTemporaryVideo(hold);
        gigVideo = files;
        URL.revokeObjectURL(selected);   
        }
  };

    return(<div className="gallery_display">
                {temporaryVideo === undefined && (
                <div className="image_wrapper remove_margin flex_show_column">
                <input onChange={handleFile} name="file" type="file" id="file"/>
                <label htmlFor="file">
                <img src="/svg/Video.svg" alt=""/>
                <p>Drag video here or</p> 
                <p>browse</p> 
                </label>
                </div>)}
                {temporaryVideo !== undefined &&
                    (<>
                    <input onChange={handleFile} name="file" type="file" id="file"/>
                    <label htmlFor="file">
                    <video width="750" height="500" controls >
                        <source src={temporaryVideo} type="video/mp4"/>
                    </video>
                    </label>
                    </>)
                }
                <div className="gallery_name">
                    <input type="text" placeholder="Project description" name="" id=""/>
                </div>
                <div className="gallery_selector flex_show_row">
                    <input type="radio"/> <p>Set as video cover</p>
                </div>
           </div>);
}

export default ProjectVideo;