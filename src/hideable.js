import React from 'react';

import PropTypes from 'prop-types';

const Hideable = ({children, hidden = false, hiddenPH = null}) => hidden ? hiddenPH : children;

Hideable.propTypes = {
  children: PropTypes.node.isRequired,
  hidden: PropTypes.bool,
};

export default Hideable;