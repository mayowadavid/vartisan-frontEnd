import { gql } from "@apollo/client"
export const FIND_ORDER_BY_ID = gql `
query Find_Order_By_Id($orderId: String!){
  order(id: $orderId) {
      id
    name
    seller {
      id
      userName
    }
    client {
      id
      userName
    }
    userId
    name
    date
    revision
    amount
    quantity
    category
    end
    orderStatus
    gigImage
    rushOrderDelivery
    rushOrderDelivery
    commercialOrderDelivery
    rushOrderAmount
    commercialOrderAmount
    privateOrderAmount
    message {
      date
      time
      description
      file {
        image
        video
        name
        document
      }
      user {
        userName
      }
    }
  }
}
`
export const FIND_ORDER_BY_CLIENT = gql`
query FIND_ORDER_BY_CLIENT {
  findClientOrder {
    id
  name
  quantity
  category
  date
  gigImage
  revision
  orderStatus
    gigImage
  amount
  sourceFile
  commercial
  seller {
    id
    userName
  }
  client {
    id
    userName
  }
  rushOrder
  privateOrder
  rushOrderAmount
  rushOrderDelivery
  commercialOrderAmount
  commercialOrderDelivery
  privateOrderAmount
  privateOrderDelivery
  end
  total
  gigId
  orderRequirementId
  }
}`;

export const FIND_ORDER_BY_SELLER = gql`
query FIND_ORDER_BY_SELLER {
  findSellerOrder {
    id
  name
  quantity
  category
  date
  gigImage
  revision
  orderStatus
    gigImage
  amount
  sourceFile
  commercial
  seller {
    id
    userName
  }
  client {
    id
    userName
  }
  rushOrder
  privateOrder
  rushOrderAmount
  rushOrderDelivery
  commercialOrderAmount
  commercialOrderDelivery
  privateOrderAmount
  privateOrderDelivery
  end
  total
  gigId
  orderRequirementId
  }
}`;