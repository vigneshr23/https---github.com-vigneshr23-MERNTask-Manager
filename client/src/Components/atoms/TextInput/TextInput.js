import React from "react";
import PropTypes from "prop-types";
import './textInput.css';

const TextInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(ev) => onChange(ev.target.value)}
      placeholder={placeholder}
    />
  );
};

export default TextInput;

TextInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
};
TextInput.defaultProps = {
  value: "",
  placeholder: "",
  onChange: () => null,
};
