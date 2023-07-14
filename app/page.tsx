import Home from "./home/Home";
import { NavBar } from "./home/components";
import Skills from "./home/components/Skills/Skills";
import 'react-multi-carousel/lib/styles.css';
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Skills />
    </div>
  );
}
