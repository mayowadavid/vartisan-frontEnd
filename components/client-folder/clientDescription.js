import React, { useContext, useEffect, useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { useMutation } from '@apollo/client';
import { UPDATE_PROFILE } from '../queries/user/user';
import { MainContext } from '../context/mainContext';

const ClientDescription = ({handleEditPop}) => {
    const mdParser = new MarkdownIt(/* Markdown-it options */);
  // Finish!
    const [singleContent, setSingleContent] = useState();
    const {userData, setUserProfile, setProfileId, profileId, userDescription} = useContext(MainContext);

    const handleEditorChange = ({ html}) => {
    setSingleContent({...singleContent, body: html});
    }

    useEffect(()=> {
        // if(userDescription !== undefined || null){
        //     console.log(String.raw(userDescription));
        //     // const convert = String.raw(userDescription);
        //     // console.log(convert);
        //     // setSingleContent({...singleContent, body: convert});
        // }
    }, [userDescription])


    const [updateProfile, {data, loading}] = useMutation(UPDATE_PROFILE, {
        variables: {
            updateProfileInput: {
                id: profileId,
                description: singleContent !== undefined && singleContent.body.toString(),
            }
        },
        onCompleted: (data) => {
            data && handleEditPop();
            setUserProfile(data);
        },
        onError: (error) => {
            console.log(error);
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked");
        updateProfile();
    }
    return (
        <div className="references_pop_up flex_show_row">
            <div className="reference_pop_wrapper">
                <div className="reference_header_row border flex_show_row">
                    <div className="reference_header remove_margin">
                        <p>Create Album</p>
                    </div>
                    <div className="reference_cancel" onClick={handleEditPop}>
                        <img src="svg/close_small.svg" alt=""/>
                    </div>
                </div>
                <div className="markdown_header flex_show_column">
                    <label>Describe about yourself</label>
                    <label>Add your introduction to your profile. Markdown is enabled.</label>
                </div>
                <div className="markdown_body">
                    <MdEditor style={{ height: '300px' }} renderHTML={text => mdParser.render(text)} value={userDescription} onChange={handleEditorChange} />
                </div>
                <div className="reference_submit_button flex_show_row remove_margin border">
                    <p>Discard</p> <p onClick={handleSubmit}>Save</p>
                </div>
            </div>
        </div>
    );
}

export default ClientDescription;