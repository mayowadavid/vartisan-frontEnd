import { gql } from "@apollo/client"

export const UPDATE_PROFILE = gql `
mutation UPDATE_PROFILE($profileInput: UpdateProfileInput!){
    updateProfile(updateProfileInput: $profileInput){
      id
      firstName
      lastName
      language
    }
  }`