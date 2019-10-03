import React from "react";
import PropTypes from "prop-types";
// import Picture from './media/mobile-ynab.png'

const Card = ({ project }) => {
  const { index, picture, text, title } = project;
  // const getImage=()=> picture

  return (
    <div id={`card-${index}`} className="card">
      <img src={picture} alt={`project ${index + 1}`} />
      <div className="details">
        <h3 className="title">{title}</h3>
        <p className="project">{text}</p>
        <ul className="features"></ul>
      </div>
    </div>
  );
};

Card.propTypes = {
  projects: PropTypes.object.isRequired
};

export default Card;
