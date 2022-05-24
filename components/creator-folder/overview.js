import React, { useContext, useState, useEffect } from 'react'
import { MainContext } from '../../components/context/mainContext'
import {useMutation, useQuery} from '@apollo/client';
import { CREATE_GIG, UPDATE_GIG } from '../mutations/Gig/gig';
import { CREATE_TAG } from '../mutations/gigTag/gigTag';
import { CREATE_GIG_FORMAT } from '../mutations/gigFormat/gigFormat';
import { clean } from '../functions/functions';

const Overview = () => {
    
   const {
       category, 
       gig, 
       setGig, 
       setPricing, 
       setOverview, 
       initialState, 
       updateGigFormat,
       updateGigTag,
       updateGig
    } = useContext(MainContext);
   const [tag, setTag] = useState({name: ""});
   const [rotate, setRotate] = useState(false);
   const [secondRotate, setSecondRotate] = useState(false);
   const [allCategory, setAllCategory] = useState([])
   const [subCategory, setSubCategory] = useState();
   const [tagHolder, setTagHolder] = useState();
   const [error, setError] = useState();
   const [categoryIndex, setCategoryIndex] = useState(0);
   
    const {gigFormat} = gig;
    const newFormat = clean({...gigFormat});
    const reFormat = {...initialState.gigFormat, ...newFormat};
    const {ai, psd, swf, gif, blend, bmpr, eps, jpg, fig, ico, png, other, } = reFormat;
   useEffect(()=>{
    if(category !== undefined){const { categories } = category;
    setAllCategory(categories);
    const subCategory = categories?.subCategory !== undefined && categories?.subCategory[categoryIndex];
    setSubCategory(subCategory);}
   }, [category, categoryIndex]);

useEffect(()=> {
    if(gig.id !== ""){
        const { gigTag } = gig;
            gigTag.length !== 0 && setTagHolder(gigTag);
    }
}, [gig])

const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setGig({...gig, [name]: value});
}

const handleCategory = (e) => {
    e.preventDefault();
    const { categories } = category;
    const {value} = e.target;
    const index = categories.findIndex((data)=> data.name == value);
    const { id } = categories.find((data)=> data.name === value);
    setCategoryIndex(index);
    setGig({...gig, categoryId: id});
}

const handleSubCategory = (e) => {
    e.preventDefault()
    const {value} = e.target;
    const { id } = subCategory.find((data)=> data.name === value);
    setGig({...gig, subCategoryId: id});
}

const handleCheck = (e) => {
    const {name, checked} = e.target;
    let {gigFormat} = gig;
    gigFormat = {...gigFormat, [name]: checked};
    setGig({...gig, gigFormat});
}

const tagSubmit = (e) => {
    e.preventDefault();
    const {gigTag} = gig;
    const {name, value} = e.target;
    setTag({[name]: value});
    if(gigTag.length !== 0){
        const submitTags = gigTag.find(({name})=> name == tag.name);
        console.log(tag);
        console.log(gigTag);
        console.log(submitTags);
        submitTags !== undefined || tag.name == " " ? setError("Tag already exists") : (gigTag = [...gigTag, tag]);
        error !== undefined && setError();
        setTagHolder(gigTag);
        setTag({[name]: value});
        setGig({...gig, gigTag});
        return setTag({name: ""});
    }else {
        tag.name !== " " && 
        (gigTag = [...gigTag, tag]),
        setTagHolder(gigTag),
        setTag({[name]: value}),
        setGig({...gig, gigTag}),
        setTag({name: ""});
    }
}

const tagChanger = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setTag({[name]: value});
}
const deleteTag = (e, id) => {
    e.preventDefault();
    let {gigTag} =gig;
    const tagRemoved = gigTag.filter(({name})=>{
        return name !== id;
    })
    gigTag = tagRemoved;
    setTagHolder(tagRemoved);
    return setGig({...gig, gigTag});
}

const handleArrow = (e) => {
    e.preventDefault();
    setRotate(!rotate);
}

const handleSecondArrow = (e) => {
    e.preventDefault();
    setSecondRotate(!secondRotate);
}

const [createGig, {data: createGigData }] = useMutation(CREATE_GIG, {
    onCompleted: (data) => {
        if(data){
            console.log(data);
        const { creategig } = data;
        const { id } = creategig;
        setGig({...gig, id});
        }
    },
    onError: (error) => {
        console.log(error)
    }
});

const [createGigFormat, {data: createFormatData}] = useMutation(CREATE_GIG_FORMAT, {
    onCompleted: (data) => {
        if(data){
            console.log(data);
        }
    },
    onError: (error) => {
        console.log(error)
    }
})

const [createGigTag, {data: createTagData}] = useMutation(CREATE_TAG, {
    onCompleted: (data) => {
        console.log(data);
    },
    onError: (error) => {
        console.log(error)
    }
})

const submitTags = async (dataholder, tag) => {
    for (let x = 0; x < tag.length; x++){
        const name = tag[x].name;
        createGigTag({
            variables: {
                createtag: {
                    name,
                gigId: dataholder.id,
            }
            }
        })
    }
}

