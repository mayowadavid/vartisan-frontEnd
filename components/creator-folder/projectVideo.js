import React, { useContext, useState } from 'react';
import { MainContext } from '../context/mainContext';
const ProjectVideo = () => {
    const [error, setError] = useState();
    const [temporaryVideo, setTemporaryVideo] = useState();
    const initialState = {
        name: '',
        default: false
    }
    const [videoName, setVideoName] = useState(initialState);
    const {gig, setGig}= useContext(MainContext);
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
        const temp = {...gigVideo};
        gigVideo = {...temp, file: files};
        setGig({...gig, gigVideo});
        URL.revokeObjectURL(selected);   
        }
  };
  const handleChange = (e) => {
      e.preventDefault();
      const {name, value} = e.target;
      setVideoName({...videoName, [name]: value});
      const temp = {...gigVideo};
      gigVideo = {...temp, [name]: value};
        setGig({...gig, gigVideo});
  }

  const handleCheck = (e) => {
      const {name, checked} = e.target;
      const temp = {...gigVideo};
      console.log(e);
      console.log(checked);
      gigVideo = {...temp, [name]: checked};
      setGig({...gig, gigVideo});
  }

    return(<div className="gallery_display">
                {(temporaryVideo === undefined && gigVideo.length == 0) && (
                <div className="image_wrapper remove_margin flex_show_column">
                <input onChange={handleFile} name="file" type="file" id="video"/>
                <label htmlFor="video">
                <img src="/svg/Video.svg" alt=""/>
                <p>Drag video here or</p> 
                <p>browse</p> 
                </label>
                </div>)}
                {(temporaryVideo !== undefined || gigVideo.length > 0 ) &&
                    (<>
                    <input onChange={handleFile} name="video" type="file" id="video"/>
                    <label htmlFor="video">
                    <video width="750" height="500" controls >
                        <source src={gigVideo !== null ? gigVideo[0]?.file[0]?.video : temporaryVideo} type="video/mp4"/>
                    </video>
                    </label>
                    </>)
                }
                <div className="gallery_name">
                    <input type="text" value={gigVideo !== null ? gigVideo[0]?.name : videoName.name} onChange={handleChange} placeholder="Project description" name="name"/>
                </div>
                <div className="gallery_selector flex_show_row">
                    <input name="selected" value={videoName.default} onChange={handleCheck} id="video" type="radio"/> <p>Set as video cover</p>
                </div>
           </div>);
}

export default ProjectVideo;