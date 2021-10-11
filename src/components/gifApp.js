import React, { useState } from "react";
import Navbar from "./navbar";
import InputSearch from "./inputSearch";
import GifGrid from "./gifGrid";
import { useAnimationTitle } from '../hooks/useAnimation';
import Footer from "./footer";

const gifApp = () => {
  const [categories, setCategories] = useState(["Violet Evergarden"]);
  useAnimationTitle();

  return (
    <React.Fragment>                  
      <div className="background-main">              
        <Navbar />
        <h1 className="title-main" id="animation-title">Encuentra los</h1>
        <div className="clearfix"></div>
        <h1 className="title-main subtitle">Mejores GIFS</h1>
        <InputSearch setCategories={setCategories} />
      </div>
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      <Footer />
    </React.Fragment>
  );
};

export default gifApp;
