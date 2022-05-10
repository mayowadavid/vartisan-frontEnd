import React, { useContext } from 'react'
import AdminCategory from '../../../components/admin-folder/adminCategory'
import AdminCreateCategory from '../../../components/admin-folder/adminCreateCategory'
import AdminHeader from '../../../components/admin-folder/adminHeader'
import AdminMobileHeader from '../../../components/admin-folder/adminMobileHeader'
import { MainContext } from '../../../components/context/mainContext'

export default function adminCategory() {
  const {
    adminCategoryCreate,
    setAdminCategoryCreate
  } = useContext(MainContext);
  return (
    <div className="admin_category">
      <AdminHeader />
      <AdminMobileHeader />
      { adminCategoryCreate.createCategory == true && <AdminCreateCategory /> }
      { adminCategoryCreate.displayCategory == true && <AdminCategory /> }
    </div>
    
  )
}
