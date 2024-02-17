import React from "react";
import PropTypes from "prop-types";
import TextInput from "../../atoms/TextInput";
import Button from "../../atoms/Button";
import InputSection from "../InputSection";
import "./addTaskSection.css";

const AddTaskSection = ({
  handleTitleChange,
  handleDescriptionChange,
  handleTaskAdd,
  title,
  description,
}) => (
  <div className="add-task-section">
    <div className="task-section-fields-container">
      {/* <TextInput
        value={title}
        onChange={handleTitleChange}
        placeholder="Title"
      />
      <TextInput
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Description"
      /> */}
      <InputSection
        description={description}
        title={title}
        onDescriptionChange={handleDescriptionChange}
        onTitleChange={handleTitleChange}
      />
    </div>
    <Button onClick={handleTaskAdd} label="Add Task" />
  </div>
);

export default AddTaskSection;

AddTaskSection.propTypes = {
  handleTitleChange: PropTypes.func,
  handleDescriptionChange: PropTypes.func,
  handleTaskAdd: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
};
AddTaskSection.defaultProps = {
  handleTitleChange: () => null,
  handleDescriptionChange: () => null,
  handleTaskAdd: () => null,
  title: "",
  description: "",
};
