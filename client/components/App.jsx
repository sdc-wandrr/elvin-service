/* eslint-disable import/extensions */
import React from 'react';
import Axios from 'axios';
// import styled, { createGlobalStyle } from 'styled-components';
import Headline from './Headline.jsx';
import Map from './Map.jsx';
import Rules from './Rules.jsx';
import Description from './Description.jsx';
import NavBar from './NavBar.jsx';

// const GlobalStyle = createGlobalStyle`
//   @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap");

//   body {
//     padding: 0;
//     margin: 0;
//     font-family: Roboto, sans-serif;
//   }
// `;

// const Container = styled.div`

// `;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 99,
      name: '',
      street: '',
      city: '',
      country: '',
      latitude: 0,
      longitude: 0,
      description: '',
      editorial: '',
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
      importantNotes: '',
    };
  }

  componentDidMount() {
    this.getPropertyName();
    this.getPropertyAddress();
    this.getPropertyDescription();
    this.getPropertyRules();
  }

  setHostelID() {
    const path = window.location.pathname;
    const urlID = path.match(/\d+/);
    let newID = urlID[0];
    newID = Number.parseInt(newID, 10);
    this.setState({ id: newID });
  }

  getPropertyName() {
    const property = this.state;
    Axios.get(`/api/house/${property.id}/hostel`)
      .then((res) => {
        const data = res.data[0];
        this.setState({
          name: data.hostel_name,
        });
      })
      .catch((err) => err);
  }

  getPropertyAddress() {
    const property = this.state;
    Axios.get(`/api/house/${property.id}/address`)
      .then((res) => {
        const data = res.data[0];
        this.setState({
          street: data.street_address,
          city: data.city,
          country: data.country,
          latitude: data.latitude,
          longitude: data.longitude,
        });
      })
      .catch((err) => err);
  }

  getPropertyRules() {
    const property = this.state;
    Axios.get(`/api/house/${property.id}/rules`)
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
          importantNotes: data.important_notes,
        });
      })
      .catch((err) => err);
  }

  getPropertyDescription() {
    const property = this.state;
    Axios.get(`/api/house/${property.id}/description`)
      .then((res) => {
        const data = res.data[0];
        this.setState({
          editorial: data.editorial_text,
          description: data.description_text,
        });
      })
      .catch((err) => err);
  }

  render() {
    const property = this.state;
    return (
      <div id="property-info">
        <Headline
          name={property.name}
          street={property.street}
          city={property.city}
          country={property.country}
        />
        <NavBar />
        <Description
          editorial={property.editorial}
          description={property.description}
        />
        <Rules
          rules={property.rules}
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
        <Map latitude={property.latitude} longitude={property.longitude} />
      </div>
    );
  }
}

export default App;
