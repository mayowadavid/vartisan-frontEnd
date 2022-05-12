import { gql } from "@apollo/client"

export const LOGIN = gql` 
query LOGIN($userInput: CreateUserInput!){
  loginUser(userData: $userInput){
    userName
    email
    createdAt
    password
    refreshToken
    refreshTokenExp
  }
}`;

export const CREATE_USER = gql`
mutation CreateUserInput($createUserInput: CreateUserInput!){
    createUser(createUser: $createUserInput){
    userName
    email
    password
    }
}
`

export const FETCH_USERS = gql `
    query {
      getAllUsers {
      email
      userName
      profileId
      createdAt
      profile {
        id
        firstName
        lastName
      }
    }
  }
`

export const Profile = gql`
query FETCH_PROFILE($userProfile: String!){
      profile( id: $userProfile ){
        id
    		userId
   			 user {
          id
          userName
          email
        }
      }
}`

export const FETCH_USER_BY_NAME = gql `
query FETCH_USER_BY_NAME($userName: String!){
  findUserByName( userName: $userName ){
        id
    		userName
    		profileId
   			 profile {
          id
          createdAt
          file {
            image
          }
          role
          description
          descriptionMarkDown
        }
      }
}`