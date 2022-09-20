import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { MainContext } from '../context/mainContext'
import { useQuery } from '@apollo/client'
import { FETCH_CATEGORIES } from '../queries/category/category'

const Category = () => {
    
   const [singleCategory, setSingleCategory] = useState();
   const {category, setCategory,} = useContext(MainContext);
    const{data, loading} = useQuery(FETCH_CATEGORIES,
        {onCompleted: (data) => {
            if(data){
            setCategory(data);
            const {categories} = data;
            setSingleCategory({...categories[0]});}
        },
        onError: (error) => {
            console.log(error);
    }});
    
  return (
    <div className="filtered_category_body">
        <div className="category_row">
            <div className="category_banner">
                <div className="category_banner_content">
                    <p>Categories</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat tristique et ac facilisi
                        sodales odio.</p>
                </div>
                <div className="category_image_wrapper">
                    <img src="img/category_banner.png" alt=""/>
                </div>
            </div>
            <div className="category_filter_header">
                <div className="category_slug">
                    <p>Home {">"}</p>
                    <p>Categories</p>
                </div>
                <div className="category_filter_wrapper">
                    <div className="category_filter">
                        <div className="price_range">
                                    <div className="range_select">
                                        <p>Price range</p><span><img id="price_arrow" src="img/Arrow - Down 2.png" alt=""/></span>
                                    </div>
                                    <div className="range_option">
                                        <p>Drag to set the price</p>
                                        <div className="divider"></div>
                                        <div className="range_drag">
                                            <div className="wrapper">
                                                <div className="range-slider">
                                                    <input type="text" className="js-range-slider" />
                                                </div>
                                                <div className="divider"></div>
                                                <div className="extra_controls form-inline">
                                                    <div className="form-group">
                                                        <div className="input_wrapper">
                                                                <p>$</p><input type="text" className="js-input-from form-control"/>
                                                        </div>
                                                        <div className="middle">-</div>
                                                        <div className="input_wrapper">
                                                                <p>$</p><input type="text" className="js-input-to form-control" />
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="range_button">
                                                        <p>Apply</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                        <div className="category_selection">
                            <div className="filter_select">
                                <p>Filters</p><span><img id="arrow" src="img/Arrow - Down 2.png" alt=""/></span>
                            </div>
                            <div className="filter_option">
                                <p>Animation</p>
                                <p>Commercial Use</p>
                                <p>NSFW</p>
                                <p>Popular</p>
                                <p>Newest</p>
                            </div>
                        </div>
                    </div>
                    <div className="content_search">
                            <input type="text" placeholder="Search by tags/users/keywords"/>
                            <p>Search</p>
                    </div>
                </div>
                <div className="category_sort">
                    <p>Sort By</p><p>Recommended</p><span><img id="price_arrow" src="Arrow - Down 2.png" alt=""/></span>
                </div>
            </div>
        </div>
        <div className="displayed_category">
            <div className="category_displayed_row">
                {singleCategory !== undefined && singleCategory?.gig?.map((data, i)=> {
                    const { name, user, gigGallery, amount } = data;
                    return (<div className="filtered_card" key={i}>
                    <Link href={`/${user?.userName}/${name}`}><a>
                    <img src={gigGallery[0]?.file[0] !== undefined ? gigGallery[0]?.file[0]?.image : "../../svg/no_caption.svg"} alt=""/>
                    </a>
                    </Link>
                    <div className="filtered_content">
                        <div className="filtered_image">
                            <img src={user?.profile?.file?.image !== undefined ? user?.profile?.file?.image :"svg/avatar.svg"} alt=""/>
                        </div>
                        <div className="filtered_title">
                            <p>{ name }</p>
                            <p>{user?.userName}</p>
                            <div className="gig_creator_detail flex_show_row">
                                <img src={user?.profile?.file?.image !== undefined ? user?.profile?.file?.image :"svg/avatar.svg"} alt=""/>
                                <p>{user?.userName}</p>
                            </div>
                        </div>
                        <div className="filtered_price">
                            <p>from</p>
                            <p>{`$${amount}`}</p>
                        </div>
                    </div>
                    </div>)
                })}
            </div>
        </div>
    </div>
  )
}

export default Category