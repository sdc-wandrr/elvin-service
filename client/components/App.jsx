import React from 'react';
import Axios from 'axios';
import Headline from './Headline.jsx';
import MapContainer from './MapContainer.jsx';
import Rules from './Rules.jsx';
import Description from './Description.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      street: '',
      city: '',
      country: '',
      location: {},
      zoomLevel: 10,
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
      importantNotes: '',
    };
  }

  componentDidMount() {
    this.getPropertyName();
    this.getPropertyAddress();
    this.getPropertyDescription();
    this.getPropertyRules();
  }

  getPropertyName() {
    Axios.get(`${window.location.href}/hostel`)
      .then((res) => {
        const data = res.data[0];
        this.setState({
          name: data.hostel_name,
        });
      })
      .catch((err) => err);
  }

  getPropertyAddress() {
    Axios.get(`${window.location.href}/address`)
      .then((res) => {
        const data = res.data[0];
        this.setState({
          street: data.street_address,
          city: data.city,
          country: data.country,
          location: {
            address: `${data.street_address}, ${data.city}, ${data.country}`,
            lat: data.latitude,
            lng: data.longitude,
          },
        });
      })
      .catch((err) => err);
  }

  getPropertyRules() {
    Axios.get(`${window.location.href}/rules`)
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
          importantNotes: data.important_notes,
        });
      })
      .catch((err) => err);
  }

  getPropertyDescription() {
    Axios.get(`${window.location.href}/description`)
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
          importantNotes={property.importantNotes}
        />
        <MapContainer location={property.location} zoomLevel={17} />
      </div>
    );
  }
}

export default App;
