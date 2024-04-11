import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProjectDetails.css";

const ResearchProject = () => {
  const { projectId } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/projects/${projectId}`);
        setProjectData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Error fetching project data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, [projectId]);

  if (loading) {
    return <p>Loading project details...</p>;
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
