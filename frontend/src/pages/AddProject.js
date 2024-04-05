import React from "react";

const AddProject = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center my-1">
      <div
        className="card border border-success"
        style={{ width: "40rem", background: "antiquewhite" }}
      >
        <div className="card-body">
          <h4 className="card-title text-center">Add Project</h4>
          <form>
            <div className="mb-3 ">
              <label for="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control border border-primary"
                id="title"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="desc" className="form-label">
                Description
              </label>
              <textarea
                type="text"
                rows="5"
                className="form-control border border-primary mb-4"
                id="desc"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center my-4">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle mx-4"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Professor
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Professor 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Professor 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Professor 3
                    </a>
                  </li>
                </ul>
              </div>

              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle mx-4"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Domain
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Domain 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Domain 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Domain 3
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="mb-3">
              <label for="prof" className="form-label">
                Professor
              </label>
              <input
                type="text"
                className="form-control border border-primary"
                id="prof"
                aria-describedby="emailHelp"
              />
            </div> */}

            {/* <div className="mb-3">
              <label for="domain" className="form-label">
                Domain
              </label>
              <input
                type="text"
                className="form-control border border-primary"
                id="domain"
                aria-describedby="emailHelp"
              />
            </div> */}
            <div className="my-4">
              <input
                className="file"
                type="file"
                //   onChange={handleFileChange}
                id="uploadbtn"
                //   style={{ display: "none" }}
              />
              <button type="button" class="btn btn-outline-success">Upload Image</button>
            </div>
            <label for="url" className="form-label">
                  Enter relevant URLs
                </label>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-3">
                
                <input
                  type="text"
                  placeholder = "Enter URL"
                  className="form-control border border-primary"
                  id="url"
                  aria-describedby="emailHelp"
                />
                <input
                  type="text"
                  placeholder = "Enter URL description"
                  className="form-control border border-primary"
                  id="url"
                  aria-describedby="emailHelp"
                />
            </div>
            {/* <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Create Password
              </label>
              <input
                type="password"
                className="form-control border border-primary"
                id="exampleInputPassword1"
              />
            </div> */}
            <p className="text-center">-------------------------------------</p>
            <div className="d-grid gap-2">
              <button
                className="btn btn-outline-primary mx-auto"
                style={{ width: "50%" }}
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
