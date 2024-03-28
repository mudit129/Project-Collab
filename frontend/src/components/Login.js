import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center my-4">
      <br></br>
      <br></br>
      <div className="card border border-success" style={{ width: "22rem" }}>
        <div className="card-body">
          <h5 className="card-title text-center mb-2">Login</h5>
          <form>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-2">
              <label for="signup" className="form-label">
                Don't have an account?
              </label>
              <Link to = '/signup'>Sign up</Link>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control border border-primary"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control border border-primary"
                id="exampleInputPassword1"
              />
            </div>

            <p className="text-center">------------------------------</p>
            <div className="d-grid gap-2">
                <button className="btn btn-outline-primary" type="button">Login</button>
                <p className="text-center">------ or ------</p>
                <button className="btn btn-outline-success" type="button">Sign in with Google</button>
            </div>
          </form>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default Login;
