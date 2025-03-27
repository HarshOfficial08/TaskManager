import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardContent, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useAuth } from '../contexts/AuthContext';
import { useTasks } from '../contexts/TaskContext';
import TaskForm from '../components/TaskForm';

function Dashboard() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { tasks, fetchTasks, deleteTask } = useTasks();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    fetchTasks();
  }, [isAuthenticated, navigate, fetchTasks]);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        My Tasks
      </Typography>
      <TaskForm />
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {tasks.map((task) => (
          <Grid item xs={12} sm={6} md={4} key={task._id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {task.title}
                </Typography>
                <Typography color="textSecondary">
                  {task.description}
                </Typography>
                <Typography color="textSecondary">
                  Status: {task.status}
                </Typography>
                <Typography color="textSecondary">
                  Due: {new Date(task.dueDate).toLocaleDateString()}
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={() => handleEdit(task)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => deleteTask(task._id)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Dashboard;
