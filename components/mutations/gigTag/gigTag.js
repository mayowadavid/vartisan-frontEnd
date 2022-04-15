import { gql } from "@apollo/client"
export const CREATE_TAG = gql `
mutation CREATETAG($createtag: CreateGigTagInput!){
    createGigTag(createGigTagInput: $createtag){
    	id
        name
        gigId
        }
  }
`