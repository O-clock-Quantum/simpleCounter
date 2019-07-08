import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ name, count, onVote }) => (
  <button type="button" onClick={onVote}>
    {name} ({count})
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onVote: PropTypes.func.isRequired,
};

export default Button;
