import React from "react";

const ProjectCard = () => {
  return (
    <div className="card my-4" style={{width: "18rem"}}>
      <img src="C:\Users\jainm\OneDrive\Desktop\MTP\frontend\src\components\Images\Default Project Pic.jpg" className="card-img-top" alt="project" ></img>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
