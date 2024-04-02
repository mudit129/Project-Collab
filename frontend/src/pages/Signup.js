import React from "react";

const Signup = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center my-1">
      <div className="card border border-success" style={{ width: "30rem", background: "antiquewhite" }}>
        <div className="card-body">
          <h4 className="card-title text-center">Signup</h4>
          <form>
          <div className="mb-3 ">
              <label for="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control border border-primary"
                id="name"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="roll" className="form-label">
                Roll Number
              </label>
              <input
                type="text"
                className="form-control border border-primary"
                id="roll"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="number" className="form-label">
                Mobile Number
              </label>
              <input
                type="number"
                className="form-control border border-primary"
                id="number"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Institute Email address
              </label>
              <input
                type="email"
                className="form-control border border-primary"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Personal Email address
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
                Create Password
              </label>
              <input
                type="password"
                className="form-control border border-primary"
                id="exampleInputPassword1"
              />
            </div>
            <p className="text-center">-------------------------------------</p>
            <div className="d-grid gap-2">
                <button className="btn btn-outline-primary mx-auto" style = {{width: "50%"}} type="button">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
