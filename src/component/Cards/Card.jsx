import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, children, titleBg, titleColor }) => {
  return (
    <div className="card custom-card">
      <div className={`card-header ${titleBg} ${titleColor}`}>
        <h2 className="card-title">{title}</h2>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  titleBg: PropTypes.string.isRequired,
  titleColor: PropTypes.string.isRequired,
};

export default Card;
