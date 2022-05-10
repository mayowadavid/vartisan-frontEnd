import React, { useContext } from 'react'
import AdminBlog from '../../../components/admin-folder/adminBlog'
import AdminBlogEdit from '../../../components/admin-folder/adminBlogEdit'
import { MainContext } from '../../../components/context/mainContext'

const blog = () => {
  const {adminBlog, setAdminBlog} = useContext(MainContext);
  
  return (
    <>
      { adminBlog.createBlog == true && <AdminBlogEdit /> }
      {adminBlog.displayBlog == true && <AdminBlog />}
    </>
  )
}

export default blog