const faker = require('faker');
const db = require('./database');
const helper = require('./seedHelpers');
const constants = require('./constants');

faker.seed(86753092);

/* ========== HOSTELS TABLE========== */

const seedHostels = () => {
  /* ========== HOSTELS TABLE========== */
  for (let i = 0; i < 100; i += 1) {
    // eslint-disable-next-line prefer-template
    const name = (faker.random.arrayElement(constants.adj) + ' ' + faker.random.arrayElement(constants.adj) + ' ' + faker.address.city());
    db.query('INSERT INTO hostels (hostel_name) VALUES (?);', [`${name}`]);
  }
};
seedHostels();

/* ========== RULES TABLE========== */
const seedRules = () => {
  for (let i = 0; i < 100; i += 1) {
    const checkInStart = helper.checkInStartHelper();
    const checkInEnd = helper.checkInEndHelper();
    const checkOut = helper.checkOutHelper();
    const kidFriendly = faker.random.boolean() === true ? 1 : 0;
    const creditCards = faker.random.boolean() === true ? 1 : 0;
    const ageRestriction = faker.random.boolean() === true ? 1 : 0;
    const curfew = faker.random.boolean() === true ? 1 : 0;
    const lockOut = faker.random.boolean() === true ? 1 : 0;
    const nonSmoking = faker.random.boolean() === true ? 1 : 0;
    const petFriendly = faker.random.boolean() === true ? 1 : 0;
    const taxesIncluded = faker.random.boolean() === true ? 1 : 0;
    const cancellation = faker.lorem.sentences(2);
    const importantNotes = faker.lorem.paragraphs(2, '\n');
    db.query('INSERT INTO rules (check_in_start, check_in_end, check_out, kid_friendly, credit_cards, age_restriction, curfew, lock_out, non_smoking, pet_friendly, taxes_included, cancellation, important_notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);', [checkInStart, checkInEnd, checkOut, kidFriendly, creditCards, ageRestriction, curfew, lockOut, nonSmoking, petFriendly, taxesIncluded, cancellation, importantNotes]);
  }
};
seedRules();

/* ========== ADDRESSES TABLE========== */
const seedAddress = () => {
  for (let i = 0; i < 100; i += 1) {
    const streetAddress = faker.address.streetAddress();
    const city = faker.address.city();
    const state = faker.address.stateAbbr();
    const zipPlus = faker.address.zipCode();
    const zip = zipPlus.slice(0, 5);
    const country = faker.address.country();
    const countryCode = faker.address.countryCode();
    const latitude = constants.coordinates[i].lat;
    const longitude = constants.coordinates[i].lng;
    db.query('INSERT INTO addresses (street_address, city, state, zip, country, country_code, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?, ?);', [streetAddress, city, state, zip, country, countryCode, latitude, longitude]);
  }
};
seedAddress();

/* ========== DESCRIPTIONS TABLE========== */
const seedDescriptions = () => {
  for (let i = 0; i < 100; i += 1) {
    const editorial = (faker.lorem.sentence() + faker.lorem.paragraphs());
    const description = (
      faker.lorem.paragraphs() + faker.lorem.sentence() + faker.lorem.paragraphs()
      + faker.lorem.paragraphs()
    );
    db.query('INSERT INTO descriptions (editorial_text, description_text) VALUES (?, ?);', [editorial, description]);
  }
};
seedDescriptions();

const linkTableIDs = () => {
  for (let i = 1; i < 101; i += 1) {
    const countUp = i;
    const countDown = 101 - i;
    db.query('INSERT INTO `full_listing` (name_id, descriptions_id, rules_id, addresses_id) VALUES (?, ?, ?, ?)', [countUp, countDown, countUp, countDown]);
  }
};

linkTableIDs();

db.end();
