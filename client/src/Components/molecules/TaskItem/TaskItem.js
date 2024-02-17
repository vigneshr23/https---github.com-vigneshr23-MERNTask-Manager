import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button";
import "./taskItem.css";
import TextInput from "../../atoms/TextInput";
import InputSection from "../InputSection/";

/**
 * ListItem Component that displays item data
 * @param {*} { _id, title, description, handleEdit, handleDelete }
 * @returns component that display data
 */

const TaskItem = ({ _id, title, description, handleEdit, handleDelete }) => {
  const [isEditMode, setIsEditMode] = useState(false); // TODO: change states to useReducer
  const [ownTitle, setOwnTitle] = useState(title);
  const [ownDescription, setOwnDescription] = useState(description);

  const handleEditing = () => {
    if (!isEditMode) {
      setIsEditMode(true);
      return;
    } else {
      handleEdit({ id: _id, title: ownTitle, description: ownDescription });
      setIsEditMode(true);
    }
  };

  const handleDynamicAction = () => {
    if (!isEditMode) {
      handleDelete();
    } else {
      setIsEditMode(false);
      setOwnTitle(title);
      setOwnDescription(description);
    }
  };

  const renderTaskItem = () => (
    <div>
      <h3>{ownTitle}</h3>
      <p>{ownDescription}</p>
    </div>
  );

  const renderEditableTaskItem = () => (
    <div className="editable-task">
      <InputSection
        description={ownDescription}
        title={ownTitle}
        onDescriptionChange={setOwnDescription}
        onTitleChange={setOwnTitle}
      />
    </div>
  );

  return (
    <div data-id={_id} className="task-item">
      {isEditMode ? renderEditableTaskItem() : renderTaskItem()}
      <div className="actions-container">
        {/* Todo: create separate component */}
        <Button
          onClick={handleEditing}
          label={!isEditMode ? "Edit" : "Confirm"}
        />
        <Button
          onClick={handleDynamicAction}
          label={!isEditMode ? "Delete" : "Cancel"}
        />
      </div>
    </div>
  );
};

export default TaskItem;

TaskItem.propTypes = {
  _id: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
};

TaskItem.defaultProps = {
  _id: null,
  title: "",
  description: "",
  title: "",
  handleEdit: () => null,
  handleDelete: () => null,
};
