import React from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../images/aerospace.jpg";

const ProjectCard = (props) => {
  const navigate = useNavigate();
  console.log(props.id);
  return (
    <div className="col-md-4">
      <div className="card my-3 mx-2">
        <img src={img} className="card-img-top" alt="project"></img>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/projectdetails/${props.id}`)}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
