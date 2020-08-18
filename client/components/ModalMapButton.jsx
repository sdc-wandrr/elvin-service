import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import Map from './Map.jsx';
import Modal from '../hooks/ModalHook.jsx';

const StyledModal = Modal.styled`
  width: calc(100% - 5rem);
  height: flex;
  display: inline;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: .25rem;
  box-shadow: 0 3px 16px rgba(0,0,0,.6);
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

const MapModalHeader = styled.header`
  height: 66px;
  padding: 24px 24px 24px 32px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  line-height: 1;
`;

const HeaderSpacer = styled.div`
  flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  display: flex;
  align-items: center;
`;

const CloseButtonWrapper = styled.div`
  font-size: 1rem;
`;

const CloseButton = styled.button`
  border-style: none;
  font-size: inherit;
  font-weight: 700;
  letter-spacing: 0.1px;
  text-align: center;
  word-spacing: 0px;
  color: inherit;
  height: 32px;
  width: 32px;
  margin: -8px -8px -8px -8px;
  padding: 8px 8px 8px 8px;
  min-height: 16px;
  display: inline-flex;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;

  &:hover {
    background: #f1f2f4;
    transition: background .15s ease-in-out;
    text-transform: none;
  }
`;

const MapPaddingWrapper = styled.div`
  padding-bottom: 24px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 0px;
  position: relative;
  overflow: auto;
  display: block;
`;

const MapContainer = styled.div`
  font-size: 16px;
  width: 100%
  height: 31.25rem;
  margin: 0;
  display: block;
`;

const InlineDiv = styled.div`
  display: inline;
`;

const ModalMapButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const hostel = props;

  const toggleModal = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <InlineDiv>
      <NavButtons onClick={toggleModal}>
        <NavButtonInnerDiv>
          Map
        </NavButtonInnerDiv>
      </NavButtons>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <MapModalHeader>
          <HeaderSpacer />
          <CloseButtonWrapper>
            <CloseButton onClick={toggleModal}>
              <GrClose />
            </CloseButton>
          </CloseButtonWrapper>
        </MapModalHeader>
        <MapPaddingWrapper>
          <MapContainer>
            <Map
              latitude={hostel.latitude}
              longitude={hostel.longitude}
            />
          </MapContainer>
        </MapPaddingWrapper>
      </StyledModal>
    </InlineDiv>
  );
};

export default ModalMapButton;
