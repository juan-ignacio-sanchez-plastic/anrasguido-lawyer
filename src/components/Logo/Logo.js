import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/images/justice-balance.svg';

const Logo = ({ width }) => {
  return <img src={logo} width={width} alt='justice-balance-logo' />;
};

Logo.propTypes = {
  width: PropTypes.number,
};

export default Logo;
