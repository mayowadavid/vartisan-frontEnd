import { gql } from "@apollo/client"
export const FETCH_USER_PROFILE = gql`
query FETCH_USER_PROFILE{
  findUserProfile {
    id
    user {
      userName
      email
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