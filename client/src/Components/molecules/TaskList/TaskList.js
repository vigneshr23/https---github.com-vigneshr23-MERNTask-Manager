import React from 'react';
import PropTypes from "prop-types";
import TaskItem from "../../molecules/TaskItem";
import './taskList.css';

/**
 * List Component that renders individual ListItem
 * @param {*} tasks, handleEdit, handleDelete
 * @returns TaskItem
 */
const TaskList = ({ tasks, handleEdit, handleDelete }) => {
  const renderTaskItem = ({ _id, ...task }) => (
    <TaskItem
      key={_id}
      handleEdit={handleEdit}
      handleDelete={() => handleDelete(_id)}
      _id={_id}
      {...task}
    />
  );
  const renderTaskList = () => tasks.map(renderTaskItem);

  return <div className='task-list'>{renderTaskList()}</div>;
};

export default TaskList;

TaskList.propTypes = {
  tasks: PropTypes.array,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
};

TaskList.defaultProps = {
  tasks: [],
  handleEdit: () => null,
  handleDelete: () => null,
};
