import React from "react";
import Navbar from "./Navbar";
import Divtop from "./Divtop";
import CardReutilizable from "./CardReutilizable";
import Footer from "./Footer";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
	    <Divtop/>
      <CardReutilizable/>
      <Footer/>
    </>
  );
};

export default Home;