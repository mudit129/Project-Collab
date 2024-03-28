import React from "react";
import ProjectCard from "./ProjectCard";

const AllProjects = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="d-grid gap-1 d-md-flex justify-content-md-center">
      <div className="card" style={{ width: "20%" }}>
        <br></br>
        <br></br>
        <h3 className="text-center">Apply Filters</h3>
        <h5 className="mx-2 mt-4">Select Professors</h5>
        <div class="mb-3 mx-2 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Professor 1
          </label>
        </div>
        <div class="mb-3 mx-2 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Professor 2
          </label>
        </div>
        <div class="mb-3 mx-2 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Professor 3
          </label>
        </div>
        <div class="mb-3 mx-2 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Professor 4
          </label>
        </div>

        <h5 className="mx-2 mt-4">Select Domain</h5>
        <div class="mb-3 mx-2 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Domain 1
          </label>
        </div>
        <div class="mb-3 mx-2 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Domain 2
          </label>
        </div>
        <div class="mb-3 mx-2 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Domain 3
          </label>
        </div>
        <div class="mb-3 mx-2 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Domain 4
          </label>
        </div>
      </div>
      <div className="container">
        <br></br>
        <br></br>
        <br></br>
        <div className="d-grid gap-1 d-md-flex justify-content-md-center">
          <input
            style={{ width: "40%" }}
            type="text"
            className="form-control"
            placeholder="Search here"
            required
          />
          <button className="btn btn-success">Search</button>
        </div>
        <br></br>
        <br></br>
        <div className="container">
          <h3 className="text-center key">All Projects</h3>
          <div className="container row">
            {arr.length === 0
              ? "No projects to display"
              : arr.map((num) => {
                  return <ProjectCard key={num} />;
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;

