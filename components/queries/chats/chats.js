import { gql } from "@apollo/client"

export const CHAT_EXISTENCE = gql`
query FIND_CHAT_EXISTENCE($userChatInput: CreateChatInput!){
  findChatByExistence(createChat: $userChatInput){
      id
    senderId
    receiverId
  }
}`

export const CHAT_BY_USER = gql `
query FIND_CHAT_BY_USER{
  chatsByUser{
    id
    sender {
      userName
        id
        profile {
          file {
            image
          }
        }
    }
    receiver {
      userName
        id
        profile {
          file {
            image
          }
        }
    }
    senderId
    receiverId
    message {
      id
      time
      date
      description
      file {
        name
        image
        video
        document
      }
      user {
        userName
        id
      }
    }
  }
}`