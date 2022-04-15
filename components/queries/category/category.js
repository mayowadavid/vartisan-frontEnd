import { gql } from "@apollo/client"

export const FETCH_CATEGORIES = gql`
        query {
            categories {
        id
        name
        description
        status
        displayBanner
        file {
        id
        image
        }
        subCategory{
        id
        name
        description
        }
    }
}`;
