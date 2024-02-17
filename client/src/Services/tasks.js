/** contains all the service functions for task */
import axios from "axios";

const domain = "http://localhost:5001"; // read from .env
const endpoint = "/api/tasks"; // read from .env
const requestUrl = `${domain}${endpoint}`;

// api handler for getting all tasks
const getTasks = async () => {
  try {
    const res = await axios.get(requestUrl);
    return res.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

// api handler for adding a task
const addTask = async ({ title, description }) => {
  console.log(domain);
  try {
    await axios.post(requestUrl, { title, description });
    return window.location.reload();
  } catch (err) {
    console.log(err);
    return;
  }
};

// api handler for deleting a task
const deleteTask = async (taskId) => {
  const request = `${requestUrl}/${taskId}`;
  try {
    await axios.delete(request);
    return window.location.reload();
  } catch (err) {
    console.log(err);
    return;
  }
};

// api handler for updating a task
const editTask = async ({ id: taskId, title, description }) => {
  const request = `${requestUrl}/${taskId}`;
  try {
    await axios.patch(request, { title, description });
    return window.location.reload();
  } catch (err) {
    console.log(err);
    return;
  }
};

export { getTasks, addTask, deleteTask, editTask };
