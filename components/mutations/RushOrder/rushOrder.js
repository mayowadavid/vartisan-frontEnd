import { gql } from "@apollo/client"
export const CREATE_RUSH_ORDER = gql `
mutation CREATE_RUSH_ORDER($createRush:  CreateRushOrderInput!){
  createRushOrder(createRushOrderInput: $createRush){
    id
    status
    price
    deliveryPeriod
  }
}`