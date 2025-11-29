import React from "react";
import Navbar from "./Navbar";
import Divtop from "./Divtop";


//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
	  <Divtop/>
      {/* Aquí irán los demás componentes: <Hero />, <Features />, <Pricing />, <Footer /> */}
      <main className="container py-5">
        <h1 className="text-center">Landing en construcción</h1>
        <p className="text-center text-muted">Agrega los componentes debajo del Navbar.</p>
      </main>
    </>
  );
};

export default Home;