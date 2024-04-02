// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import AddProject from "./pages/AddProject";
// import Footer from './components/Footer';
import Login from "./pages/Login";
// import ProjectCard from './components/ProjectCard';
import AllProjects from "./pages/AllProjects";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/user/:activepage" element={<UserProfile />} />
        <Route exact path="/allProjects" element={<AllProjects />} />
        <Route exact path="/addProject" element={<AddProject />} />
      </Routes>
    </Router>
  );
}

export default App;
