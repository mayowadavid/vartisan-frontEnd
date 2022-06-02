import { gql } from "@apollo/client"

export const FETCH_CATEGORIES = gql`
        query {
            categories {
        id
        name
        description
        status
        displayBanner
        gig {
            id
        user {
        userName
        profile {
            id
            file {
                image
            }
          }
        }
        name
        amount
        gigGallery {
            name
            file {
            image
            }
        }
        }
        subCategory{
        id
        name
        description
        }
    }
}`;
