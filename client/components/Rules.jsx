import React from 'react';
import { FaClipboardList, FaRegCalendarTimes } from 'react-icons/fa';
import { RiPushpinLine } from 'react-icons/ri';
import { FiClock, FiArrowRight, FiChevronsRight } from 'react-icons/fi';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const RulesModalContainer = styled.div`
  display: block;
  padding: 0 32px 0 32px;
  font-size: 16px;
  line-height: 18.4px;
`;

const PoliciesSection = styled.div`
  padding: 16px 0 32px 0;
  display: flex;
  border-bottom: 1px solid #f1f2f4;
`;

const PoliciesListContainer = styled.div`
  width: 363px;
  min-height: auto;
  min-width: auto;
  display: block;
  margin: 0;
  padding: 0;
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

const CheckInOutGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1px 1fr;
  gap: 1px 1px;
  grid-template-areas: "CheckInContainer" "CheckInOutBorder" "CheckOutContainer";
  background-color: #ebfffd;
  border-radius: .25rem;
  width: 144px;
  height: 120px;
  margin-bottom: 0px;
  padding: 16px 32px 32px 32px;
`;

const CheckOutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas: "CheckOutIcons CheckOutTitle CheckOutTitle" ". CheckOutInfo CheckOutInfo";
  grid-area: CheckOutContainer;
  margin: 8px 0 0 0;
  padding: 8px 0 8px 0;
  word-spacing: .1px;
  line-height: 20.02px;
  letter-spacing: .1px;
  font-size: 14px;
  padding: 0;
  color: #31363f;
`;

const CheckOutTitle = styled.div`
  grid-area: CheckOutTitle;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #31363f;
`;

const CheckOutInfo = styled.div`
  grid-area: CheckOutInfo;
  font-weight: 400;
`;

const CheckOutIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas: "CheckOutClock CheckOutArrow" "CheckOutClock CheckOutArrow";
  grid-area: CheckOutIcons;
  margin: 0 8px 0 0
  font-size: 20px;
  line-height: 1;
  letter-spacing: normal;
`;

const CheckOutClock = styled.div`
  grid-area: CheckOutClock;
  color: #00a396;
  text-align: right;
  font-size: 20px;
`;

const CheckOutArrow = styled.div`
  grid-area: CheckOutArrow;
  color: #d11a3b;
  text-align: left;
  font-size: 20px;
`;

const CheckInContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas: "CheckInIcons CheckInTitle CheckInTitle" ". CheckInInfo CheckInInfo";
  grid-area: CheckInContainer;
  margin: 0;
  padding: 8px 0 8px 0;
`;

const CheckInTitle = styled.div`
  grid-area: CheckInTitle;
  color: #31363f;
  font-weight: 700;
  letter-spacing: .1px;
  font-size: 14px;
  margin: 0 0 4px 0;
  padding: 0;
  word-spacing: .1px;
  line-height: 20.02px;

`;

const CheckInInfo = styled.div`
  grid-area: CheckInInfo;
  color: #31363f;
  font-weight: 400;
  letter-spacing: .1px;
  font-size: 14px;
  margin: 0 0 4px 0;
  padding: 0;
  word-spacing: .1px;
  line-height: 20.02px;
`;

const CheckInIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas: "CheckInArrow CheckInClock" "CheckInArrow CheckInClock";
  grid-area: CheckInIcons;
  font-size: 20px;
  margin-right: 8px;

`;

const CheckInArrow = styled.div`
  grid-area: CheckInArrow;
  color: #26a159;
  font-size: 20px;
  text-align: right;
`;

const CheckInClock = styled.div`
  grid-area: CheckInClock;
  color: #00a396;
  font-size: 20px;
  text-align: left;
`;

const CheckInOutBorder = styled.div`
  background-color: #00e0ce;
  height: .0625rem;
  font-size 16px;
`;

const CancellationSection = styled.div`
  padding: 32px 0 16px 0;
  display: flex;
  border-bottom: 1px solid #f1f2f4;
`;

const CancellationContainer = styled.div`
  width: 363px;
  min-height: auto;
  min-width: auto;
  display: block;
  margin: 0;
  padding: 0;
  font-size: 16px;
  word-spacing: .0625rem;
  line-height: 1.15;
  height: 100%;
`;

