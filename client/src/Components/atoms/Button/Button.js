import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ onClick, label }) => {
  return <div className="btn" onClick={onClick}>{label}</div>;
};

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
