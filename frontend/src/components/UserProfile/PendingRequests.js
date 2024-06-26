import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ProjectCard from "../ProjectCard";

const port = 5001;

const PendingRequests = () => {
  const [projectIds, setProjectIds] = useState([]);
  let [flag, setFlag] = useState(true);
  const getProjects = async () => {
    const url = `http://localhost:${port}/api/users/pendingProjects`;
    const result = await axios.get(url, {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    setProjectIds(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    if (flag) {
      setFlag(false);
      console.log("On Pending Requests Page");
      getProjects();
    }
  }, []);

  // const context = useContext(projectContext);
  const ref = useRef(null)
  const refClose = useRef(null)
  const [project, setProject] = useState({id: "", title: "", desc: ""})

  const updateProject = (currentProject) => {
      ref.current.click();
      setProject({id: currentProject._id, title: currentProject.title, desc: currentProject.desc})
  }

  const handleClick = (e)=>{ 
      // editProject(project.id, project.title, project.desc, project.etag)
      refClose.current.click();
      // props.showAlert("Updated successfully",'success')
  }

  const onChange = (e)=>{
      setProject({...project, [e.target.name]: e.target.value})
  }

  if(projectIds.length === 0) {
    return <div className="container">You don't have any pending projects</div>;
  }
  else{
  return (
    <div>
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Edit Project Details</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                      <form className="my-3">
                          <div className="mb-3">
                              <label htmlFor="title" className="form-label">Title</label>
                              <input type="text" className="form-control" id="title" name="title" value={project.title} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                          </div>
                          <div className="mb-3">
                              <label htmlFor="desc" className="form-label">Description</label>
                              <textarea rows = "5" type="text" className="form-control" id="desc" name="desc" value={project.desc} onChange={onChange} minLength={5} required/>
                          </div>
                          {/* <div className="mb-3">
                              <label htmlFor="tag" className="form-label">Tag</label>
                              <input type="text" className="form-control" id="etag" name="etag" value={project.etag} onChange={onChange} />
                          </div> */}

                      </form>
                  </div>
                  <div className="modal-footer">
                      <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button onClick={handleClick} type="button" className="btn btn-primary">Update Project</button>
                  </div>
              </div>
          </div>
      </div>
      <div className="container row">
        {projectIds &&
          projectIds.map((project, idx) => {
            return (
              <ProjectCard
                project = {project}
                updateProject={updateProject}
                flag = {true}
                md = {6}
                key={idx}
              />
            );
          })}
      </div>
    </div>
  );
  } 
};

export default PendingRequests;
