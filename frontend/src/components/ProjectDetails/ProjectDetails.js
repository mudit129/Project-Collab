import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProjectDetails.css";

const ResearchProject = () => {
  const { projectId } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to handle form submission and fetch data from Node.js API
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  useEffect(()=>{
    const projectId = "6612709513d84ae1da9bc836";

    axios.get(`/api/projects/getproject/${projectId}`)
    .then(res => console.log(res))
    .catch ((error) => console.error(error))
  },[])
    // Get form data
    
  // };

  // Render project details if data is available
  if (projectData) {
    const { image, title, description, professorName, domain, resources } =
      projectData;
    return (
      <div className="research-project">
        <div className="top-section">
          <img src={image} alt={title} />
          <h2>{title}</h2>
        </div>
        <div className="content-section">
          <div className="left-column">
            <p>{description}</p>
            <p>
              <b>Professor:</b> {professorName}
            </p>
          </div>
          <div className="right-column">
            <h3>Domain:</h3>
            <p style={{ color: "orange" }}>{domain}</p>
            <h3>Resources:</h3>
            {resources.map((resource) => (
              <div key={resource.url}>
                <a href={resource.url} target="_blank" rel="noreferrer">
                  {resource.url}
                </a>
                <p>{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!projectData) {
    return <p>No project data available.</p>;
  }

  const { image, title, description, professorName, domain, resources } =
    projectData;

  return (
    <div className="research-project">
      <div className="top-section">
        <img src={image} alt={title} />
        <h2>{title}</h2>
      </div>
      <div className="content-section">
        <div className="left-column">
          <p>{description}</p>
          <p>
            <b>Professor:</b> {professorName}
          </p>
        </div>
        <div className="right-column">
          <h3>Domain:</h3>
          <p>{domain}</p>
          <h3>Resources:</h3>
          {resources.map((resource) => (
            <div key={resource.url}>
              <a href={resource.url} target="_blank" rel="noreferrer">
                {resource.url}
              </a>
              <p>{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchProject;
