import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { setFilter } from '../redux/actions/filterActions';

const FilterTodo = ({ dispatchSetFilter }) => {
  return (
    <div>
      <Button onClick={() => dispatchSetFilter('ALL')}>All</Button>
      <Button onClick={() => dispatchSetFilter('COMPLETED')}>Completed</Button>
      <Button onClick={() => dispatchSetFilter('INCOMPLETE')}>Incomplete</Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSetFilter: (filter) => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterTodo);
