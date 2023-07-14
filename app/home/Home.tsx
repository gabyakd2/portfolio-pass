import React from "react";
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function Home() {
  return (
    <div>
			<Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default Home;
