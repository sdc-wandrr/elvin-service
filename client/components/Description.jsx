import React, { useState } from 'react';
// import PropTypes from 'prop-types';

const Description = (props) => {
  const [expanded, setExpanded] = useState({ shown: true });
  const hostel = props;
  const text = hostel.description;
  const truncated = text.slice(0, 850);

  return (
    <div className="description-container">
      <div className="editorial">
        <p>{hostel.editorial}</p>
      </div>
      <div className="description">
        <p>{expanded.shown ? truncated : text}</p>
        <button type="button" className="btn-show-more" onClick={() => setExpanded({ shown: !expanded.shown })}>
          {expanded.shown ? (<span>Show more</span>) : (<span>Show less</span>)}
        </button>
      </div>
    </div>
  );
};

// Description.propTypes = {
//   editorial: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

export default Description;
