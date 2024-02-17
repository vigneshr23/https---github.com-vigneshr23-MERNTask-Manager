import React, { useState } from "react";
import PropTypes from "prop-types";
import AddTaskSection from "../../molecules/AddTaskSection";
import TaskList from "../../molecules/TaskList";
import "./taskManager.css";

const TaskManager = ({
  tasks,
  handleTaskAdd,
  handleTaskEdit,
  handleTaskDelete,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (descText) => {
    setDescription(descText);
  };
  const handleTitleChange = (titleText) => {
    setTitle(titleText);
  };
  const addTask = () => handleTaskAdd({ title, description });
  const editTask = ({ id, title, description }) => {
    debugger;
    handleTaskEdit({ id, title, description });
  };

  return (
    <div className="task-manager">
      <div className="task-section">
        <h1 className="center">Task Manager</h1>
        <AddTaskSection
          handleTitleChange={handleTitleChange}
          handleDescriptionChange={handleDescriptionChange}
          handleTaskAdd={addTask}
          description={description}
          title={title}
        />
      </div>
      <TaskList
        tasks={tasks}
        handleEdit={editTask}
        handleDelete={handleTaskDelete}
      />
    </div>
  );
};

export default TaskManager;

TaskManager.propTypes = {
  tasks: PropTypes.array,
  handleTaskAdd: PropTypes.func,
  handleTaskEdit: PropTypes.func,
  handleTaskDelete: PropTypes.func,
};

TaskManager.defaultProps = {
  tasks: [],
  handleTaskAdd: () => null,
  handleTaskEdit: () => null,
  handleTaskDelete: () => null,
};
