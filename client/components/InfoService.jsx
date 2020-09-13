/* eslint-disable import/extensions */
import React from 'react';
import Axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import Headline from './Headline.jsx';
import Description from './Description.jsx';
import NavBar from './NavBar.jsx';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Noto, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
    word-spacing: .0625rem;
    background: #fff;
    line-height: 1.15;
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    padding: 0;
    text-size-adjust: 100%
    word-spacing: 1px;
    -webkit-font-smoothing: antialiased;
  }

  body {
    box-sizing: border-box;
    min-height: 100vh;
    position: relative;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
    text-size-adjust: 100%
  }
`;

const PageInner = styled.div`
  max-width: calc(100% - 2rem);
  margin: 0 72.5px 0 72.5px;
  padding: 0 16px;
`;

const NavBarContainer = styled.div`
  border-top: .0625rem solid #dddfe4;
  border-bottom: .0625rem solid #dddfe4;
  background-color: #f1f2f4;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

class InfoService extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      name: '',
      street: '',
      city: '',
      country: '',
      latitude: 0,
      longitude: 0,
      descriptionOne: '',
      descriptionTwo: '',
      descriptionThree: '',
      editorialOne: '',
      editorialTwo: '',
      checkInStart: '',
      checkInEnd: '',
      checkOut: '',
      kidFriendly: '',
      creditCards: '',
      ageRestriction: '',
      curfew: '',
      lockOut: '',
      nonSmoking: '',
      petFriendly: '',
      taxesIncluded: '',
      cancellation: '',
      importantNotesOne: '',
      importantNotesTwo: '',
      importantNotesThree: '',
      importantNotesFour: '',
      importantNotesFive: '',
    };
  }

  componentDidMount() {
    this.setHostelID();
  }

  componentDidUpdate(prevProps, prevState) {
    const property = this.state;
    if (prevState.id !== property.id) {
      this.getPropertyInfo();
      // this.getPropertyName();
      // this.getPropertyAddress();
      // this.getPropertyDescription();
      // this.getPropertyRules();
    }
  }

  setHostelID() {
    const idPath = window.location.pathname;
    const urlID = idPath.match(/\d+/);
    let newID = urlID[0];
    newID = Number.parseInt(newID, 10);
    this.setState({ id: newID });
  }

  getPropertyInfo() {
    const property = this.state;
    Axios.get(`/api/house/${property.id}`)
      .then((res) => {
        const data = res.data[0];
        const kidFriendlyBoo = data.kid_friendly === 1 ? 'Child Friendly' : 'No Children Allowed';
        const creditCardsBoo = data.credit_cards === 1 ? 'Credit Cards Accepted' : 'Credit Cards Not Accepted';
        const ageRestrictionBoo = data.age_restriction === 1 ? 'Age Restrictions' : 'No Age Restrictions';
        const curfewBoo = data.curfew === 1 ? 'Curfew Enforced' : 'No Curfew';
        const lockOutBoo = data.lock_out === 1 ? 'Lock Out Policy' : 'No Lockout Policy';
        const nonSmokingBoo = data.non_smoking === 1 ? 'Non-Smoking' : 'Smoking Allowed';
        const petFriendlyBoo = data.pet_friendly === 1 ? 'Pet Friendly' : 'No Pets Allowed';
        const taxesIncludedBoo = data.taxes_included === 1 ? 'Taxes Included' : 'Taxes Not Included';
        this.setState({
          name: data.hostel_name,
          street: data.street_address,
          city: data.city,
          country: data.country,
          latitude: data.latitude,
          longitude: data.longitude,
          checkInStart: data.check_in_start,
          checkInEnd: data.check_in_end,
          checkOut: data.check_out,
          kidFriendly: kidFriendlyBoo,
          creditCards: creditCardsBoo,
          ageRestriction: ageRestrictionBoo,
          curfew: curfewBoo,
          lockOut: lockOutBoo,
          nonSmoking: nonSmokingBoo,
          petFriendly: petFriendlyBoo,
          taxesIncluded: taxesIncludedBoo,
          cancellation: data.cancellation,
          importantNotesOne: data.important_notes_one,
          importantNotesTwo: data.important_notes_two,
          importantNotesThree: data.important_notes_three,
          importantNotesFour: data.important_notes_four,
          importantNotesFive: data.important_notes_five,
          editorialOne: data.editorial_text_one,
          editorialTwo: data.editorial_text_two,
          descriptionOne: data.description_text_one,
          descriptionTwo: data.description_text_two,
          descriptionThree: data.description_text_three,
        });
      })
      .catch((err) => err);
  }

  // getPropertyName() {
  //   const property = this.state;
  //   Axios.get(`/api/house/${property.id}/hostel`)
  //     .then((res) => {
  //       const data = res.data[0];
  //       this.setState({
  //         name: data.hostel_name,
  //       });
  //     })
  //     .catch((err) => err);
  // }

  // getPropertyAddress() {
  //   const property = this.state;
  //   Axios.get(`/api/house/${property.id}/address`)
  //     .then((res) => {
  //       const data = res.data[0];
  //       this.setState({
  //         street: data.street_address,
  //         city: data.city,
  //         country: data.country,
  //         latitude: data.latitude,
  //         longitude: data.longitude,
  //       });
  //     })
  //     .catch((err) => err);
  // }

  // getPropertyRules() {
  //   const property = this.state;
  //   Axios.get(`/api/house/${property.id}/rules`)
  //     .then((res) => {
  //       const data = res.data[0];
  //       const kidFriendlyBoo = data.kid_friendly === 1 ? 'Child Friendly' : 'No Children Allowed';
  //       const creditCardsBoo = data.credit_cards === 1 ? 'Credit Cards Accepted' : 'Credit Cards Not Accepted';
  //       const ageRestrictionBoo = data.age_restriction === 1 ? 'Age Restrictions' : 'No Age Restrictions';
  //       const curfewBoo = data.curfew === 1 ? 'Curfew Enforced' : 'No Curfew';
  //       const lockOutBoo = data.lock_out === 1 ? 'Lock Out Policy' : 'No Lockout Policy';
  //       const nonSmokingBoo = data.non_smoking === 1 ? 'Non-Smoking' : 'Smoking Allowed';
  //       const petFriendlyBoo = data.pet_friendly === 1 ? 'Pet Friendly' : 'No Pets Allowed';
  //       const taxesIncludedBoo = data.taxes_included === 1 ? 'Taxes Included' : 'Taxes Not Included';
  //       this.setState({
  //         checkInStart: data.check_in_start,
  //         checkInEnd: data.check_in_end,
  //         checkOut: data.check_out,
  //         kidFriendly: kidFriendlyBoo,
  //         creditCards: creditCardsBoo,
  //         ageRestriction: ageRestrictionBoo,
  //         curfew: curfewBoo,
  //         lockOut: lockOutBoo,
  //         nonSmoking: nonSmokingBoo,
  //         petFriendly: petFriendlyBoo,
  //         taxesIncluded: taxesIncludedBoo,
  //         cancellation: data.cancellation,
  //         importantNotesOne: data.important_notes_one,
  //         importantNotesTwo: data.important_notes_two,
  //         importantNotesThree: data.important_notes_three,
  //         importantNotesFour: data.important_notes_four,
  //         importantNotesFive: data.important_notes_five,
  //       });
  //     })
  //     .catch((err) => err);
  // }

  // getPropertyDescription() {
  //   const property = this.state;
  //   Axios.get(`/api/house/${property.id}/description`)
  //     .then((res) => {
  //       const data = res.data[0];
  //       this.setState({
  //         editorialOne: data.editorial_text_one,
  //         editorialTwo: data.editorial_text_two,
  //         descriptionOne: data.description_text_one,
  //         descriptionTwo: data.description_text_two,
  //         descriptionThree: data.description_text_three,
  //       });
  //     })
  //     .catch((err) => err);
  // }

  render() {
    const property = this.state;
    return (
      <div id="property-info">
        <GlobalStyle />
        <PageInner>
          <Headline
            name={property.name}
            street={property.street}
            city={property.city}
            country={property.country}
          />
        </PageInner>
        <NavBarContainer>
          <PageInner>
            <NavBar
              latitude={property.latitude}
              longitude={property.longitude}
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
          </PageInner>
        </NavBarContainer>
        <PageInner>
          <Description
            editorialOne={property.editorialOne}
            editorialTwo={property.editorialTwo}
            descriptionOne={property.descriptionOne}
            descriptionTwo={property.descriptionTwo}
            descriptionThree={property.descriptionThree}
          />
        </PageInner>
      </div>
    );
  }
}

export default InfoService;
