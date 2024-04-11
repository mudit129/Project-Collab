import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="col-md-4">
      <div className="card my-3 mx-2">
        <img
          src='../../public/Images/DefaultProjectPic.jpg'
          className="card-img-top"
          alt="project"
        ></img>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
          {props.desc}
          </p>
          <Link to="/" className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
