import { createContext, useContext, useState, useCallback } from 'react';
import axios from 'axios';

const TaskContext = createContext();

export function useTasks() {
  return useContext(TaskContext);
}

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/tasks', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }, []);

  const createTask = async (taskData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/tasks', taskData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks([...tasks, response.data]);
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error creating task');
    }
  };

  const updateTask = async (taskId, taskData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`/api/tasks/${taskId}`, taskData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(tasks.map((task) => 
        task._id === taskId ? response.data : task
      ));
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error updating task');
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/api/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error deleting task');
    }
  };

  const value = {
    tasks,
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
