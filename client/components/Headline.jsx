import React from 'react';
import {
  FaWifi,
  FaCoffee,
  FaRegThumbsUp,
  FaTrophy,
} from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import PropTypes from 'prop-types';

const Headline = ({
  name, street, city, country,
}) => (
  <div className="headline-container">
    <div>
      <h1>
        <div className="title">
          { name }
          {' '}
          Hostel
        </div>
      </h1>
      <div className="address">
        <div className="address-body">
          <MdLocationOn />
          {' '}
          {street}
          ,
          {' '}
          {city}
          ,
          {' '}
          {country}
        </div>
      </div>
    </div>
    <h1>
      <div className="badges">
        <FaCoffee />
        {' '}
        <FaRegThumbsUp />
        {' '}
        <FaTrophy />
        {' '}
        <FaWifi />
      </div>
    </h1>
  </div>
);

Headline.propTypes = {
  name: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
};

Headline.defaultProps = {
  name: '',
  street: '',
  city: '',
  country: '',
};

export default Headline;
