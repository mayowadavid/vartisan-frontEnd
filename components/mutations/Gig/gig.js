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
 mutation UPDATE_GIG($updateGig: UpdateGigInput!){
        updateGig(updateGigInput: $updateGig){
                		id
                amount
        deliveryPeriod
      numberOfRevision
            sourceFile
            commercial
               aiFiles
    customIllustration
  }
}
`