const CalendarIcon = styled.span`
  color: #f25621;
  font-size: 20px;
  margin-right: .5rem;
  line-height: 1;
  display: inline
  letter-spacing: normal;
  margin-right: 8px;
  font-weight: 700;
  vertical-align: bottom;
`;

const CancellationTitle = styled.h2`
  font-weight: 700;
  line-height: 1.25;
  margin: 0 0 16px 0;
  color: #31363f;
  letter-spacing: -.1px;
  font-size: 1.25rem;
  padding: 0;
  display: inline;
`;

const CancellationText = styled.div`
  font-size: 12px;
  margin: 0;
  padding: 0;
  color: #31363
  letter-spacing: .2px;
  line-height: 1.33;
  font-weight: stronger;
`;

const NotesSection = styled.div`
  padding: 32px 0 16px 0;
  display: flex;
`;

const NotesContainer = styled.div`
  width: 363px;
  min-height: auto;
  min-width: auto;
  display: block;
  margin: 0;
  padding: 0;
  font-size: 16px;
  word-spacing: .0625rem;
  line-height: 1.15;
  height: 100%;
`;

const PinIcon = styled.span`
  color: #f25621;
  font-size: 20px;
  margin-right: .5rem;
  line-height: 1;
  display: inline
  letter-spacing: normal;
  margin-right: 8px;
  font-weight: 700;
  vertical-align: bottom;
`;

const NotesTitle = styled.h2`
  font-weight: 700;
  line-height: 1.25;
  margin: 0 0 16px 0;
  color: #31363f;
  letter-spacing: -.1px;
  font-size: 1.25rem;
  padding: 0;
  display: inline;
`;

const NotesText = styled.div`
  font-size: 12px;
  margin: 0;
  padding: 0;
  color: #31363
  letter-spacing: .2px;
  line-height: 1.33;
  font-weight: stronger;
`;

const Rules = (props) => {
  const hostel = props;
  let checkInStartTime = hostel.checkInStart;
  checkInStartTime = checkInStartTime.slice(0, 5);
  let checkInEndTime = hostel.checkInEnd;
  checkInEndTime = checkInEndTime.slice(0, 5);
  let checkOutTime = hostel.checkOut;
  checkOutTime = checkOutTime.slice(0, 5);
  const checkInTime = `${checkInStartTime}–${checkInEndTime}`;

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
        <CheckInOutGridContainer>
          <CheckOutContainer>
            <CheckOutTitle>Check Out</CheckOutTitle>
            <CheckOutInfo>{checkOutTime}</CheckOutInfo>
            <CheckOutIcons>
              <CheckOutClock><FiClock /></CheckOutClock>
              <CheckOutArrow><FiArrowRight /></CheckOutArrow>
            </CheckOutIcons>
          </CheckOutContainer>
          <CheckInContainer>
            <CheckInTitle>Check In</CheckInTitle>
            <CheckInInfo>{checkInTime}</CheckInInfo>
            <CheckInIcons>
              <CheckInArrow><FiArrowRight /></CheckInArrow>
              <CheckInClock><FiClock /></CheckInClock>
            </CheckInIcons>
          </CheckInContainer>
          <CheckInOutBorder />
        </CheckInOutGridContainer>
      </PoliciesSection>
      <CancellationSection>
        <CancellationContainer>
          <CalendarIcon>
            <FaRegCalendarTimes />
          </CalendarIcon>
          <CancellationTitle>
            Cancellation Policy
          </CancellationTitle>
          <CancellationText>
            <p>
              <strong>Deposit Only rates</strong>
              <br />
              {/* eslint-disable-next-line max-len */}
              {hostel.cancellation}
            </p>
          </CancellationText>
        </CancellationContainer>
      </CancellationSection>
      <NotesSection>
        <NotesContainer>
          <PinIcon>
            <RiPushpinLine />
          </PinIcon>
          <NotesTitle>
            Things to Note
          </NotesTitle>
          <NotesText>
            <p>{hostel.importantNotesOne}</p>
            <p>{hostel.importantNotesTwo}</p>
            <p>{hostel.importantNotesThree}</p>
            <p>{hostel.importantNotesFour}</p>
            <p>{hostel.importantNotesFive}</p>
          </NotesText>
        </NotesContainer>
      </NotesSection>
    </RulesModalContainer>
  );
};

export default Rules;
