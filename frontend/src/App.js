import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KeyFeatures from './components/KeyFeatures';
import Navbar from './components/Navbar';
import FirstPage from './components/FirstPage';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import Login from './components/Login';
import ProjectCard from './components/ProjectCard';
import AllProjects from './components/AllProjects';


function App() {
  return (
    <Router>
      <Navbar/>
      <FirstPage/>
      <KeyFeatures/>
      <FAQs/>
      <Footer/>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/allProjects" element={<AllProjects/>} />
      </Routes>
    </Router>
  );
}

export default App;
