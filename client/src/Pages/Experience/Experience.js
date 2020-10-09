import React from "react";
import Menu from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import { Container } from "reactstrap";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

import Gordian from '../../assets/Logos/Gordian.png';
import SKCF from '../../assets/Logos/SKCF.jpg';
import YuMedic from '../../assets/Logos/YuMedic.png';
import GirlScript from '../../assets/Logos/GirlScript.jpeg';
import Codebox from '../../assets/Logos/Codebox.jpg';
import VKarma from '../../assets/Logos/VKarma.png';

const Experience = () => {

  const GordianDesc = () => {
    return (
      <div>
        Gordian Technologies provides secure delivery feature to its customers. Working with them I had developed their website and added these features.
        <ol>
          <li>Added Login and Signup to the website.</li>
          <li>Integrated razorpay payment gateway.</li>
          <li>Added the customer form and messaging feature.</li>
          <li>Developed an Admin panel wo accept and reject the orders.</li>
          <li>Integrated Google API's for Autocomplete and distance calculation.</li>
        </ol>
      </div>
    );
  }

  const SKDesc = () => {
    return (
      <div>
        SK Children Foundation is a non-profit organization which provides free education to the unprivileged children. Initially I worked on their WordPress website for 2 months and now I'm the Domain head of Web development Domain. I
        <ol>
          <li>Manage all the interns of the domain.</li>
          <li>Look for the necessary improvements on the website and implement them with other members.</li>
          <li>Guide and help other interns in their work.</li>
          <li>Be in touch with other domains for the regular content to be uploaded on the website.</li>
        </ol>
      </div>
    )
  }

  const YuMedicDesc = () => {
    return (
      <div>
        YuMedic is a company that promotes medical facilites in India and are working to bring the medical sector online, just a click away. I worked with them for a month and developed
        <ol>
          <li>Various Pages of their website.</li>
          <li>Modified some previous pages as well.</li>
          <li>Helped the team with the UI of the website and suggested some great ones.</li>
        </ol>
      </div>
    )
  }

  const VKarmaDesc = () => {
    return (
      <div>
        I developed an android app which was based on School Management System. Developing the entire app from scratch and all alone I learnt a lot. Main features that I implemented are 
        <ol>
          <li>Added Login and Signup feature.</li>
          <li>Added Spalsh Screen.</li>
          <li>Implemented attractive and catchy UI.</li>
          <li>Created more than 10 screens each one with different functionality.</li>
          <li>Integrated various python APIs for the backend part.</li>
        </ol>
      </div>
    )
  }

  return (
    <div>
      <Menu />
      <Container>
          <ExperienceCard Logo={Gordian} position='MERN Stack developer' CompanyName='Gordian Technologies Pvt. Ltd.' desc={GordianDesc()} start='August 2020' end='present' duration='null' Location='Work from home' CredentialLink='null' websiteLink='https://orders.gordian.in' />
          <ExperienceCard Logo={SKCF} position='Web development Domain Head' CompanyName='SK Children Foundation' desc={SKDesc()} start='March 2020' end='present' duration='null' Location='Work from home' CredentialLink='https://drive.google.com/file/d/1CNBYPZ2PdZb6x5My4AvUN9BE4ii04dnK/view?usp=sharing' websiteLink='https://skchildrenfoundation.com/' />
          <ExperienceCard Logo={YuMedic} position='Front-end React developer' CompanyName='YuMedic Pvy. Ltd.' desc={YuMedicDesc()} start='June 2020' end='July 2020' duration='1 month' Location='Work from Home' CredentialLink='https://drive.google.com/file/d/1omt6P2jVf_-a2uaFot0vT9Bp2NTjzacC/view?usp=sharing' websiteLink='http://yumedic.com/' />
          <ExperienceCard Logo={VKarma} position='Android developer' CompanyName='VKarma Pvt. Ltd.' desc={VKarmaDesc()} start='May 2020' end='July 2020' duration='3 months' Location='Work from home' CredentialLink='https://drive.google.com/file/d/1htUaDDEqipASn-JRLQ64alRbUI3T65SI/view?usp=sharing' websiteLink='https://drive.google.com/file/d/1QUP2K7r45PXQWAeVvh8_Oqy8NIVnvYpS/view?usp=sharing' />
      </Container>
      <Footer />
    </div>
  );
};

export default Experience;
