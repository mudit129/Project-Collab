import React, {useState, useEffect} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const port = 5001;
const Navbar = (props) => {
  let location = useLocation();
  let navigate = useNavigate();
  const [name, setName] = useState(null);
  let [flag, setFlag] = useState(true);
  const getName = async () => {
    const url = `http://localhost:${port}/api/auth/getuser`;
    const result = await axios.get(url, {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    setName(result.data.name);
    console.log(result.data);
    console.log(result.data.name);
  };

  useEffect(() => {
    if(!localStorage.getItem("token")){
      setName("Profile")
    }
    else if (flag) {
      setFlag(false);
      console.log("On Navbar");
      getName();
    }
  }, [localStorage.getItem("token")]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/login");
    // props.showAlert("Logged out succesfully", "success");
  };
  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{background: "#6998AB"}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Project Collab Hub
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className={`nav-link ${
                  location.pathname === "/addProject" ? "active" : ""
                }`}
                to="/addProject"
              >
                Add Project
              </Link>
            </li>
            {/* <li className="nav-item mx-2">
              <Link
                className={`nav-link ${
                  location.pathname === "/user/:activepage" ? "active" : ""
                }`}
                to="/user/:activepage"
              >
                Your Profile
              </Link>
            </li> */}
          </ul>
            <form className="d-flex">
              <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {name}
                    </Link>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                      style={{background: "#B1D0E0"}}
                    >
                    {!localStorage.getItem("token") ? (
                    <>  
                    <li>
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/signup">
                        Signup
                      </Link>
                    </li>
                    </>
                    ):
                    ( <>
                      <li>
                        <Link className="dropdown-item" to="/user/accountsettings">
                          Profile Details
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/user/currentprojects">
                          Current Projects
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/user/pendingrequests">
                          Pending Requests
                        </Link>
                      </li>                      
                      <li>
                        <Link className="dropdown-item" to="/" onClick={handleLogout}>
                          Logout
                        </Link>
                      </li>
                      {/* <li>
                        <Link className="dropdown-item" to="/">
                          Something else here
                        </Link>
                      </li> */}
                      </>
                    )}
                    </ul>
                  </li>
                </ul>
              </div>
            </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
