import { gql } from "@apollo/client"

export const FIND_USER_BLOG = gql`
query findAllUserBlogPost {
    findBlogByUser {
      id
      name
      createdAt
      description
      descriptionMarkDown
      status
      slug
      file {
        image
      }
      commentId
      categoryId
      comments {
        description
      }
      category {
        id
        name
      }
      userId
      user {
        id
        userName
        profile {
          file {
            image
          }
        }
      }
    }
  }`