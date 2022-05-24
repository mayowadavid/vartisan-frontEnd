import React, { useContext, useEffect, useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { MainContext } from '../context/mainContext';

const ClientDescription = () => {
    const mdParser = new MarkdownIt(/* Markdown-it options */);
  // Finish!
    const [contentHtml, setContentHtml] = useState('');
    const [plainMarkDown, setPlainMarkDown] = useState('')
    const [progress, setProgress] = useState(false);
    const { userProfile, setUserProfile, handleEditPop, updateProfile } = useContext(MainContext);

    const handleEditorChange = ({ html, text }) => {
    setContentHtml(html);
    const newValue = text.replace(/\d/g, "");
    setPlainMarkDown(newValue);
    setUserProfile({...userProfile, description: html, descriptionMarkDown: newValue})
    }

    useEffect(()=> {
        const { descriptionMarkDown } = userProfile;
        if( descriptionMarkDown !== null ){
            setPlainMarkDown(descriptionMarkDown);
        }
    }, [userProfile])

    const handleSubmit = async (e) => {
        e.preventDefault();
        await setProgress(!progress);
        const { id, description, descriptionMarkDown } = userProfile;
        const { data, error } = await updateProfile({
            variables: {
                profileInput: {
                    id,
                description, 
                descriptionMarkDown
            }
        }});
        
        await data?.updateProfile?.id !== undefined && setProgress(!progress);
        await data?.updateProfile?.id !== undefined && handleEditPop();
        await error !== undefined && setProgress(!progress);
    }
    console.log(progress);
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
                    <MdEditor style={{ height: '300px' }} renderHTML={text => mdParser.render(text)} value={plainMarkDown} onChange={handleEditorChange} />
                </div>
                <div className="reference_submit_button flex_show_row remove_margin border">
                    <p onClick={handleEditPop}>Discard</p>
                    {
                        progress == true ? <p className="loader"><img src="svg/white-loading.svg" /></p>:
                        <p onClick={handleSubmit}>Save</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default ClientDescription;