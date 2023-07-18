import React from "react";
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function Home() {
  return (
    <div>
			<Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
