/* eslint-disable no-unused-expressions */
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';
import style from '../css/navbar.module.css';
import Rules from './Rules.jsx';
import Map from './Map.jsx';

// import useOnClickOutside from '../hooks/useOnClickOutside.jsx';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapDisplay: 'none',
      rulesDisplay: 'none',
    };
  }

  handleMapClick(e) {
    e.preventDefault();
    const getState = this.state;
    let type;
    getState.mapDisplay === 'none'
      ? type = 'block'
      : type = 'none';
    this.setState({
      mapDisplay: type,
    });
  }

  handleRulesClick(e) {
    e.preventDefault();
    const getState = this.state;
    let type;
    getState.rulesDisplay === 'none'
      ? type = 'block'
      : type = 'none';
    this.setState({
      rulesDisplay: type,
    });
  }

  render() {
    const property = this.props;
    return (
      <div className="nav">
        <button type="button">Prices</button>
        <button type="button">Facilities</button>
        <button type="button">Prices</button>
        <button
          onClick={this.handleMapClick.bind(this)}
          style={{ display: property.buttonDisplay }}
        >
          Map
        </button>
        <div style={{ display: this.state.mapDisplay }}>
          <div>
            <div>
              <span onClick={this.handleMapClick.bind(this)}>
                <FaArrowLeft />
              </span>
            </div>
            <div>
              <Map
                latitude={property.latitude}
                longitude={property.longitude}
              />
            </div>
          </div>
        </div>

        <div className={style.modal}>
          <div className={style.header}>
            <button
              className={style.modalbutton}
              onClick={this.handleRulesClick.bind(this)}
              style={{ display: property.buttonDisplay }}
            >
              Rules
            </button>
            <div className={style.overlay} style={{ display: this.state.rulesDisplay }}>
              <div>
                <div>
                  <span onClick={this.handleRulesClick.bind(this)}>
                    <FaArrowLeft />
                  </span>
                </div>
              </div>
              <div>
                <Rules
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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
