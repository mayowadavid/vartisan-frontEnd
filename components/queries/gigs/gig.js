import { gql } from "@apollo/client"

export const GET_ALL_QUERY = gql `
query {
  getAllgig {
    id
    name
    categoryId
    subCategoryId
    deliveryPeriod
    numberOfRevision
    amount
    description
    commercial
    aiFiles
    customIllustration
    gigFormatId
    sourceFile
    gigFormat {
      id
      ai,
      psd,
      swf,
      gif,
      blend,
      bmpr,
      eps,
      jpg,
      fig,
      ico,
      png,
      other,
    }
    gigTag {
      id
      name
    }
    rushOrder {
      id
      status
      price
      deliveryPeriod
    }
    commercialUse {
      id
      status
      price
      deliveryPeriod
    }
    privateCommission {
      id
      status
      price
      deliveryPeriod
    }
    gigFaq {
      id
      name
      description
    }
    gigRequirement {
      id
      required
      requirementName
      text
      link
    }
    gigGallery {
      id
      name
      file {
        id
        image
      }
      selected
    }
    gigVideo {
      id
      name
      file {
        id
        video
      }
    }
    rushOrderId
    gigGalleryId
    gigTagId
    status
    category {
      id
      name
    }
    order {
      id
    }
    subCategory {
      id
      name
    }
    user {
      id
      userName
    }
  }
}`;

export const FIND_GIG_BY_USER = gql `
query Find_Gig_By_User($userData: UserGigInput!){
  findGigByUser(userGig: $userData){
    id
    name
    deliveryPeriod
    numberOfRevision
    amount
    description
    commercial
    aiFiles
    customIllustration
    sourceFile
    createdAt
    gigFormat {
      id
      ai
      psd
      swf
      gif
      blend
      bmpr
      eps
      jpg
      fig
      ico
      png
      other
    }
    category {
      name
    }
    rushOrder {
      status
      price
      deliveryPeriod
    }
    privateCommission {
      status
      price
      deliveryPeriod
    }
    commercialUse {
      status
      price
      deliveryPeriod
    }
    user {
      userName
      id
      profile {
        file {
          image
        }
      }
    }
    gigGallery {
      file {
        image
      }
    }
  }
}`

export const FIND_ALL_USER_GIG = gql `
query FIND_ALL_USER_GIG{
  findAllUserGig{
    id
    name
    deliveryPeriod
    numberOfRevision
    amount
    description
    commercial
    aiFiles
    customIllustration
    sourceFile
    createdAt
    gigFormat {
      id
      ai
      psd
      swf
      gif
      blend
      bmpr
      eps
      jpg
      fig
      ico
      png
      other
    }
    category {
      name
    }
    order {
      id
    }
    rushOrder {
      status
      price
      deliveryPeriod
    }
    privateCommission {
      status
      price
      deliveryPeriod
    }
    commercialUse {
      status
      price
      deliveryPeriod
    }
    user {
      userName
      id
      profile {
        file {
          image
        }
      }
    }
    gigGallery {
      file {
        image
      }
    }
  }
}`