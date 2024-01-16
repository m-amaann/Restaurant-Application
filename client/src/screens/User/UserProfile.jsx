import React from 'react'
import Navbar from '../../components/layouts/Navbar'
import { useParams } from 'react-router-dom';
import UserSidebar from '../../components/userProfile/UserSidebar';

import './UserProfile.css'
import Footer from '../../components/layouts/Footer';
import UserAccount from '../../components/userProfile/UserAccount';


function UserProfile() {


  const { activepage } = useParams();


  return (
    <div>
      <Navbar />
      <div className="Userprofile-container">
        <div className="userprofile">
          <div className="left">
            <UserSidebar activepage={activepage} />
          </div>
          <div className="right">
            {activepage === 'accountsettings' && <UserAccount />}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default UserProfile;
