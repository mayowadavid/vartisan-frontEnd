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
  

  export const UPDATE_BLOG = gql`
  mutation UPDATE_BLOG($updateBlog: UpdateBlogInput!){
    updateBlog(updateBlogInput: $updateBlog){
      id
      name
      description
      descriptionMarkDown
      createdAt
      slug
      status
    }
  }`


  export const DELETE_BLOG = gql `
  mutation DELETE_BLOG($deleteBlogData: String!){
    removeBlog(id: $deleteBlogData){
      id
      name
      description
      descriptionMarkDown
      createdAt
      slug
      status
    }
  }`