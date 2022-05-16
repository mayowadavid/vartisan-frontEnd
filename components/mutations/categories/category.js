import { gql } from "@apollo/client"

export const CREATE_CATEGORY = gql `
mutation CREATE_CATEGORY($categoryParams: CreateCategoryInput!){
    createCategory(createCategoryInput: $categoryParams){
      id
      name
      description
      status
      subCategoryId
    }
  }`

  export const SUB_CATEGORY = gql `
  mutation CREATE_SUBCATEGORY($subCategoryParams: CreateSubCategoryInput!){
    createSubCategory(createSubCategoryInput: $subCategoryParams){
      id
      categoryId
      name
    }
  }`

  export const UPDATE_CATEGORY = gql`
  mutation UPDATE_CATEGORY($categoryInput: UpdateCategoryInput!){
    updateCategory(updateCategoryInput: $categoryInput){
      id
      blogId
    }
  }`