const updateTags = async (dataholder, tag) => {
    for (let x = 0; x < tag.length; x++){
        const name = tag[x].name;
        const id= tag[x].id;
        updateGigTag({
            variables: {
                updateTag: {
                    id,
                    name,
                gigId: dataholder.id,
            }
            }
        })
    }
}

const overviewSubmit = async (e) => {
    e.preventDefault();
    const { 
        name, 
        categoryId, 
        subCategoryId, 
        gigTag,
        gigFormat,
        gigId } = gig;
    if(gig.id == ""){
        let {data: formatHolder} = await createGigFormat({
            variables: {
                createFormat: { ...gigFormat }
            }
        })
    const { createGigformat } = await formatHolder;
    const {data: gigHolder, error} = await createGig({
        variables: {
            createGig: { 
            name,
            categoryId,
            subCategoryId,
            gigFormatId: createGigformat.id,
            }
        }
    })
    gigHolder !== undefined && console.log(gigHolder);
    error !== undefined && console.log(error.message);
    const { creategig } = await gigHolder;
    await gigTag.length !== 0 && submitTags(creategig, gigTag);
    setPricing(true);
    setOverview(false);
    } else if(gigFormat.id == undefined && gig.id !== undefined ){
        let {data: formatHolder} = await createGigFormat({
            variables: {
                createFormat: { ...gigFormat }
            }
        })
        const { createGigformat } = await formatHolder;
        let { data: gigHolder } = await updateGig({
            variables: {
                updateGig: { 
                id: gig.id,
                name,
                categoryId,
                subCategoryId,
                gigFormatId: createGigformat.id,
                }
            }
        })
    const tagsWithoutId = await gigTag.filter((noId)=> noId.id == undefined);
    await tagsWithoutId !== undefined && submitTags(gig, tagsWithoutId);
    const tagsWithId = await gigTag.filter((noId)=> noId.id !== undefined); 
    await tagsWithId !== undefined && updateTags(gig, tagsWithId);
    setPricing(true);
    setOverview(false);
    } else{
        let cleanObj = {...gigFormat};
        delete cleanObj['__typename'];
        let {data: formatHolder, error} = await updateGigFormat({
            variables: {
                updateFormat: {...cleanObj}
            }
        })
        const { updateGigformat } = await formatHolder;
        const { id } = await updateGigformat;
        let { data: gigHolder } = await updateGig({
            variables: {
                updateGig: { 
                id: gig.id,
                name,
                categoryId,
                subCategoryId,
                gigFormatId: id,
                }
            }
        })
    const tagsWithoutId = await gigTag.filter((noId)=> noId.id == undefined);
    console.log(tagsWithoutId);
    await tagsWithoutId !== undefined && submitTags(gigHolder.updateGig, tagsWithoutId);
    const tagsWithId = await gigTag.filter((noId)=> noId.id !== undefined); 
    await tagsWithId !== undefined && updateTags(gigHolder.updateGig, tagsWithId);
    setPricing(true);
    setOverview(false);
    }
}


