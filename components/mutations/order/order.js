import { gql } from "@apollo/client"
export const CREATE_ORDER = gql `
mutation CREATE_ORDER($orderInput: CreateOrderInput!){
  createOrder(createOrderInput: $orderInput){
      id
    userId
    gigId
    date
    gigImage
    sellerId
    clientId
    revision
    orderStatus
    amount
    sourceFile
    commercial
    rushOrder
    privateOrder
    rushOrderAmount
    rushOrderDelivery
    commercialOrderAmount
    commercialOrderDelivery
    privateOrderAmount
    privateOrderDelivery
    end
  }
}`

export const CREATE_ORDER_REQUIREMENT = gql `
mutation CREATE_ORDER_REQUIREMENT($orderRequirement: CreateOrderRequirementInput!){
  createOrderRequirement(createOrderRequirementInput: $orderRequirement){
    id
    description
    reference
    color
    orderId
  }
}`

export const UPDATE_ORDER = gql `
mutation UPDATE_ORDER($orderUpdate: UpdateOrderInput!){
  updateOrder(updateOrderInput: $orderUpdate){
    id
    userId
    gigId
    name
    quantity
    category
    date
    orderStatus
    amount
    end
    revision
    rushOrder
    privateOrder
    commercial
    privateOrderAmount
    commercialOrderAmount
    rushOrderAmount
    privateOrderDelivery
    commercialOrderDelivery
    rushOrderDelivery
    orderRequirement {
      description
      reference
      color
    }
  }
}
`