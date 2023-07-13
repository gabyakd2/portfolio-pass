import Home from "./home/Home";
import { NavBar } from "./home/components";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
}
