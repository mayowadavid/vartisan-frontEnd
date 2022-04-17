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
      default
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
    subCategory {
      id
      name
    }
  }
}`;