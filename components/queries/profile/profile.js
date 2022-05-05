import { gql } from "@apollo/client"
export const FETCH_USER_PROFILE = gql`
query FETCH_USER_PROFILE{
  findUserProfile {
    user {
      userName
      id
    }
    description
    file {
      id
      image
    }
      descriptionMarkDown
      firstName
      lastName
      activeOrders
      completedOrder
      canceledOrder
      specialization
      achievement
      rank
      language
      onlineStatus
      reference
      role
  }
}
`