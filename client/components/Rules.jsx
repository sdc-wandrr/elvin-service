import React from 'react';
import { FaClipboardList, FaRegCalendarTimes } from 'react-icons/fa';
import { GrPin } from 'react-icons/gr';
import { FiClock, FiArrowRight, FiChevronsRight } from 'react-icons/fi';
// import PropTypes from 'prop-types';

const Rules = (props) => {
  const hostel = props;

  return (
    <div>
      <div>
        <h2>
          <FaClipboardList />
          {' '}
          Policies
        </h2>
        <div>
          <FiArrowRight />
          <FiClock />
          {hostel.checkInStart}
          {' '}
          -
          {' '}
          {hostel.checkInEnd}
        </div>
        <div>
          <FiClock />
          <FiArrowRight />
          {hostel.checkOut}
        </div>
        <div>
          <FiChevronsRight />
          {' '}
          { hostel.kidFriendly }
        </div>
        <div>
          <FiChevronsRight />
          {' '}
          { hostel.creditCards }
        </div>
        <div>
          <FiChevronsRight />
          {' '}
          {hostel.ageRestriction}
        </div>
        <div>
          <FiChevronsRight />
          {' '}
          {hostel.curfew}
        </div>
        <div>
          <FiChevronsRight />
          {' '}
          {hostel.lockOut}
        </div>
        <div>
          <FiChevronsRight />
          {' '}
          {hostel.nonSmoking}
        </div>
        <div>
          <FiChevronsRight />
          {hostel.petFriendly}
        </div>
        <div>
          <FiChevronsRight />
          {hostel.taxesIncluded}
        </div>
        <section>
          <h3>
            <FaRegCalendarTimes />
            {' '}
            Cancellation Policy
          </h3>
          <div>
            <strong>Deposit Only rates</strong>
            {/* eslint-disable-next-line max-len */}
            <p>{hostel.cancellation}</p>
          </div>
        </section>
        <section>
          <h3>
            <GrPin />
            {' '}
            Things to Note
          </h3>
          <div>
            {hostel.importantNotes}
          </div>
        </section>
      </div>
    </div>
  );
};

// Rules.propTypes = {
//   checkInStart: PropTypes.string.isRequired,
//   checkInEnd: PropTypes.string.isRequired,
//   checkOut: PropTypes.string.isRequired,
//   kidFriendly: PropTypes.string.isRequired,
//   creditCards: PropTypes.string.isRequired,
//   ageRestriction: PropTypes.string.isRequired,
//   curfew: PropTypes.string.isRequired,
//   lockOut: PropTypes.string.isRequired,
//   nonSmoking: PropTypes.string.isRequired,
//   petFriendly: PropTypes.string.isRequired,
//   taxesIncluded: PropTypes.string.isRequired,
//   cancellation: PropTypes.string.isRequired,
//   importantNotes: PropTypes.string.isRequired,
// };

export default Rules;
