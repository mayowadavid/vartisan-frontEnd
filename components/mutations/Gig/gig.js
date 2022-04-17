import { gql } from "@apollo/client"

export const CREATE_GIG = gql `
mutation CREATEGIG($createGig: CreateGigInput!){
  creategig(createGigInput: $createGig){
          id
        name
    categoryId
    subCategoryId
    gigFormatId
  }
}
`

export const UPDATE_GIG = gql `
  mutation UPDATE_GIG($updateGig: UpdateGigInput!) {
  updateGig(updateGigInput: $updateGig) {
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
      gigId
    }
    commercialUse {
      id
      status
      price
      deliveryPeriod
    }
    privateCommission {
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
    gigTagId
    status
    category {
      id
      name
    }
    subCategory {
      id
    }
  }
}
`

export const CREATE_GIG_FAQ = gql`
mutation CREATE_FAQ($createFaq: CreateGigFaqInput!){
  createGigFaq(createGigFaqInput: $createFaq){
    name
    description
    gigId
  }
}`


export const UPDATE_GIG_FAQ = gql `
mutation UPDATE_FAQ($updateFaq: UpdateGigFaqInput!){
    updateGigFaq(updateGigFaqInput: $updateFaq){
    id
    name
    description
    gigId
    }
  }`

  export const CREATE_REQUIREMENT = gql `
  mutation CREATE_REQUIREMENT($createRequirement: CreateGigRequirementInput!){
    createGigRequirement(createGigRequirementInput: $createRequirement){
    requirementName
    required
    text
    link
    gigId
    }
  }`

  export const UPDATE_REQUIREMENT = gql `
  mutation UPDATE_REQUIREMENT($updateRequirement: UpdateGigRequirementInput!){
    updateGigRequirement(updateGigRequirementInput: $updateRequirement){
    id
    requirementName
    required
    text
    link
    gigId
    }
  }`