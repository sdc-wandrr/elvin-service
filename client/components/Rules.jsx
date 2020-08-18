import React from 'react';
import { FaClipboardList, FaRegCalendarTimes } from 'react-icons/fa';
import { GrPin } from 'react-icons/gr';
import { FiClock, FiArrowRight, FiChevronsRight } from 'react-icons/fi';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const RulesModalContainer = styled.div`
  display: block;
  padding: 0 32px 0 32px;
  font-size: 16px;
  line-height: 18.4px;
`;

const PoliciesSection = styled.section`
  padding: 32px 0 32px 0;
  display: flex;
`;

const PoliciesListContainer = styled.div`
  width: 363px;
  min-height: auto;
  min-width: auto;
  display: block;
  margin: 0;
  font-size: 16px;
  word-spacing: .0625rem;
  line-height: 1.15;
  height: 100%;
`;

const PoliciesTitle = styled.h2`
  font-weight: 700;
  line-height: 1.25;
  margin: 0 0 16px 0;
  color: #31363f;
  letter-spacing: -.1px;
  font-size: 1.25rem;
  padding: 0;
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

`;

const ClipboardIcon = styled.span`
  color: #f25621;
  margin-right: .5rem;
  line-height: 1;
  align-self: center;
  display: inline-grid;
  letter-spacing: normal;
  font-size: inherit;
  margin: 0;
  font-weight: 700;
`;

const PoliciesList = styled.ul`
  list-style: none;
  margin-top: -.5rem;
  padding: 0;
  display: block;
  margin: 0;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const PoliciesListItem = styled.li`
  width: 100%
  float: left;
  list-style-position: inside;
  margin-top: 8px;
  color: #31363f;
  font-size: .75rem;
  letter-spacing: .2px;
  line-height: 1.33;
  list-style: none;
  padding: 0;
  display: list-item;
  text-align: -webkit-match-parent;
`;

const CheckInOutContainer = styled.div`
  width: 144px;
  height: 120px;
  padding: 8px 32px 8px 32px;
  background-color: #ebfffd;
  position: relative;
  border-radius: .25rem;
  margin: 0;
  display: block;
  font-size: 16px;
`;

const CheckInContainer = styled.div`
  display: flex;
  font-size: 16px;
  padding: 8px 0;
  word-spacing: .0625rem;
  width: 9rem;
`;

const CheckInIconsDiv = styled.div`
  height: 1.2rem;
  min-width: 3rem;
  margin-right: .5rem;
  margin: 0;
  display: block;
  font-size: 16px;
`;

const CheckInIcons = styled.span`
  color: #26a159;
  vertical-align: middle;
  line-height: 1;
  align-self: center;
  display: inline-grid;
  letter-spacing: normal;
  font-size: inherit;
`;

const CheckInOutInfoBody = styled.div`
  color: #31363f;
  font-size: .875rem;
  letter-spacing: .1px;
  line-height: 1.43;
  display: block;
`;

const CheckInOutLabel = styled.div`
  font-weight: 700;
  margin-bottom: .25rem;
`;

const HouseRulesCheckIn = styled.div`
  margin: 0;
  font-weight: 400px;
`;

const CheckInOutBorder = styled.div`
  background-color: #00e0ce;
  width: 9rem;
  height: .0625rem;
  font-size 16px;
`;

const CheckOutContainer = styled.div`
  display: flex;
  padding: .5rem 0;
  width: 9rem;
  font-size 16px;
`;

const Rules = (props) => {
  const hostel = props;
  let checkInStartTime = hostel.checkInStart;
  checkInStartTime = checkInStartTime.slice(0, 5);
  let checkInEndTime = hostel.checkInEnd;
  checkInEndTime = checkInEndTime.slice(0, 5);
  let checkOutTime = hostel.checkOut;
  checkOutTime = checkOutTime.slice(0, 5);

  return (
    <RulesModalContainer>
      <PoliciesSection>
        <PoliciesListContainer>
          <PoliciesTitle>
            <ClipboardIcon>
              <FaClipboardList />
            </ClipboardIcon>
            {' '}
            Policies
          </PoliciesTitle>
          <PoliciesList>
            <PoliciesListItem>
              <FiChevronsRight />
              {' '}
              { hostel.kidFriendly }
            </PoliciesListItem>
            <PoliciesListItem>
              <FiChevronsRight />
              {' '}
              { hostel.creditCards }
            </PoliciesListItem>
            <PoliciesListItem>
              <FiChevronsRight />
              {' '}
              {hostel.ageRestriction}
            </PoliciesListItem>
            <PoliciesListItem>
              <FiChevronsRight />
              {' '}
              {hostel.curfew}
            </PoliciesListItem>
            <PoliciesListItem>
              <FiChevronsRight />
              {' '}
              {hostel.lockOut}
            </PoliciesListItem>
            <PoliciesListItem>
              <FiChevronsRight />
              {' '}
              {hostel.nonSmoking}
            </PoliciesListItem>
            <PoliciesListItem>
              <FiChevronsRight />
              {hostel.petFriendly}
            </PoliciesListItem>
            <PoliciesListItem>
              <FiChevronsRight />
              {hostel.taxesIncluded}
            </PoliciesListItem>
          </PoliciesList>
        </PoliciesListContainer>
        <CheckInOutContainer>
          <CheckInContainer>
            <CheckInIconsDiv>
              <CheckInIcons>
                <FiArrowRight />
              </CheckInIcons>
              <CheckInIcons>
                <FiClock />
              </CheckInIcons>
              <CheckInOutInfoBody>
                <CheckInOutLabel>
                  Check In
                </CheckInOutLabel>
                <HouseRulesCheckIn>
                  {checkInStartTime}
                  {' '}
                  -
                  {' '}
                  {checkInEndTime}
                </HouseRulesCheckIn>
              </CheckInOutInfoBody>
            </CheckInIconsDiv>
          </CheckInContainer>
          <CheckInOutBorder />
          <CheckOutContainer>
            <div>
              <FiClock />
              <FiArrowRight />
              {checkOutTime}
            </div>
          </CheckOutContainer>
        </CheckInOutContainer>
      </PoliciesSection>

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
    </RulesModalContainer>
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
