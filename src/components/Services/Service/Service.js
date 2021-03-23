import React from 'react';
import PropTypes from 'prop-types';

import './Service.scss';

const Service = ({ title, content, list, picture }) => {
  return (
    <div className='Service'>
      <img src={picture} alt='service picture' />
      <div className='Service__body'>
        <h1>{title}</h1>
        <p>{content}</p>
        <ul>
          {
            list.map((item, i) => <li key={i}>{item}</li>)
          }
        </ul>
      </div>
    </div>
  );
};

Service.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string),
  picture: PropTypes.string.isRequired,
};

export default Service;
