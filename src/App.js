import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Profile></Profile>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}
