import React, { useState } from 'react';
import ClientHeader from './clientHeader';
import ClientMobileHeader from './clientMobileHeader';
import Footer from './../general-folder/footer';
import client from '../Apollo/ApolloClient';
import gql from 'graphql-tag';
import {useMutation, useQuery} from '@apollo/client';

const Favorite = () => {
    const [image, setImage] = useState ();

    const UPLOAD_FILE = gql `
    mutation UploadFile ($uploadFileInput: Upload!){
        uploadFile (uploadFileInput: $uploadFileInput){
            key
            url
        }
    }
    `
const CREATE_USER = gql `
mutation CreateUserInput($createUserInput: CreateUserInput!){
    createUser(createUser: $createUserInput){
      email
      password
    }
  }
`

const datum = {
    email: "andrew@gmail.com",
    userName: "andrew",
    password: "123454"
  }

const [create, {data}] = useMutation(CREATE_USER, {
    variables: {
        createUserInput: datum
    },
    onError: (error) => {
        if (error) {
            console.log(error)
        }
    }
});


    const file = (e) => {
        e.preventDefault();
        const {value} = e.target;
        setImage(value);

    }

    const [upload] = useMutation(UPLOAD_FILE, {
        variables: {
            uploadFileInput: image
        },
        onError: (error) => {
            if (error) {
                console.log(error)
            }
        }
    });

    const uploadImage = (e) => {
        e.preventDefault();
        upload();
        console.log(data);
    }

  return (
    <div className="Category_page_wrapper">
        <ClientHeader />
        <ClientMobileHeader />
        <div className="favorite_container">
            <div className="favorite_wrapper">
                <div className="favorite_header">
                    <p>Favorite Project</p>
                </div>
                <div> <input type="file" onChange={file} /></div>
                <button onClick={uploadImage}> Submit </button>
                <div className="favorite_body">
                    <div className="filtered_card">
                        <img src="img/featured.png" alt=""/>
                        <div className="filtered_content">
                            <div className="filtered_image">
                                <img src="img/featured.png" alt=""/>
                            </div>
                            <div className="filtered_title">
                                <p>logo editing</p>
                                <p>Micheal John</p>
                                <div className="gig_creator_detail flex_show_row">
                                    <img src="img/featured.png" alt=""/>
                                    <p>Micheal John</p>
                                </div>
                            </div>
                            <div className="filtered_price">
                                <p>from</p>
                                <p>$40</p>
                            </div>
                        </div>
                    </div>
                    <div className="filtered_card">
                        <img src="img/featured.png" alt=""/>
                        <div className="filtered_content">
                            <div className="filtered_image">
                                <img src="img/featured.png" alt=""/>
                            </div>
                            <div className="filtered_title">
                                <p>logo editing</p>
                                <p>Micheal John</p>
                                <div className="gig_creator_detail flex_show_row">
                                    <img src="img/featured.png" alt=""/>
                                    <p>Micheal John</p>
                                </div>
                            </div>
                            <div className="filtered_price">
                                <p>from</p>
                                <p>$40</p>
                            </div>
                        </div>
                    </div>
                    <div className="filtered_card">
                        <img src="img/featured.png" alt=""/>
                        <div className="filtered_content">
                            <div className="filtered_image">
                                <img src="img/featured.png" alt=""/>
                            </div>
                            <div className="filtered_title">
                                <p>logo editing</p>
                                <p>Micheal John</p>
                                <div className="gig_creator_detail flex_show_row">
                                    <img src="img/featured.png" alt=""/>
                                    <p>Micheal John</p>
                                </div>
                            </div>
                            <div className="filtered_price">
                                <p>from</p>
                                <p>$40</p>
                            </div>
                        </div>
                    </div>
                    <div className="filtered_card">
                        <img src="img/featured.png" alt=""/>
                        <div className="filtered_content">
                            <div className="filtered_image">
                                <img src="img/featured.png" alt=""/>
                            </div>
                            <div className="filtered_title">
                                <p>logo editing</p>
                                <p>Micheal John</p>
                                <div className="gig_creator_detail flex_show_row">
                                    <img src="img/featured.png" alt=""/>
                                    <p>Micheal John</p>
                                </div>
                            </div>
                            <div className="filtered_price">
                                <p>from</p>
                                <p>$40</p>
                            </div>
                        </div>
                    </div>
                    <div className="filtered_card">
                        <img src="img/featured.png" alt=""/>
                        <div className="filtered_content">
                            <div className="filtered_image">
                                <img src="img/featured.png" alt=""/>
                            </div>
                            <div className="filtered_title">
                                <p>logo editing</p>
                                <p>Micheal John</p>
                                <div className="gig_creator_detail flex_show_row">
                                    <img src="img/featured.png" alt=""/>
                                    <p>Micheal John</p>
                                </div>
                            </div>
                            <div className="filtered_price">
                                <p>from</p>
                                <p>$40</p>
                            </div>
                        </div>
                    </div>
                    <div className="filtered_card">
                        <img src="img/featured.png" alt=""/>
                        <div className="filtered_content">
                            <div className="filtered_image">
                                <img src="img/featured.png" alt=""/>
                            </div>
                            <div className="filtered_title">
                                <p>logo editing</p>
                                <p>Micheal John</p>
                                <div className="gig_creator_detail flex_show_row">
                                    <img src="img/featured.png" alt=""/>
                                    <p>Micheal John</p>
                                </div>
                            </div>
                            <div className="filtered_price">
                                <p>from</p>
                                <p>$40</p>
                            </div>
                        </div>
                    </div>
                    <div className="filtered_card">
                        <img src="img/featured.png" alt=""/>
                        <div className="filtered_content">
                            <div className="filtered_image">
                                <img src="img/featured.png" alt=""/>
                            </div>
                            <div className="filtered_title">
                                <p>logo editing</p>
                                <p>Micheal John</p>
                                <div className="gig_creator_detail flex_show_row">
                                    <img src="img/featured.png" alt=""/>
                                    <p>Micheal John</p>
                                </div>
                            </div>
                            <div className="filtered_price">
                                <p>from</p>
                                <p>$40</p>
                            </div>
                        </div>
                    </div>
                    <div className="filtered_card">
                        <img src="img/featured.png" alt=""/>
                        <div className="filtered_content">
                            <div className="filtered_image">
                                <img src="img/featured.png" alt=""/>
                            </div>
                            <div className="filtered_title">
                                <p>logo editing</p>
                                <p>Micheal John</p>
                                <div className="gig_creator_detail flex_show_row">
                                    <img src="img/featured.png" alt=""/>
                                    <p>Micheal John</p>
                                </div>
                            </div>
                            <div className="filtered_price">
                                <p>from</p>
                                <p>$40</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
        <Footer />
    </div>
  )
}

export default Favorite;