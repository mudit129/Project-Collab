import React, { useState, useEffect } from "react";
import axios from "axios"; // for making API requests

const ResearchProject = () => {
  const [projectData, setProjectData] = useState(null);

  // Function to handle form submission and fetch data from Node.js API
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get form data
    const projectId = event.target.projectId.value;

    try {
      const response = await axios.get(`/api/projects/${projectId}`); // Replace with your actual API endpoint
      setProjectData(response.data);
    } catch (error) {
      console.error(error);
      // Handle errors appropriately (e.g., display error message to user)
    }
  };

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

  // Display loading message or form while waiting for data
  return (
    <div className="research-project">
      <p>Loading project details...</p>
      {/* Alternatively, display a form for user input here */}
    </div>
  );
};

export default ResearchProject;
