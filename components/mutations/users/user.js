import { gql } from "@apollo/client"
export const SignUp = gql `mutation userSignUp($userSignUp: CreateUserInput!){
    createUser(createUser: $userSignUp){
      userName
      email
      password
      createdAt
    }
  }`