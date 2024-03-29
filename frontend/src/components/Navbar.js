import React from 'react'
import { Link, useLocation, useNavigate} from "react-router-dom";


const Navbar = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    
    const handleLogout=()=>{
      localStorage.removeItem('token');
      navigate('/login');
      props.showAlert("Logged out succesfully","success")
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Project Collab Hub</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/login"? "active": ""}`} aria-current="page" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/signup"? "active": ""}`} to="/signup">Signup</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token')?
                    <form className="d-flex">            
                      <Link className="btn btn-primary mx-2" role="button" to='/login'>Login</Link>
                      <Link className="btn btn-primary mx-2" role="button" to='/signup'>Signup</Link>
                    </form>:<button className="btn btn-primary" onClick={handleLogout}>Logout</button> }
                </div>
            </div>
        </nav>
    )
}

export default Navbar