const nextPage = (e) => {
    e.preventDefault();
    setPricing(true);
    setOverview(false);
}
   
  return (
    <div className="creator_manage_gig">
                <div className="gig_project_control flex_show_row">
                    <div className="project_control_container">
                        <div className="control_line"></div>
                        <div className="gig_project_row flex_show_row">
                            <div className="gig_tag_column flex_show_column remove_margin">
                                <img src="/svg/pen.svg" alt=""/>
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
                                <img src="/svg/mark.svg" alt=""/>
                                <p>Gallery</p>
                            </div>
                        </div>
                    </div>
                    <div className="project_submit project_submit_header flex_show_row">
                        <p>Save as Draft</p>
                        <p onClick={ gig.id !== "" ? nextPage : overviewSubmit }>Save & Review</p>
                    </div>
                </div>
                <div className="creator_wrap_holder flex_show_row">
                    <div className="project_gig_container">
                        <div className="gig_project_body shadow">
                            <div className="gig_project_header under_line">
                                <p>Project Overview</p>
                            </div>
                            <div className="project_form">
                                <div className="hint_display_header flex_show_row">
                                    <p>Project title</p> <img src="/svg/info_circle.svg" alt=""/>
                                </div>
                                <span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit nec</p> </span>
                                <input type="text" value={gig?.name} name="name" onChange={handleChange} placeholder="Title of the project"/>
                            </div>
                            <div className="project_form">
                                <div className="hint_display_header flex_show_row">
                                    <p>Category</p> <img src="/svg/info_circle.svg" alt=""/>
                                </div>
                                <span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit nec</p> </span>
                                <div className="project_category_selector flex_show_row form_border">
                                    <div className={rotate == true ? "rotate_arrow": "project_arrow"}><img src="/svg/caret_down.svg" alt=""/></div> 
                                    <select name="categoryOption" defaultValue="Select Category" onClick={handleArrow} onChange={handleCategory}>
                                    <option defaultValue hidden>{(gig?.categoryId !== "" && gig?.category !== undefined) ? gig?.category.name: "Select Category"}</option>
                                        {
                                           allCategory !== undefined && 
                                           allCategory.map(({name, id}, i)=> {
                                                return (<option id={id} key={i}>{name}</option>)
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            {subCategory !== undefined || null && 
                            (<div className="project_form">
                                <div className="hint_display_header flex_show_row">
                                    <p>Main Type</p> <img src="/svg/info_circle.svg" alt=""/>
                                </div>
                                <span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit nec</p> </span>
                                
                                <div className="project_category_selector flex_show_row form_border">
                                <div className={secondRotate == true ? "rotate_arrow": "project_arrow"}><img src="/svg/caret_down.svg" alt=""/></div> 
                                
                                <select name="subCategoryOption" defaultValue="Select Sub-Category" onClick={handleSecondArrow} onChange={handleSubCategory}>
                                    <option defaultValue hidden>{(gig?.subCategoryId !== "" && gig?.subCategory?.name !== undefined) ? gig?.subCategory?.name: "select subCategory"}</option>
                                {subCategory?.map(({name}, i)=> { 
                                     return (<option key={i}>{name}</option> )
                                })}
                                </select>
                                </div>
                            </div>)}
                            <div className="project_form">
                                <div className="hint_display_header flex_show_row">
                                    <p>File Format</p> <img src="/svg/info_circle.svg" alt=""/>
                                </div>
                                <span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit nec</p> </span>
                                <div className="project_category_selector form_border">
                                    <div className="project_field_container flex_show_row">
                                        <div className="checkbox_wrapper remove_margin flex_show_row">
                                            <input name="ai" onChange={handleCheck} checked={ai} type="checkbox"/> <p>Ai</p>
                                        </div>
                                        <div className="checkbox_wrapper remove_margin flex_show_row">
                                            <input name="psd" onChange={handleCheck} checked={psd} type="checkbox"/> <p>PSD</p>
                                        </div>
                                        <div className="checkbox_wrapper remove_margin flex_show_row">
                                            <input name="swf" onChange={handleCheck} checked={swf} type="checkbox"/> <p>SWF</p>
                                        </div>
                                        <div className="checkbox_wrapper remove_margin flex_show_row">
                                            <input name="gif" onChange={handleCheck} checked={gif} type="checkbox"/> <p>Gif</p>
                                        </div>
                                        <div className="checkbox_wrapper remove_margin flex_show_row">
                                            <input name="blend" onChange={handleCheck} checked={blend} type="checkbox"/> <p>Blend</p>
                                        </div>
                                        <div className="checkbox_wrapper remove_margin flex_show_row">
                                            <input name="bmpr" onChange={handleCheck} checked={bmpr} type="checkbox"/> <p>Bmpr</p>
                                        </div>
                                        <div className="checkbox_wrapper remove_margin flex_show_row">
                                            <input name="eps" onChange={handleCheck} checked={eps} type="checkbox"/> <p>EPS</p>
                                        </div>
                                        <div className="checkbox_wrapper remove_margin flex_show_row">
                                            <input name="jpg" onChange={handleCheck} checked={jpg} type="checkbox"/> <p>Jpg</p>
                                        </div>
                                        <div className="checkbox_wrapper remove_margin flex_show_row">
                                            <input name="fig" onChange={handleCheck} checked={fig} type="checkbox"/> <p>Fig</p>
                                        </div>
                                        <div className="checkbox_wrapper remove_margin flex_show_row">
                                            <input name="ico" onChange={handleCheck} checked={ico} type="checkbox"/> <p>ICO</p>
                                        </div>
                                        <div className="checkbox_wrapper remove_margin flex_show_row">
                                            <input name="png" onChange={handleCheck} checked={png} value={png} type="checkbox"/> <p>Png</p>
                                        </div>
                                        <div className="checkbox_wrapper remove_margin flex_show_row">
                                            <input name="other" onChange={handleCheck} checked={other} type="checkbox"/> <p>Other</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project_form">
                                <div className="hint_display_header flex_show_row">
                                    <p>Project Tags</p> <img src="/svg/info_circle.svg" alt=""/>
                                </div>
                                <span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit nec</p> </span>
                                <div className="project_category_tag flex_show_row form_border">
                                    <form onSubmit={tagSubmit}>
                                        <div className="tags remove_margin">
                                            <input type="text" name="name" value={tag.name} onChange={tagChanger}/>
                                        </div>
                                    </form>
                                    {tagHolder !== undefined && tagHolder.map(({name}, i)=>{
                                        return (
                                            <div onClick={(e)=>deleteTag(e, name)} key={i} className="project_tags remove_margin">
                                                <p>{name}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="project_submit flex_show_row">
                                <p>Save as Draft</p>
                                <p onClick={overviewSubmit}>Continue</p>
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

export default Overview;