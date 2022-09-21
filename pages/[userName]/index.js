import { useLazyQuery } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { FETCH_USER_BY_NAME } from '../../components/queries/user/user';
import {useRouter} from 'next/router';
import ClientProfile from '../../components/client-folder/clientProfile';
import { MainContext } from '../../components/context/mainContext';
import VartisanProfile from '../../components/creator-folder/vartisan_profile';
import Footer from '../../components/general-folder/footer';
import ClientMobileHeader from '../../components/client-folder/clientMobileHeader';
import ClientHeader from '../../components/client-folder/clientHeader';
import { clean } from '../../components/functions/functions';
import ClientDescription from '../../components/client-folder/clientDescription';
import ClientReferencePop from '../../components/client-folder/client_reference_pop';
import { ClientProfileSkeletal } from '../../components/client-folder/clientProfileSkeletal';
import VartisanSideMenu from '../../components/general-folder/vartisanMobileMenu';


const SingleSeller = () => {
 
  const router = useRouter()
  const [role, setRole] = useState();
  let {userName} = router.query;
  const { 
    setUserProfile, 
    userProfile, 
    setUserData, 
    editAbout,
    popReference, 
    setPopReference,
    handlePop,
    sideMenu
   } = useContext(MainContext);
  useEffect(()=> {
    if(userName !==  undefined){
      queryUserName({variables: {
        userName
      }});
    } else {
      router.push('/login');
    }
  }, [userName])



  

  const [queryUserName, {data, loading}] = useLazyQuery(FETCH_USER_BY_NAME, {
    onCompleted: async (data)=> {
      const { profile, id, userName, email } = data.findUserByName;
      const {role} = profile;
      setRole(role);
      const result = await clean({...profile});
      setUserProfile({...userProfile, ...result});
      setUserData({ id, userName, email });
    },
    onError: (error) => {
      error && router.push('/login');
    }
  });

  

  return (
    <>
    {sideMenu == true && <VartisanSideMenu />}
    { popReference == true && <ClientReferencePop handlePop={handlePop} /> }
    { editAbout == true && <ClientDescription /> }
    <ClientHeader />
    <ClientMobileHeader />
      {!data && <ClientProfileSkeletal />}
      {role == "client" && <ClientProfile />}
      {role == "vartisan" && <VartisanProfile />}
        <Footer />
    </>
  )
}

export default SingleSeller