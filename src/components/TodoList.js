import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import FilterTodo from './FilterTodo';
import { motion, AnimatePresence } from 'framer-motion';
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
      <Typography variant="h4" mb={2}>
        Todo List
      </Typography>
      <AddTodoForm />
      <FilterTodo />
      <List>
        <AnimatePresence>
          {filteredTodos.map((todo) => (
            <motion.div
              key={todo.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <TodoItem todo={todo} />
            </motion.div>
          ))}
        </AnimatePresence>
      </List>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter,
});

export default connect(mapStateToProps)(TodoList);
