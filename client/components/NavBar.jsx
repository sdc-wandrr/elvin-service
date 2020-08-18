/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ModalComponent } from '../hooks/ModalHook.jsx';
import ModalMapButton from './ModalMapButton.jsx';
import ModalRulesButton from './ModalRulesButton.jsx';

const NavButtons = styled.button`
  color: #31363f;
  font-size: 16px;
  white-space: nowrap;
  word-spacing: 1px;
  height: 54px;
  width: auto;
  padding: 16px 0 16px 0;
  border-style: none;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    transition: box-shadow 0.15s ease-in-out 0s;
    box-shadow: rgb(169, 175, 188) 0px -4px 0px 0px inset;
  }
`;

const ReviewsNavButton = styled(NavButtons)`
  display: inline;
`;

const NavButtonInnerDiv = styled.div`
  color: #31363f;
  text-alight: left;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0;
  padding: 0 16px;
  border-right: 1px solid #dddfe4;
  text-transform: capitalize;
`;

const ModalMapBackground = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  `;

const ModalRulesBackground = styled.div`
position: fixed;
left: 0;
top: 0;
bottom: 0;
right: 0;
overflow: auto;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.8);
`;

const NavBar = (props) => {
  const property = props;
  return (
    <div className="nav">
      <NavButtons type="button">
        <NavButtonInnerDiv>Prices</NavButtonInnerDiv>
      </NavButtons>
      <NavButtons type="button">
        <NavButtonInnerDiv>Facilities</NavButtonInnerDiv>
      </NavButtons>
      <ModalComponent backgroundComponent={ModalMapBackground}>
        <ModalMapButton
          latitude={property.latitude}
          longitude={property.longitude}
        />
      </ModalComponent>
      <ReviewsNavButton type="button">
        <NavButtonInnerDiv>Reviews</NavButtonInnerDiv>
      </ReviewsNavButton>
      <ModalComponent backgroundComponent={ModalRulesBackground}>
        <ModalRulesButton
          checkInStart={property.checkInStart}
          checkInEnd={property.checkInEnd}
          checkOut={property.checkOut}
          kidFriendly={property.kidFriendly}
          creditCards={property.creditCards}
          ageRestriction={property.ageRestriction}
          curfew={property.curfew}
          lockOut={property.lockOut}
          nonSmoking={property.nonSmoking}
          petFriendly={property.petFriendly}
          taxesIncluded={property.taxesIncluded}
          cancellation={property.cancellation}
          importantNotes={property.importantNotes}
        />
      </ModalComponent>
    </div>
  );
};

NavBar.propTypes = {
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
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default NavBar;
