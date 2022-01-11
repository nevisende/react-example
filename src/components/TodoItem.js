import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.PureComponent {
  render() {
    const { todo } = this.props;
    return <li>{todo.title}</li>;
  }
}

TodoItem.propTypes = {
  todo: PropTypes.objectOf.isRequired,
};

export default TodoItem;
