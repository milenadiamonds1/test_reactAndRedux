import React from 'react';
import { connect } from 'react-redux';
import { Checkbox, IconButton, ListItem, Typography } from '@mui/material';
import { removeTodo, toggleTodo } from '../redux/actions/todoActions';
import DeleteIcon from '@mui/icons-material/Delete';


const TodoItem = ({ todo, dispatchRemoveTodo, dispatchToggleTodo }) => {
  return (
    <ListItem
    sx={{
        display: 'flex',
        width:'350px',
        justifyContent: 'flex-start',
        transition: 'background-color 0.3s',
        '&:hover': { backgroundColor: '#f5f5f5' },
        margin: '8px',
        padding: '16px',
        borderRadius: '8px',
      }}
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => dispatchToggleTodo(todo.id)}
      />
      <Typography
        variant="body1"
        sx={{ flex: 1, marginLeft: 2, textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.text}
      </Typography>
      <IconButton onClick={() => dispatchRemoveTodo(todo.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchRemoveTodo: (id) => dispatch(removeTodo(id)),
  dispatchToggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
