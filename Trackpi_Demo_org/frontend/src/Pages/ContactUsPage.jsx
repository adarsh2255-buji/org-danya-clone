import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import ContactusHeader from "../components/ContactusHeader";
import ContactUsForm from "../components/ContactUsForm";
import HomeFoot from "../components/Homefooter"

const ContactUsPage = () => {
   const scrollToLogin = () => {
    loginRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
 
  return (
    <div className="overflow-hidden">
      <Navbar onLoginClick = {scrollToLogin}/>
      <ContactusHeader />
      <ContactUsForm />
      <HomeFoot />
    </div>
  );
};

export default ContactUsPage;
