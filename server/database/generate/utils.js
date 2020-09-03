const faker = require('faker');
const constants = require('./constants');

faker.seed(86753192);

const getTime = (range) => {
  let hour = faker.random.number(range);
  let minutes = faker.random.arrayElement([0, 15, 30, 45]);
  hour = hour < 10 ? 0 + hour.toString() : hour.toString();
  minutes = minutes < 10 ? 0 + minutes.toString() : minutes.toString();
  return `${hour}:${minutes}:00`;
};

const checkInStartHelper = () => {
  return getTime({ min: 5, max: 13 });
};

const checkInEndHelper = () => {
  return getTime({ min: 14, max: 23 });
};

const checkOutHelper = () => {
  return getTime(23);
};

// ***************LESS EFFICIENT***************

// const getHostel = (id = 1) => {
//   const adjOne = faker.random.arrayElement(constants.adj);
//   const adjTwo = faker.random.arrayElement(constants.adj);
//   const city = faker.address.city();
//   const name = `${adjOne} ${adjTwo} ${city}`;
//   return { id, name };
// };

// const getRule = () => {
//   const checkInStart = checkInStartHelper();
//   const checkInEnd = checkInEndHelper();
//   const checkOut = checkOutHelper();
//   const kidFriendly = faker.random.boolean() === true ? 1 : 0;
//   const creditCards = faker.random.boolean() === true ? 1 : 0;
//   const ageRestriction = faker.random.boolean() === true ? 1 : 0;
//   const curfew = faker.random.boolean() === true ? 1 : 0;
//   const lockOut = faker.random.boolean() === true ? 1 : 0;
//   const nonSmoking = faker.random.boolean() === true ? 1 : 0;
//   const petFriendly = faker.random.boolean() === true ? 1 : 0;
//   const taxesIncluded = faker.random.boolean() === true ? 1 : 0;
//   const cancellation = faker.lorem.sentences(3);
//   const importantNotesOne = faker.lorem.paragraphs(3);
//   const importantNotesTwo = faker.lorem.paragraphs(4);
//   const importantNotesThree = faker.lorem.paragraphs(2);
//   const importantNotesFour = faker.lorem.paragraphs(5);
//   const importantNotesFive = faker.lorem.paragraphs(1);
//   return {
//     curfew,
//     cancellation,
//     check_in_start: checkInStart,
//     check_in_end: checkInEnd,
//     check_out: checkOut,
//     kid_friendly: kidFriendly,
//     credit_cards: creditCards,
//     age_restriction: ageRestriction,
//     lock_out: lockOut,
//     non_smoking: nonSmoking,
//     pet_friendly: petFriendly,
//     taxes_included: taxesIncluded,
//     important_notes_one: importantNotesOne,
//     important_notes_two: importantNotesTwo,
//     important_notes_three: importantNotesThree,
//     important_notes_four: importantNotesFour,
//     important_notes_five: importantNotesFive,
//   };
// };

// const getAddress = () => {
//   const i = Math.floor(Math.random() * 100);
//   const streetAddress = faker.address.streetAddress();
//   const city = faker.address.city();
//   const state = faker.address.stateAbbr();
//   const zipPlus = faker.address.zipCode();
//   const zip = zipPlus.slice(0, 5);
//   const country = faker.address.country();
//   const countryCode = faker.address.countryCode();
//   const latitude = constants.coordinates[i].lat;
//   const longitude = constants.coordinates[i].lng;
//   return {
//     city,
//     state,
//     zip,
//     country,
//     latitude,
//     longitude,
//     street_address: streetAddress,
//     country_code: countryCode,
//   };
// };

// const getDescription = () => {
//   const editorialOne = (faker.lorem.sentences(4));
//   const editorialTwo = (faker.lorem.paragraphs(4));
//   const descriptionOne = (faker.lorem.sentence(3, 12));
//   const descriptionTwo = (faker.lorem.paragraphs(2));
//   const descriptionThree = (faker.lorem.paragraphs(4));
//   return {
//     editorial_text_one: editorialOne,
//     editorial_text_two: editorialTwo,
//     description_text_one: descriptionOne,
//     description_text_two: descriptionTwo,
//     description_text_three: descriptionThree,
//   };
// };

// const getRecord = () => {
//   const hostel = getHostel();
//   const rule = getRule();
//   const address = getAddress();
//   const description = getDescription();
//   return {
//     ...hostel,
//     ...rule,
//     ...address,
//     ...description,
//   };
// };

// ROGUE CODE USED FOR REFERENCE

// const linkTableIDs = (callback) => {
//   for (let i = 1; i < 101; i += 1) {
//     const countUp = i;
//     const countDown = 101 - i;
//     {name_id, descriptions_id, rules_id, addresses_id};
//     db.query('INSERT INTO `full_listing` (name_id, descriptions_id, rules_id, addresses_id) VALUES (?, ?, ?, ?)', [countUp, countDown, countUp, countDown], callback);
//   }
// };

// ***************MORE EFFICIENT***************

