import { gql } from "@apollo/client"

export const GET_ALL_QUERY = gql `
query {
  getAllgig {
    id
    name
    categoryId
    subCategoryId
    gigFormatId
    gigTagId
    status
    amount
    rushOrder {
      id
      status
      price
      gigId
    }
    category {
      id
      name
    }
    subCategory {
      id
    }
    gigFormat {
      id
    }
    gigTag {
      id
      name
    }
  }
}`;