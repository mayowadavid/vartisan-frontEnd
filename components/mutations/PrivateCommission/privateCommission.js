import { gql } from "@apollo/client"

export const CREATE_PRIVATE_COMMiSSION = gql `
mutation CREATE_Private_Commission($createPrivateCommission:  CreatePrivateCommissionInput!){
  createPrivateCommission(createPrivateCommissionInput: $createPrivateCommission){
    id
    status
    price
    deliveryPeriod
  }
}`