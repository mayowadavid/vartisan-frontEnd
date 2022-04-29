import { gql } from "@apollo/client"
export const CREATE_MESSAGE = gql `
mutation CREATE_MESSAGE($messageInput: CreateMessageInput!){
  createMessage(createMessageInput: $messageInput){
    id
    date
    time
    description
    chatId
    orderId
  }
}`