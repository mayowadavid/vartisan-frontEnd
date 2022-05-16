import { gql } from "@apollo/client"

export const FIND_USER_NOTIFICATION = gql`
query findAllUserNotification {
    findUserNotification {
      id
      name
      description
      createdAt
      userId
      user {
        id
        userName
      }
    }
  }
`