import React, {useState, useEffect} from "react";
import ProjectCard from "../components/ProjectCard";
import axios from "axios"

const AllProjects = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const [allProjects, setAllProjects] = useState(null);
  console.log(arr);
  const getPdf = async()=>{
    const url = "http://localhost:5001/api/projects/get-all-projects";
    console.log(url)
    const result = await axios.get(url);
    console.log(result.data.data);
    setAllProjects(result.data.data);
  }
  
  useEffect(()=>{
    console.log("On All Projects Page")
    getPdf();
  },[])
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
            {allProjects && allProjects.map((project,idx) => {
              return <ProjectCard title = {project.title} desc = {project.desc} key={idx} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;

