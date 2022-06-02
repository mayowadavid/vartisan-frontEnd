import { useQuery } from '@apollo/client';
import React, { useState } from 'react'
import Category from '../components/client-folder/category'
import { CategorySkeletal } from '../components/client-folder/categorySkeletal';
import ClientHeader from '../components/client-folder/clientHeader';
import ClientMobileHeader from '../components/client-folder/clientMobileHeader';
import Footer from '../components/general-folder/footer';
import { FETCH_CATEGORIES } from '../components/queries/category/category';

const Categories = () => {
  const [singleCategory, setSingleCategory] = useState();
  const {data, error} = useQuery(FETCH_CATEGORIES,
        {onCompleted: (data) => {
          if(data){
          const {categories} = data;
          setSingleCategory({...categories[0]});}
      },
      onError: (error) => {
          console.log(error);
    }});
  return (
    <div>
        <ClientHeader />
        <ClientMobileHeader />
        {
          singleCategory !== undefined && <Category />
        }
        {
          singleCategory == undefined && <CategorySkeletal />
        }
        <Footer />
    </div>
  )
}

export default Categories