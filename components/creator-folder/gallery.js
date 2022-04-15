import React, { useState } from 'react';
import ProjectImage from './projectImage';
import ProjectVideo from './projectVideo';

const Gallery = () => {
    
    const [layoutLength, setLayoutLength] = useState(["1", "2", "3"]);


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
                    <img src="/svg/mark.svg" alt=""/>
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
                    <img src="/svg/pen.svg" alt=""/>
                    <p>Gallery</p>
                </div>
            </div>
        </div>
        <div className="project_submit project_submit_header flex_show_row">
            <p>Save as Draft</p>
            <p>Publish</p>
        </div>
    </div>
    <div className="creator_wrap_holder flex_show_row">
        <div className="project_gig_container">
            <div className="gig_project_body shadow">
                <div className="gig_project_header under_line">
                    <p>Create a stunning project gallery</p>
                </div>
                <div className="project_summary">
                    <div className="project_description_header">
                        <p>Project images</p>
                        <p>upload up to 5 images (.jpg or .png) Files must be less than 10MB each and less than 400 pixels</p>
                    </div>
                    <div className="gallery_row flex_show_row">
                        {
                            layoutLength.length !== 0 && layoutLength.map((data, i)=>{
                                return (
                                    <ProjectImage i={i} key={i} />
                                )
                            })
                        }
                    </div>
                    <div className="project_description_header">
                        <p>Project video</p>
                        <p>Upload up to 5 images (.mp4 or .webm) Files must be less than 10MB each and less than 400 pixels</p>
                    </div>
                    <div className="gallery_row flex_show_row">
                        <ProjectVideo />
                    </div>
                </div>
                <div className="project_submit flex_show_row">
                    <p>Save as Draft</p>
                    <p>Publish</p>
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

export default Gallery