import { gql } from "@apollo/client"
export const CREATE_GIG_FORMAT = gql `
mutation CREATE_FORMAT($createFormat:  CreateGigformatInput!){
  createGigformat(createGigformatInput: $createFormat){
    id
    ai
    psd
    swf
    blend
    jpg
    png
  }
}`