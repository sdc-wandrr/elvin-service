import React from 'react';
import { FaClipboardList } from 'react-icons/fa';
import { GrPin } from 'react-icons/gr';
import { FiClock, FiArrowRight } from 'react-icons/fi';

const Rules = ({
  checkInStart, checkInEnd, checkOut, kidFriendly, creditCards,
  ageRestriction, curfew, lockOut, nonSmoking, petFriendly, taxesIncluded, importantNotes,
}) => (
  <div>
    <div>
      <h2>
        {' '}
        <FaClipboardList />
        {' '}
        Policies
        {' '}
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
        { kidFriendly }
      </div>
      <div>
        { creditCards }
      </div>
      <div>
        {ageRestriction}
      </div>
      <div>
        {curfew}
      </div>
      <div>
        {lockOut}
      </div>
      <div>
        {nonSmoking}
      </div>
      <div>
        {petFriendly}
      </div>
      <div>
        {taxesIncluded}
      </div>
      <div>
        <h3>
          <GrPin />
          Things to Note
        </h3>
      </div>
      <div>
        {importantNotes}
      </div>
    </div>
  </div>
);

export default Rules;
