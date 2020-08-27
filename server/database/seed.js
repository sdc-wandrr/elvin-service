const faker = require('faker');
const db = require('./database');
const helper = require('./seedHelpers');
const constants = require('./constants');

faker.seed(86753092);

const tracker = (name, target, next, args) => {
  let counter = 0;
  return (error, results) => {
    if (error) {
      console.log(`Error while executing query inside ${name}:`, error);
      return;
    }
    counter += 1;
    console.log(`Query executed ${counter} times inside ${name}`);
    if(counter === target) {
      console.log(`${next.name} will run next`);
      next(args);
    }
  };
};

/* ========== HOSTELS TABLE========== */

const seedHostels = (callback) => {
  /* ========== HOSTELS TABLE========== */
  for (let i = 0; i < 100; i += 1) {
    // eslint-disable-next-line prefer-template
    const name = (faker.random.arrayElement(constants.adj) + ' ' + faker.random.arrayElement(constants.adj) + ' ' + faker.address.city());
    db.query('INSERT INTO hostels (hostel_name) VALUES (?);', [`${name}`], callback);
  }
};

/* ========== RULES TABLE========== */
const seedRules = (callback) => {
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
    const cancellation = faker.lorem.sentences(3);
    const importantNotesOne = faker.lorem.paragraphs(3);
    const importantNotesTwo = faker.lorem.paragraphs(4);
    const importantNotesThree = faker.lorem.paragraphs(2);
    const importantNotesFour = faker.lorem.paragraphs(5);
    const importantNotesFive = faker.lorem.paragraphs(1);
    db.query('INSERT INTO rules (check_in_start, check_in_end, check_out, kid_friendly, credit_cards, age_restriction, curfew, lock_out, non_smoking, pet_friendly, taxes_included, cancellation, important_notes_one, important_notes_two, important_notes_three, important_notes_four, important_notes_five) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);', [checkInStart, checkInEnd, checkOut, kidFriendly, creditCards, ageRestriction, curfew, lockOut, nonSmoking, petFriendly, taxesIncluded, cancellation, importantNotesOne, importantNotesTwo, importantNotesThree, importantNotesFour, importantNotesFive], callback);
  }
};

/* ========== ADDRESSES TABLE========== */
const seedAddress = (callback) => {
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
    db.query('INSERT INTO addresses (street_address, city, state, zip, country, country_code, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?, ?);', [streetAddress, city, state, zip, country, countryCode, latitude, longitude], callback);
  }
};

/* ========== DESCRIPTIONS TABLE========== */
const seedDescriptions = (callback) => {
  for (let i = 0; i < 100; i += 1) {
    const editorialOne = (faker.lorem.sentences(4));
    const editorialTwo = (faker.lorem.paragraphs(4));
    const descriptionOne = (faker.lorem.sentence(3, 12));
    const descriptionTwo = (faker.lorem.paragraphs(2));
    const descriptionThree = (faker.lorem.paragraphs(4));
    db.query('INSERT INTO descriptions (editorial_text_one, editorial_text_two, description_text_one, description_text_two, description_text_three) VALUES (?, ?, ?, ?, ?);', [editorialOne, editorialTwo, descriptionOne, descriptionTwo, descriptionThree], callback);
  }
};

const linkTableIDs = (callback) => {
  for (let i = 1; i < 101; i += 1) {
    const countUp = i;
    const countDown = 101 - i;
    db.query('INSERT INTO `full_listing` (name_id, descriptions_id, rules_id, addresses_id) VALUES (?, ?, ?, ?)', [countUp, countDown, countUp, countDown], callback);
  }
};

const a = tracker('linkTableIDs', 100, () => db.end());
const b = tracker('seedDescriptions', 100, linkTableIDs, a);
const c = tracker('seedAddress', 100, seedDescriptions, b);
const d = tracker('seedRules', 100, seedAddress, c);
const e = tracker('seedHostels', 100, seedRules, d);

seedHostels(e);
// seedRules();
// seedAddress();
// seedDescriptions();
// linkTableIDs();

//db.end();
