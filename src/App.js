import React from "react";
import Theme from "./Theme";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HighlightsSection from "./components/HighlightsSection";
import MediaSection from "./components/MediaSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function App() {
  return (
    <Theme>
      <Navbar />
      <HeroSection />
      <HighlightsSection />
      {/* <MediaSection /> */}
      <AboutSection/>
      <Footer />
    </Theme>
  );
}

export default App;
