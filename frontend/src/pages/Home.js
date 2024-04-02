import React from "react";
import KeyFeatures from "../components/HomePages/KeyFeatures";
// import Navbar from './Navbar';
import FirstPage from "../components/HomePages/FirstPage";
import FAQs from "../components/HomePages/FAQs";
import Footer from "../components/HomePages/Footer";

const Home = () => {
  return (
    <>
      <FirstPage />
      <KeyFeatures />
      <FAQs />
      <Footer />
    </>
  );
};

export default Home;
