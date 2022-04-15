import React, { useContext } from 'react'
import VartisanHeader from '../../components/creator-folder/vartisanHeader'
import VartisanMobileHeader from '../../components/creator-folder/vartisanMobileHeader'
import Sidebar from '../../components/creator-folder/sidebar'
import VartisanDashboard from '../../components/creator-folder/vartisan_dashboard'
import { MainContext } from '../../components/context/mainContext'
import Overview from '../../components/creator-folder/overview'
import Pricing from '../../components/creator-folder/pricing'
import { useQuery } from '@apollo/client'
import { FETCH_CATEGORIES } from '../../components/queries/category/category'
import Description from '../../components/creator-folder/description'
import Requirement from '../../components/creator-folder/requirement'
import Gallery from '../../components/creator-folder/gallery'

const Gig = () => {
    const {
      closeDashboard, 
      overview, 
      setCategory, 
      pricing, 
      showDescription, 
      showRequirement, 
      showGallery, 
    } = useContext(MainContext);
    
   const{data, loading} = useQuery(FETCH_CATEGORIES,
    {onCompleted: (data) => {
      setCategory(data);
    },
    onError: (error) => {
        console.log(error);
    }});

  return (
    <div className="dashboard_wrapper">
    <Sidebar />
    <div className="admin_content">
        <VartisanHeader />
        <VartisanMobileHeader />
        { closeDashboard == true && <VartisanDashboard /> }
        { overview == true && <Overview /> }
        { pricing == true && <Pricing /> }
        { showDescription == true && <Description /> }
        { showRequirement == true && <Requirement /> }
        { showGallery == true && <Gallery /> }
    </div>
    </div>
  )
}

export default Gig