/* eslint-disable no-unused-expressions */
import React from 'react';
import styled from 'styled-components';
import { ModalComponent } from '../hooks/ModalHook.jsx';
import ModalMapButton from './ModalMapButton.jsx';
import ModalRulesButton from './ModalRulesButton.jsx';
import ModalWindow from './ben/ModalReview.jsx';

const NavBarGridContainer = styled.div`
  display: grid;
  grid-template-columns: 78px 97px 67px 97px 127px;
  grid-template-rows: 1fr;
  gap: 1px 1px;
  grid-template-areas: "PricesContainer FacilitiesContainer MapContainer ReviewsContainer RulesContainer FlexArea";
`;
const PricesContainer = styled.div`
  grid-area: PricesContainer;
`;
const FacilitiesContainer = styled.div`
  grid-area: FacilitiesContainer;
`;
const MapContainer = styled.div`
  grid-area: MapContainer;
`;
const ReviewsContainer = styled.div`
  grid-area: ReviewsContainer;
`;

const RulesContainer = styled.div`
  grid-area: RulesContainer;
`;

const FlexArea = styled.div`
  grid-area: FlexArea;
`;

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
    <NavBarGridContainer>
      <PricesContainer>
        <NavButtons type="button">
          <NavButtonInnerDiv>Prices</NavButtonInnerDiv>
        </NavButtons>
      </PricesContainer>
      <FacilitiesContainer>
        <NavButtons type="button">
          <NavButtonInnerDiv>Facilities</NavButtonInnerDiv>
        </NavButtons>
      </FacilitiesContainer>
      <MapContainer>
        <ModalComponent backgroundComponent={ModalMapBackground}>
          <ModalMapButton
            latitude={property.latitude}
            longitude={property.longitude}
          />
        </ModalComponent>
      </MapContainer>
      <ReviewsContainer>
        <NavButtons type="button">
          <NavButtonInnerDiv>Reviews</NavButtonInnerDiv>
          <ModalWindow
            buttonDisplay="block"
            reviews={property.reviews}
            averages={property.averages}
            count={property.reviewsLength}
            word={property.revieweWord}
            buttonStyle={2}
            innerStyle={2}
            buttonText={property.buttonText}
          />
        </NavButtons>
      </ReviewsContainer>
      <RulesContainer>
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
            importantNotesOne={property.importantNotesOne}
            importantNotesTwo={property.importantNotesTwo}
            importantNotesThree={property.importantNotesThree}
            importantNotesFour={property.importantNotesFour}
            importantNotesFive={property.importantNotesFive}
          />
        </ModalComponent>
      </RulesContainer>
      <FlexArea />
    </NavBarGridContainer>
  );
};

export default NavBar;
