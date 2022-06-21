import React, { useContext, useEffect } from 'react'
import VartisanHeader from '../../../components/creator-folder/vartisanHeader'
import VartisanMobileHeader from '../../../components/creator-folder/vartisanMobileHeader'
import Sidebar from '../../../components/creator-folder/sidebar'
import VartisanDashboard from '../../../components/creator-folder/vartisan_dashboard'
import { MainContext } from '../../../components/context/mainContext'
import Overview from '../../../components/creator-folder/overview'
import Pricing from '../../../components/creator-folder/pricing'
import Description from '../../../components/creator-folder/description'
import Requirement from '../../../components/creator-folder/requirement'
import Gallery from '../../../components/creator-folder/gallery'
import MobileSideBar from '../../../components/creator-folder/mobileSidebar'

const Gig = () => {
    const {
      closeDashboard, 
      overview, 
      pricing, 
      showDescription, 
      showRequirement, 
      showGallery, 
      vartisanState,
      setChangeState,
      sideMenu
    } = useContext(MainContext);
    
    useEffect(()=> {
      setChangeState({...vartisanState, projects: true});
  }, [])

  return (
    <>
        { sideMenu == true && <MobileSideBar />}
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
    </>
  )
}

export default Gig