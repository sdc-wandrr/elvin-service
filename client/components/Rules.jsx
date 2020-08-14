import React from 'react';
import { FaClipboardList, FaRegCalendarTimes } from 'react-icons/fa';
import { GrPin } from 'react-icons/gr';
import { FiClock, FiArrowRight, FiChevronsRight } from 'react-icons/fi';
import PropTypes from 'prop-types';

const Rules = ({
  checkInStart, checkInEnd, checkOut, kidFriendly, creditCards, ageRestriction,
  curfew, lockOut, nonSmoking, petFriendly, taxesIncluded, cancellation, importantNotes,
}) => (
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
        {checkInStart}
        {' '}
        -
        {' '}
        {checkInEnd}
      </div>
      <div>
        <FiClock />
        <FiArrowRight />
        {checkOut}
      </div>
      <div>
        <FiChevronsRight />
        {' '}
        { kidFriendly }
      </div>
      <div>
        <FiChevronsRight />
        {' '}
        { creditCards }
      </div>
      <div>
        <FiChevronsRight />
        {' '}
        {ageRestriction}
      </div>
      <div>
        <FiChevronsRight />
        {' '}
        {curfew}
      </div>
      <div>
        <FiChevronsRight />
        {' '}
        {lockOut}
      </div>
      <div>
        <FiChevronsRight />
        {' '}
        {nonSmoking}
      </div>
      <div>
        <FiChevronsRight />
        {petFriendly}
      </div>
      <div>
        <FiChevronsRight />
        {taxesIncluded}
      </div>
      <section>
        <h3>
          <FaRegCalendarTimes />
          {' '}
          {cancellation}
        </h3>
        <div>
          <strong>Deposit Only rates</strong>
          {/* eslint-disable-next-line max-len */}
          <p>This property has a 1 day cancellation policy. Failure to cancel within this time will result in a cancellation charge equal to the first night of your stay, unless otherwise stated (see &quot;Things to Note&quot;).</p>
        </div>
      </section>
      <section>
        <h3>
          <GrPin />
          {' '}
          Things to Note
        </h3>
        <div>
          {importantNotes}
        </div>
      </section>
    </div>
  </div>
);

Rules.propTypes = {
  checkInStart: PropTypes.string.isRequired,
  checkInEnd: PropTypes.string.isRequired,
  checkOut: PropTypes.string.isRequired,
  kidFriendly: PropTypes.string.isRequired,
  creditCards: PropTypes.string.isRequired,
  ageRestriction: PropTypes.string.isRequired,
  curfew: PropTypes.string.isRequired,
  lockOut: PropTypes.string.isRequired,
  nonSmoking: PropTypes.string.isRequired,
  petFriendly: PropTypes.string.isRequired,
  taxesIncluded: PropTypes.string.isRequired,
  cancellation: PropTypes.string.isRequired,
  importantNotes: PropTypes.string.isRequired,
};

export default Rules;
