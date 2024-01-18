import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TextField, Button } from '@mui/material';
import { addTodo } from '../redux/actions/todoActions';

const AddTodoForm = ({ dispatchAddTodo }) => {
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      dispatchAddTodo(newTodoText);
      setNewTodoText('');
    }
  };

  return (
    <div
      style={{
        margin: '0 auto',
        padding: '16px 0',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <TextField
        label='New Todo'
        variant='outlined'
        fullWidth
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        style={{ width: '350px' }}
      />
      <Button
        variant='contained'
        onClick={handleAddTodo}
        style={{
          textAlign: 'center',
          marginTop: '16px',
          backgroundColor: '#4caf50',
          color: 'white',
          '&:hover': {
            backgroundColor: '#45a049',
          },
        }}
      >
        Add Todo
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchAddTodo: (text) => dispatch(addTodo(text)),
});

export default connect(null, mapDispatchToProps)(AddTodoForm);
