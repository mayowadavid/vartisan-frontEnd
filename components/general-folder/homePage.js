import React, { useContext, useEffect } from 'react';
import HomeMobileHeader from './homeMobileHeader';
import Link from 'next/link';
import Footer from './footer';
import client from '../Apollo/ApolloClient';
import { gql } from "@apollo/client"
import { MainContext } from '../context/mainContext';
import HomeSideMenu from './homeSideMenu';

export default function HomePage() {
    const ALL_PROJECT = gql`query{
         GetAllprojects {
            id
            name
            employees {
            firstName
            lastName
            }
        }
    }`

    const {sideMenu} = useContext(MainContext);

    useEffect(async()=> {
       const {data} = await client.query({
           query: ALL_PROJECT
       })
       console.log(data);
    }, [])

  return (
    <div>
    {sideMenu == true && <HomeSideMenu /> }
    <HomeMobileHeader />
    <div className="body_wrapper">
    <div className="header">
            <div className="logo">VARTISAN</div>
            <div className="secondary_page">
                <p><a href="">FAQ</a></p>
                <p><a href="">Support</a></p>
                <p><a href="">How It Works</a></p>
            </div>
            <div className="authentication">
                <div className="auth"><p><Link href="/login"><a>Sign In</a></Link></p></div>
                <div className="auth"><p className="auth2"><Link href="/users/signup"><a>Sign up</a></Link></p></div>
            </div>
    </div> 
    <div className="mobile_banner_wrap remove_margin">
        <p>SPICE UP YOUR STREAM</p>
        <p>Searching For an Artist?</p>
        <div className="mobile_banner">
            <div className="mobile_banner1">
                <img src="img/image_header.png" alt=""/>
            </div>
                <div className="mobile_banner2">
                <img src="img/image_header2.png" alt=""/> 
                </div>
        </div>
        <div className="mobile_banner_footer remove_margin">
            <p>Choose from a wide range of categories to upgrade your content creation</p>
        </div>
        <div className="banner_action_button remove_margin flex_show_row">
            <p>Get Started</p>
            <p>How its Works</p>
        </div>
    </div>
    <div className="banner">
            <div className="banner_content">
                    <div className="banner_gradient"></div>
                <div className="banner_header">
                        <div className="header1">
                                <h4>SPICE UP YOUR STREAM</h4>
                            </div>
                            <div className="header2">
                                <h2>Searching For an Artist?</h2>
                            </div>
                            <div className="header3">
                                <p> Choose from a wide range of categories to upgrade 
                                    your content creation.</p>
                            </div>
                </div>
                <div className="banner_button">
                    <div className="banner_button1">
                        <p>Get Started</p>
                    </div>
                    <div className="banner_button2">
                        <p> How it Works</p>
                    </div>
                </div>
            </div>
            <div className="banner_image">
                <div className="banner_image_wrapper">
                    <div className="top_banner_image">
                        <div className="banner_background image1"> 
                        </div>
                        <div className="banner_background image2">
                        </div>                            
                    </div>
                        <div className="image_dispaly1">
                            <div className="image_container image_position1">
                                <img src="img/image_header.png" alt=""/> 
                            </div>
                        </div>
                            <div className="image_display2">
                            <div className="image_container image_position2">
                                    <img src="img/image_header2.png" alt=""/>
                            </div> 
                            </div>
                    
                </div>                       
            </div>
    </div>
    </div>
    <div className="featured">
        <div className="featured_wrapper">
            <div className="categories">
                <div className="featured_left_gradient"></div> 
                <div className="category_header">
                    <h3>Categories</h3>
                    <div className="divider"></div>
                </div>
                <div className="categories_wrapper">
                        <div className="category_card">
                        <Link href="/categories"><a>
                            <div className="card_shadow2"></div>
                            <div className="card_shadow1"></div>
                            <div className="card_container">
                                <div className="card_wrapper">
                                    <img src="img/category.png" alt=""/>
                                </div>
                                <h5>Logos</h5>
                            </div>
                        </a></Link>
                        </div>
                        <div className="category_card">
                            <Link href="/categories"><a>
                            <div className="card_shadow2"></div>
                            <div className="card_shadow1"></div>
                            <div className="card_container">
                                <div className="card_wrapper">
                                    <img src="img/category1.png" alt=""/>
                                </div>
                                <h5>Overlays</h5>
                            </div>
                            </a></Link>
                        </div>
                        <div className="category_card">
                            <div className="card_shadow2"></div>
                            <div className="card_shadow1"></div>
                            <div className="card_container">
                                <div className="card_wrapper">
                                    <img src="img/category2.png" alt=""/>
                                </div>
                                <h5>Alerts</h5>
                            </div>
                        </div>
                        <div className="category_card">
                            <div className="card_shadow2"></div>
                            <div className="card_shadow1"></div>
                            <div className="card_container">
                                <div className="card_wrapper">
                                    <img src="img/category3.png" alt=""/>
                                </div>
                                <h5>Scenes</h5>
                            </div>
                        </div>
                        <div className="category_card">
                            <div className="card_shadow2"></div>
                            <div className="card_shadow1"></div>
                            <div className="card_container">
                                <div className="card_wrapper">
                                    <img src="img/category4.png" alt=""/>
                                </div>
                                <h5>Transitions</h5>
                            </div>
                        </div>
                        <div className="category_card">
                            <div className="card_shadow2"></div>
                            <div className="card_shadow1"></div>
                            <div className="card_container">
                                <div className="card_wrapper">
                                    <img src="img/category5.png" alt=""/>
                                </div>
                                <h5>BGM</h5>
                            </div>
                        </div>
                        <div className="category_card">
                            <div className="card_shadow2"></div>
                            <div className="card_shadow1"></div>
                            <div className="card_container">
                                <div className="card_wrapper">
                                    <img src="img/category6.png" alt=""/>
                                </div>
                                <h5>Emotes</h5>
                            </div>
                        </div>
                        <div className="category_card">
                            <div className="card_shadow2"></div>
                            <div className="card_shadow1"></div>
                            <div className="card_container">
                                <div className="card_wrapper">
                                    <img src="img/category7.png" alt=""/>
                                </div>
                                <h5>Background Art</h5>
                            </div>
                        </div>
                </div>
                <div className="category_all">
                    <p>View All Categories</p>
                </div>
            </div>
            <div className="featured_category">
                <div className="category_right_gradient"></div>
                <div className="featured_header">
                    <h3>Featured Services</h3>
                    <div className="divider"></div>
                </div>
                <div className="featured_row">
                    <div className="featured_card">
                        <img src="img/featured.png" alt=""/>
                        <div className="featured_content">
                            <div className="gig_image">
                                <img src="img/featured.png" alt=""/>
                            </div>
                            <div className="gig_title">
                                <p>Micheal John</p>
                                <p>logo editing</p>
                            </div>
                            <div className="gig_price">
                                <p>from</p>
                                <p>$40</p>
                            </div>
                        </div>
                    </div>
                    <div className="featured_card">
                        <img src="img/featured1.png" alt=""/>
                        <div className="featured_content">
                            <div className="gig_image">
                                <img src="img/featured1.png" alt=""/>
                            </div>
                            <div className="gig_title">
                                <p>Micheal John</p>
                                <p>logo editing</p>
                            </div>
                            <div className="gig_price">
                                <p>from</p>
                                <p>$40</p>
                            </div>
                        </div>
                    </div>
                    <div className="featured_card">
                        <img src="img/featured2.png" alt=""/>
                        <div className="featured_content">
                            <div className="gig_image">
                                <img src="img/featured2.png" alt=""/>
                            </div>
                            <div className="gig_title">
                                <p>Micheal John</p>
                                <p>logo editing</p>
                            </div>
                            <div className="gig_price">
                                <p>from</p>
                                <p>$40</p>
                            </div>
                        </div>
                    </div>
                    <div className="featured_card">
                        <img src="img/featured3.png" alt=""/>
                        <div className="featured_content">
                            <div className="gig_image">
                                <img src="img/featured3.png" alt=""/>
                            </div>
                            <div className="gig_title">
                                <p>Micheal John</p>
                                <p>logo editing</p>
                            </div>
                            <div className="gig_price">
                                <p>from</p>
                                <p>$40</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </div>
    <div className="latest_deliveries">
        <div className="delivery_action">
            <div className="delivery_header1">
                <h3>Latest Deliveries</h3>
                <div className="divider"></div>
            </div>
            <div className="delivery_header2">
                <p><a href="">See all delivery</a></p>
            </div>
        </div>
        <div className="image_slides">
            <div className="delivery_card">
                <div className="delivery_container flex_show_row">
                    <div className="delivery_image">
                        <img src="img/delivery1.png" alt=""/>
                    </div>
                    <div className="delivery_wrapper">
                        <div className="delivery_avatar">
                            <img src="img/Rounded Rectangle 3.png" alt=""/>
                        </div>
                        <div className="delivery_details">
                            <p>Micheal John</p>
                            <p>50 minutes ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="delivery_card">
                <div className="delivery_container flex_show_row">
                    <div className="delivery_image">
                        <img src="img/delivery2.png" alt=""/>
                    </div>
                    <div className="delivery_wrapper">
                        <div className="delivery_avatar">
                            <img src="img/Rounded Rectangle 3.png" alt=""/>
                        </div>
                        <div className="delivery_details">
                            <p>Micheal John</p>
                            <p>50 minutes ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="delivery_card">
                <div className="delivery_container flex_show_row">
                    <div className="delivery_image">
                        <img src="img/delivery3.png" alt=""/>
                    </div>
                    <div className="delivery_wrapper">
                        <div className="delivery_avatar">
                            <img src="img/Rounded Rectangle 3.png" alt=""/>
                        </div>
                        <div className="delivery_details">
                            <p>Micheal John</p>
                            <p>50 minutes ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="delivery_card">
                <div className="delivery_container">
                    <div className="delivery_image">
                        <img src="img/delivery3.png" alt=""/>
                    </div>
                    <div className="delivery_wrapper">
                        <div className="delivery_avatar">
                            <img src="img/Rounded Rectangle 3.png" alt=""/>
                        </div>
                        <div className="delivery_details">
                            <p>Micheal John</p>
                            <p>50 minutes ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="visuals">
        <div className="visual_wrapper">
            <div className="visual_header">
                <h3>How It Works</h3>
                <div className="divider"></div>
            </div>
            <div className="visual_background"></div>
            <div className="mobile_visual_side">
                <div className="visual_outline_wrapper flex_show_row">
                    <div className="visual_outline"></div>
                    <div className="ribbon_wrapper">
                    <div className="ribbon_container">
                        <div className="icon_ribbon"></div>
                    </div>
                    <div className="ribbon_container">
                        <div className="icon_ribbon"></div>
                    </div>
                    <div className="ribbon_container">
                        <div className="icon_ribbon"></div>
                    </div>
                    <div className="ribbon_container">
                        <div className="icon_ribbon"></div>
                    </div>
                </div>
                </div>
                <div className="visual_container">
                    <div className="icon_card">
                        <div className="icon_background">
                            <img src="svg/project.svg" alt=""/>
                        </div>
                        <div className="mobile_visual">
                            <p>Choose a Project</p>
                            <p>Find the next thing you need to upgrade your twitch or youtube channel!</p>
                        </div>
                       
                    </div>
                    <div className="icon_card">
                        <div className="icon_background">
                                <img src="svg/submit.svg" alt=""/>
                        </div>
                        <div className="mobile_visual">
                            <p>Submit a request</p>   
                            <p>Fill in the details and submit a request for the project!</p>
                        </div>
                    </div>
                    <div className="icon_card">
                        <div className="icon_background">
                                <img src="svg/create.svg" alt=""/>
                            </div>
                            <div className="mobile_visual">
                                <p>Creator Accepts</p>
                                <p>Once the creator accepts your custom project they will begin on the work!</p>
                            </div>
                    </div>
                    <div className="icon_card">
                        <div className="icon_background">
                            <img src="svg/delivery.svg" alt=""/>
                        </div>
                        <div className="mobile_visual">
                            <p>Receive Delivery</p>
                            <p>When the delivery is ready the creator will upload it for you to approve!</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </div>
    <div className="faq">
        <div className="faq_row">
            <div className="faq_background"></div>
            <div className="faq_wrapper">
                <div className="faq_container">
                    <div className="faq_image1">
                        <img src="img/faq_image1.png" alt=""/>
                    </div>
                    <div className="faq_image2">
                        <img src="img/faq_image2.png" alt=""/>
                    </div>
                </div>
                <div className="faq_list">
                    <div className="faq_list_header">
                        <p>FREQUENTLY ASKED QUESTIONS</p>
                        <div className="divider"></div>
                    </div>
                    <div className="faq_dropDown">
                        <div className="faq_holder">
                                <h4>Are all  projects custom made for me?</h4>
                                <img src="img/Arrow (10).png" alt=""/>
                        </div>
                    </div>
                    <div className="faq_dropDown">
                            <div className="faq_holder">
                                    <h4>Can I sign up to offer my services as well?</h4>
                                    <img src="img/Arrow (10).png" alt=""/>
                            </div>
                    </div>
                    <div className="faq_dropDown">
                            <div className="faq_holder">
                                    <h4>What happens if the artist stops communicating?</h4>
                                    <img src="img/Arrow (10).png" alt=""/>
                            </div>
                    </div>
                    <div className="faq_dropDown">
                        <div className="faq_holder">
                                <h4>How long does it take for my work to be delivered?</h4>
                                <img src="img/Arrow (10).png" alt=""/>
                        </div>
                    </div>
                    <div className="faq_dropDown">
                        <div className="faq_holder">
                                <h4>What payment methods do you accept?</h4>
                                <img src="img/Arrow (10).png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="call_to_action">
        <div className="call_background">
            <div className="call_background"></div>
        </div>
        <div className="call_to_action_wrapper">
            <div className="call_to_action_container">
                <img src="img/CTA.png" alt=""/>
            </div>
            <div className="call_to_action_content">
                <p>Found something you need? Sign up now!</p>
                    <div className="call_button">Sign Up</div>
            </div>
        </div>
    </div>
    <Footer />
    </div>
  )
}
