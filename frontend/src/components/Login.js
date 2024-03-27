import React from "react";

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center my-4">
      <br></br>
      <br></br>
      <div className="card " style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title text-center">Login</h5>
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
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
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <br></br>
            <br></br>
            <div className="d-grid gap-2">
                <button className="btn btn-outline-primary" type="button">Login</button>
                <br></br>
                <button className="btn btn-outline-success" type="button">Sign in Google</button>
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
