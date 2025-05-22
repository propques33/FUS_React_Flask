import React from "react";
import Nav from "./components/Nav";
import ImageSlider from "./components/ImageSlider";
import AllCenter from "./components/AllCenter";
import Footer from "./components/Footer";
import Routing from "./utils/Routing";
import { SearchResultProvider } from "./context/SearchResultContext";
import FooterLinks from "./components/FooterLinks";

const App = () => {
  return (
    <div>
      <SearchResultProvider>
        <Nav />
        <Routing />
        <Footer />
        <FooterLinks />
      </SearchResultProvider>
    </div>
  );
};

export default App;
