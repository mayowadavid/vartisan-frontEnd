import { gql } from "@apollo/client"

export const FIND_ALL_REFERENCE = gql`
query FIND_ALL_REFERENCE{
    getAllreference {
      id
      file {
        id
        name
        image
      }
      description
      selected
      user {
          id
          userName
      }
    }
  }`

export const FIND_USER_REFERENCE = gql`
query FIND_ALL_REFERENCE{
    findReferenceByUser {
    id
    name
    file {
        id
        name
        image
    }
    description
    selected
    user {
        id
        userName
    }
    }
}`