import { gql } from "@apollo/client"

export const CREATE_CHAT = gql `
 mutation CREATE_CHAT($chatInput: CreateChatInput!) {
        createChat(createChat: $chatInput){
          id
        senderId
        receiverId
  }
}`