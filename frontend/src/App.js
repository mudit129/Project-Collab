// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
// import FAQs from './components/FAQs';
// import Footer from './components/Footer';
import Login from './components/Login';
// import ProjectCard from './components/ProjectCard';
import AllProjects from './components/AllProjects';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/allProjects" element={<AllProjects/>} />
      </Routes>
    </Router>
  );
}

export default App;