// const getRecord = (id = 1) => {
//   const adjOne = faker.random.arrayElement(constants.adj);
//   const adjTwo = faker.random.arrayElement(constants.adj);
//   const city = faker.address.city();
//   const hostelName = `${adjOne} ${adjTwo} ${city}`;
//   const checkInStart = checkInStartHelper();
//   const checkInEnd = checkInEndHelper();
//   const checkOut = checkOutHelper();
//   const kidFriendly = faker.random.boolean() === true ? 1 : 0;
//   const creditCards = faker.random.boolean() === true ? 1 : 0;
//   const ageRestriction = faker.random.boolean() === true ? 1 : 0;
//   const curfew = faker.random.boolean() === true ? 1 : 0;
//   const lockOut = faker.random.boolean() === true ? 1 : 0;
//   const nonSmoking = faker.random.boolean() === true ? 1 : 0;
//   const petFriendly = faker.random.boolean() === true ? 1 : 0;
//   const taxesIncluded = faker.random.boolean() === true ? 1 : 0;
//   const cancellation = faker.lorem.sentences(3);
//   const importantNotesOne = faker.lorem.paragraphs(3);
//   const importantNotesTwo = faker.lorem.paragraphs(4);
//   const importantNotesThree = faker.lorem.paragraphs(2);
//   const importantNotesFour = faker.lorem.paragraphs(5);
//   const importantNotesFive = faker.lorem.paragraphs(1);
//   const i = Math.floor(Math.random() * 100);
//   const streetAddress = faker.address.streetAddress();
//   // const city = faker.address.city();
//   const state = faker.address.stateAbbr();
//   const zipPlus = faker.address.zipCode();
//   const zip = zipPlus.slice(0, 5);
//   const country = faker.address.country();
//   const countryCode = faker.address.countryCode();
//   const latitude = constants.coordinates[i].lat;
//   const longitude = constants.coordinates[i].lng;
//   const editorialOne = (faker.lorem.sentences(4));
//   const editorialTwo = (faker.lorem.paragraphs(4));
//   const descriptionOne = (faker.lorem.sentence(3, 12));
//   const descriptionTwo = (faker.lorem.paragraphs(2));
//   const descriptionThree = (faker.lorem.paragraphs(4));
//   return {
//     id,
//     hostel_name: hostelName,
//     curfew,
//     cancellation,
//     check_in_start: checkInStart,
//     check_in_end: checkInEnd,
//     check_out: checkOut,
//     kid_friendly: kidFriendly,
//     credit_cards: creditCards,
//     age_restriction: ageRestriction,
//     lock_out: lockOut,
//     non_smoking: nonSmoking,
//     pet_friendly: petFriendly,
//     taxes_included: taxesIncluded,
//     important_notes_one: importantNotesOne,
//     important_notes_two: importantNotesTwo,
//     important_notes_three: importantNotesThree,
//     important_notes_four: importantNotesFour,
//     important_notes_five: importantNotesFive,
//     city,
//     state,
//     zip,
//     country,
//     latitude,
//     longitude,
//     street_address: streetAddress,
//     country_code: countryCode,
//     editorial_text_one: editorialOne,
//     editorial_text_two: editorialTwo,
//     description_text_one: descriptionOne,
//     description_text_two: descriptionTwo,
//     description_text_three: descriptionThree,
//   };
// };

// ***************LESS DATA***************

const getRecord = (id = 1) => {
  const adjOne = faker.random.arrayElement(constants.adj);
  const adjTwo = faker.random.arrayElement(constants.adj);
  const city = faker.address.city();
  const hostelName = `${adjOne} ${adjTwo} ${city}`;
  const checkInStart = checkInStartHelper();
  const checkInEnd = checkInEndHelper();
  const checkOut = checkOutHelper();
  const kidFriendly = faker.random.boolean() === true ? 1 : 0;
  const creditCards = faker.random.boolean() === true ? 1 : 0;
  const ageRestriction = faker.random.boolean() === true ? 1 : 0;
  const curfew = faker.random.boolean() === true ? 1 : 0;
  const lockOut = faker.random.boolean() === true ? 1 : 0;
  const nonSmoking = faker.random.boolean() === true ? 1 : 0;
  const petFriendly = faker.random.boolean() === true ? 1 : 0;
  const taxesIncluded = faker.random.boolean() === true ? 1 : 0;
  const cancellation = faker.lorem.sentences(3);
  const importantNotesOne = faker.lorem.sentences(1);
  const importantNotesTwo = faker.lorem.sentences(1);
  const importantNotesThree = faker.lorem.sentences(1);
  const importantNotesFour = faker.lorem.sentences(1);
  const importantNotesFive = faker.lorem.sentences(1);
  const i = Math.floor(Math.random() * 100);
  const streetAddress = faker.address.streetAddress();
  // const city = faker.address.city();
  const state = faker.address.stateAbbr();
  const zipPlus = faker.address.zipCode();
  const zip = zipPlus.slice(0, 5);
  const country = faker.address.country();
  const countryCode = faker.address.countryCode();
  const latitude = constants.coordinates[i].lat;
  const longitude = constants.coordinates[i].lng;
  const editorialOne = (faker.lorem.sentences(1));
  const editorialTwo = (faker.lorem.sentences(1));
  const descriptionOne = (faker.lorem.sentence(1, 2));
  const descriptionTwo = (faker.lorem.sentences(1));
  const descriptionThree = (faker.lorem.sentences(1));
  return {
    id,
    hostel_name: hostelName,
    curfew,
    cancellation,
    check_in_start: checkInStart,
    check_in_end: checkInEnd,
    check_out: checkOut,
    kid_friendly: kidFriendly,
    credit_cards: creditCards,
    age_restriction: ageRestriction,
    lock_out: lockOut,
    non_smoking: nonSmoking,
    pet_friendly: petFriendly,
    taxes_included: taxesIncluded,
    important_notes_one: importantNotesOne,
    important_notes_two: importantNotesTwo,
    important_notes_three: importantNotesThree,
    important_notes_four: importantNotesFour,
    important_notes_five: importantNotesFive,
    city,
    state,
    zip,
    country,
    latitude,
    longitude,
    street_address: streetAddress,
    country_code: countryCode,
    editorial_text_one: editorialOne,
    editorial_text_two: editorialTwo,
    description_text_one: descriptionOne,
    description_text_two: descriptionTwo,
    description_text_three: descriptionThree,
  };
};

module.exports = {
  getRecord,
};
