import React from 'react';
import PropTypes from 'prop-types';

import { Service } from '../';

import './ServiceList.scss';

const ServiceList = ({ services }) => {
  return (
    <div className='ServiceList'>
      {
        services.map((service, i) => <Service
          title={service.title}
          content={service.content}
          list={service.list}
          picture={service.picture}
          key={i}
        />)
      }
    </div>
  );
};

ServiceList.propTypes = {
  services: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string),
  }))
};

export default ServiceList;
