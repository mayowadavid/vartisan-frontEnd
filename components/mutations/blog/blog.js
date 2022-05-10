import { gql } from "@apollo/client"

export const CREATE_BLOG = gql `
mutation CREATE_BLOG ($blogInput: CreateBlogInput!){
    createBlog(createBlogInput: $blogInput){
      id
      name
      description
      descriptionMarkDown
      status
      slug
      user {
        id
        userName
      }
    }
  }`