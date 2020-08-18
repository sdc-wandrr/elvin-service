/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { MdArrowBack } from 'react-icons/md';
import styled from 'styled-components';
import Rules from './Rules.jsx';
import Modal from '../hooks/ModalHook.jsx';

const StyledModal = Modal.styled`
  background: white;
  position: fixed;
  width: 650px;
  height: 100%;
  overflow: auto;
  top: 0;
  right: 0;
  z-index: 110;
  box-shadow: 0 2px 8px rbga(0, 0, 0, 38);
  overflow-y: auto;
  padding: 0;

`;

const ModalRulesHeader = styled.header`
  display: flex;
  border-bottom: 1px solid #f1f2f4;
  padding: 16px 32px
  font-size: 16px;
  margin-left: 16px;
`;

const CloseModalArrowIcon = styled.span`
  color: #31363f;
  margin-left:16px
  font-size: 16px;
  min-height: auto;
  min-width: auto;
  align-self: center;
  display: inline-grid;
  letter-spacing: normal;
  font-size: inherit;
`;

const ModalCloseButton = styled.button`
  background-color: transparent;
  border-style: none;
  outline: none;
  cursor: pointer;
  font-size: 24px;
`;

const HeaderTitle = styled.h2`
  color: #31363f;
  letter-spacing: -.1px;
  font-size: 1.25rem;
  line-height: 1.3;
  font-weight: 400;
  padding: 0;
  margin: 0;
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const RulesContentContainer = styled.div`
  font-size: 16px;
  line-height: 18.4px;
  word-spacing: 1px;
  display: block;
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

const InlineDiv = styled.div`
  display: inline;
`;

const ModalRulesButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const hostel = props;

  const toggleModal = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <InlineDiv>
      <NavButtons onClick={toggleModal}>
        <NavButtonInnerDiv>Rules</NavButtonInnerDiv>
      </NavButtons>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <ModalRulesHeader>
          <ModalCloseButton onClick={toggleModal}>
            <CloseModalArrowIcon>
              <MdArrowBack />
            </CloseModalArrowIcon>
          </ModalCloseButton>
          <HeaderTitle>House Rules</HeaderTitle>
        </ModalRulesHeader>
        <RulesContentContainer>
          <Rules
            checkInStart={hostel.checkInStart}
            checkInEnd={hostel.checkInEnd}
            checkOut={hostel.checkOut}
            kidFriendly={hostel.kidFriendly}
            creditCards={hostel.creditCards}
            ageRestriction={hostel.ageRestriction}
            curfew={hostel.curfew}
            lockOut={hostel.lockOut}
            nonSmoking={hostel.nonSmoking}
            petFriendly={hostel.petFriendly}
            taxesIncluded={hostel.taxesIncluded}
            cancellation={hostel.cancellation}
            importantNotes={hostel.importantNotes}
          />
        </RulesContentContainer>
      </StyledModal>
    </InlineDiv>
  );
};

export default ModalRulesButton;
