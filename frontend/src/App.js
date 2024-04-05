// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AddProject from './pages/AddProject';
// import Footer from './components/Footer';
// import ProjectCard from './components/ProjectCard';
import AllProjects from './pages/AllProjects';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/allProjects" element={<AllProjects/>} />
        <Route exact path="/addProject" element={<AddProject/>} />
      </Routes>
    </Router>
  );
}

export default App;
