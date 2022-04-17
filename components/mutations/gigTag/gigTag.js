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

export const UPDATE_TAG = gql `
mutation UPDATE_TAG($updateTag: UpdateGigTagInput!){
  	updateGigTag(updateGigTagInput: $updateTag){
    id
    name
    gigId
  }
}`