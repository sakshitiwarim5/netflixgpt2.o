import React from "react";
import LoginPage from "./components/LoginPage";

import Stats from "./components/Stats";
import Mentors from "./components/Mentors";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import HeaderSection from "./components/HeaderSection";

function App() {
  return (
    <>
      <HeaderSection />
      <LoginPage />
      <Stats />
      <Mentors />
      <Testimonials />

      <Footer />
    </>
  );
}

export default App;
