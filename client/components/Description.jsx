import React from 'react';

const Description = ({
  editorial, description,
}) => (
  <div className="description-container">
    <div className="editorial">
      <p>{editorial}</p>
    </div>
    <div className="description">
      <p>{description}</p>
    </div>
  </div>
);

export default Description;
