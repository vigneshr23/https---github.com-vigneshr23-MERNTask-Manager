import React, { useState, useEffect, useCallback } from "react";
import { TaskService } from "./Services";
import TaskManager from "./Components/widgets/TaskManager";
import { getTasks } from "./Services/tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(async () => {
    const data = await getTasks();
    setTasks(data);
  }, []);

  // const addTask = () => {
  //   axios
  //     .post("/api/tasks", { title, description })
  //     .then(() => window.location.reload())
  //     .catch((err) => console.log(err));
  // };

  // const deleteTask = (taskId) => {
  //   axios
  //     .delete(`/api/tasks/${taskId}`)
  //     .then(() => window.location.reload())
  //     .catch((err) => console.log(err));
  // };
  const handleTaskAdd = ({ title, description }) => {
    TaskService.addTask({ title, description });
  };
  const handleTaskEdit = ({ id, title, description }) => {
    TaskService.editTask({ id, title, description });
  };
  const handleTaskDelete = (id) => {
    TaskService.deleteTask(id);
  };

  return (
    <TaskManager
      tasks={tasks}
      handleTaskAdd={handleTaskAdd}
      handleTaskDelete={handleTaskDelete}
      handleTaskEdit={handleTaskEdit}
    />
  );
};

export default App;
