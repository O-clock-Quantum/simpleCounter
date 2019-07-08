import React from 'react';
import PropTypes from 'prop-types';

import './counter.scss';

const Counter = ({ total }) => (
  <p className="counter-wrapper">Total : {total} {total > 1 ? 'votes' : 'vote'}</p>
);

Counter.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Counter;
