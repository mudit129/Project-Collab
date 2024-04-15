import React, { useState } from "react";

const AddProject = () => {
  const host = "http://localhost:5001";
  const [profval, setProfval] = useState();
  const profs = [
    { label: "Professor 1", value: 1 },
    { label: "Professor 2", value: 2 },
    { label: "Professor 3", value: 3 },
  ];

  const [domainval, setDomainval] = useState();
  const domains = [
    { label: "Domain 1", value: 1 },
    { label: "Domain 2", value: 2 },
    { label: "Domain 3", value: 3 },
  ];

  const [project, setProject] = useState({
    title: "",
    desc: "",
    prof: "",
    domain: "",
    url: "",
    urlDesc: "",
  });

  const onChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // addNote(note.title, note.description, note.tag);
    console.log("Title -> ", project.title);
    console.log("Description -> ", project.desc);
    console.log("Prof -> ", profs[profval - 1].label);
    console.log("Domain -> ", domains[domainval - 1].label);
    console.log("URL -> ", project.url);
    console.log("URL Desc -> ", project.urlDesc);
    // API Call
    const response = await fetch(`${host}/api/projects/addproject`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title: project.title,
        desc: project.desc,
        prof: profs[profval - 1].label,
        domain: domains[domainval - 1].label,
        url: project.url,
        urlDesc: project.urlDesc,
      }),
    });

    const resp = await response.json();
    console.log(resp);
    setProject({
      title: "",
      desc: "",
      prof: "",
      domain: "",
      url: "",
      urlDesc: "",
    });
    // props.showAlert("Note added successfully",'success')
  };

  const handleProfSelect = (e) => {
    setProfval(e.target.value);
  };

  const handleDomainSelect = (e) => {
    setDomainval(e.target.value);
  };
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
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control border border-primary"
                id="title"
                name="title"
                aria-describedby="emailHelp"
                value={project.title}
                onChange={onChange}
                minLength={5}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Description
              </label>
              <textarea
                type="text"
                rows="5"
                className="form-control border border-primary mb-4"
                id="desc"
                name="desc"
                aria-describedby="emailHelp"
                value={project.desc}
                onChange={onChange}
                minLength={5}
                required
              />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center my-4">
              <select className="form-select" onChange={handleProfSelect}>
                <option value="">Choose Professor</option>
                {profs.map((prof) => (
                  <option value={prof.value}>{prof.label}</option>
                ))}
              </select>

              <select className="form-select" onChange={handleDomainSelect}>
                {domains.map((domain) => (
                  <option value={domain.value}>{domain.label}</option>
                ))}
              </select>
            </div>

            <div className="my-4">
              <input
                className="file"
                type="file"
                //   onChange={handleFileChange}
                id="uploadbtn"
                //   style={{ display: "none" }}
              />
              <button type="button" class="btn btn-outline-success">
                Upload Image
              </button>
            </div>
            <label htmlFor="url" className="form-label">
              Enter relevant URLs
            </label>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-3">
              <input
                type="text"
                placeholder="Enter URL"
                value={project.url}
                onChange={onChange}
                className="form-control border border-primary"
                id="url"
                name="url"
                aria-describedby="emailHelp"
              />
              <input
                type="text"
                placeholder="Enter URL description"
                value={project.urlDesc}
                onChange={onChange}
                className="form-control border border-primary"
                id="urlDesc"
                name="urlDesc"
                aria-describedby="emailHelp"
              />
            </div>

            <p className="text-center">-------------------------------------</p>
            <div className="d-grid gap-2">
              <button
                className="btn btn-outline-primary mx-auto"
                style={{ width: "50%" }}
                type="button"
                onClick={handleSubmit}
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
