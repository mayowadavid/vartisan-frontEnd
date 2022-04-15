import { gql } from "@apollo/client"

export const LOGIN = gql` query LOGIN($userEmail: String!) {
        loginUser(email: $userEmail) {
          id
          userName
          profile {
            id
          }
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
      password
      profileId
      profile {
        id
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
    		profileId
   			 profile {
          id
          role
          description
        }
      }
}`

export const UPDATE_PROFILE = gql `
 mutation UPDATE_PROFILE($updateProfileInput: UpdateProfileInput!) {
        updateProfile(updateProfileInput: $updateProfileInput) {
    			id
        	description
    			language
  }
}`