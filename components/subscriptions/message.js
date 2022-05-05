import { gql } from "@apollo/client"

export const MESSSAGE_SUBSCRIPTION = gql`
subscription {
  messageSubscription {
    time
    description
    date
    user {
      userName
    }
  }
}
`
