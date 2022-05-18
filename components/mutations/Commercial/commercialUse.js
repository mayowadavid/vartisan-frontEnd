import { gql } from "@apollo/client"

export const CREATE_COMMERCIAL_USE = gql `
mutation CREATE_COMMERCIAL_USE($createCommercialUse: CreateCommercialUseInput!){
  createCommercialUse(createCommercialUseInput: $createCommercialUse){
    id
    status
    price
    deliveryPeriod
  }
}`