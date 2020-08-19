import React from 'react';
import PropTypes from 'prop-types';

const FullDescription = ({ descriptionOne, descriptionTwo, descriptionThree }) => (
  <div>
    <p>{ descriptionTwo }</p>
    <p>{ descriptionOne }</p>
    <p>{ descriptionThree }</p>
  </div>
);

FullDescription.propTypes = {
  descriptionOne: PropTypes.string.isRequired,
  descriptionTwo: PropTypes.string.isRequired,
  descriptionThree: PropTypes.string.isRequired,
};

export default FullDescription;
