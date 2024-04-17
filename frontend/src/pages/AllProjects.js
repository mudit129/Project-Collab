import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";

const AllProjectsPage = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    const url = "http://localhost:5001/api/projects/get-all-projects";
    const result = await axios.get(url);
    setAllProjects(result.data.data);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDomainChange = (event) => {
    setSelectedDomain(event.target.value);
  };

  const filteredProjects = allProjects.filter((project) => {
    return (
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedDomain === "" || project.domain === selectedDomain)
    );
  });

  return (
    <div className="container">
      <h3 className="text-center key">All Projects</h3>
      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search by project title"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="col-md-6">
          <select
            className="form-control"
            value={selectedDomain}
            onChange={handleDomainChange}
          >
            <option value="">All Domains</option>
            <option value="Domain 1">Domain 1</option>
            <option value="Domain 2">Domain 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
      <div className="row">
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={idx}
            id={project._id}
            title={project.title}
            domain={project.domain}
            desc={project.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProjectsPage;
