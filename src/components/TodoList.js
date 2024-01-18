import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import FilterTodo from './FilterTodo';
import { Box, List, Typography } from '@mui/material';

const TodoList = ({ todos, visibilityFilter }) => {
  const applyFilter = (todos, filter) => {
    switch (filter) {
      case 'COMPLETED':
        return todos.filter((todo) => todo.completed);
      case 'INCOMPLETE':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = applyFilter(todos, visibilityFilter);

  const fadeInOutAnimation = {
    transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <Typography variant='h4' mb={2}>
        Todo List
      </Typography>
      <AddTodoForm />
      <FilterTodo />
      <List>
        {filteredTodos.map((todo) => (
          <div
            key={todo.id}
            style={{
              ...fadeInOutAnimation,
              opacity: todo.completed ? 0.5 : 1,
              transform: todo.completed ? 'translateY(-2px)' : 'translateY(0)',
            }}
          >
            <TodoItem todo={todo} />
          </div>
        ))}
      </List>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter,
});

export default connect(mapStateToProps)(TodoList);
