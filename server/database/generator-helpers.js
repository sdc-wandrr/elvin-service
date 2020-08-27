const faker = require('faker');
const constants = require('./constants');

faker.seed(86753092);

const checkInStartHelper = () => {
  let hour = faker.random.number({ min: 5, max: 13 });
  let minutes = faker.random.arrayElement([0, 15, 30, 45]);
  hour = hour < 10 ? 0 + hour.toString() : hour.toString();
  minutes = minutes === 0 ? 0 + minutes.toString() : minutes.toString();
  return `${hour}${minutes}00`;
};

const checkInEndHelper = () => {
  let hour = faker.random.number({ min: 14, max: 23 });
  let minutes = faker.random.arrayElement([0, 15, 30, 45]);
  hour = hour < 10 ? 0 + hour.toString() : hour.toString();
  minutes = minutes === 0 ? 0 + minutes.toString() : minutes.toString();
  return `${hour}${minutes}00`;
};

const checkOutHelper = () => {
  const minArray = [0, 15, 30, 45];
  let hour = faker.random.number(23);
  let minutes = faker.random.arrayElement(minArray);

  hour = hour < 10 ? 0 + hour.toString() : hour.toString();
  minutes = minutes === 0 ? 0 + minutes.toString() : minutes.toString();

  return `${hour}${minutes}00`;
};

const getHostel = () => {
  const adjOne = faker.random.arrayElement(constants.adj);
  const adjTwo = faker.random.arrayElement(constants.adj);
  const city = faker.address.city();
  const name = `${adjOne} ${adjTwo} ${city}`;
  return { name };
};

const getRule = () => {
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
  const importantNotesOne = faker.lorem.paragraphs(3);
  const importantNotesTwo = faker.lorem.paragraphs(4);
  const importantNotesThree = faker.lorem.paragraphs(2);
  const importantNotesFour = faker.lorem.paragraphs(5);
  const importantNotesFive = faker.lorem.paragraphs(1);
  return {
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
  };
};

const getAddress = () => {
  const i = Math.floor(Math.random() * 100);
  const streetAddress = faker.address.streetAddress();
  const city = faker.address.city();
  const state = faker.address.stateAbbr();
  const zipPlus = faker.address.zipCode();
  const zip = zipPlus.slice(0, 5);
  const country = faker.address.country();
  const countryCode = faker.address.countryCode();
  const latitude = constants.coordinates[i].lat;
  const longitude = constants.coordinates[i].lng;
  return {
    city,
    state,
    zip,
    country,
    latitude,
    longitude,
    street_address: streetAddress,
    country_code: countryCode,
  };
};

const getDescription = () => {
  const editorialOne = (faker.lorem.sentences(4));
  const editorialTwo = (faker.lorem.paragraphs(4));
  const descriptionOne = (faker.lorem.sentence(3, 12));
  const descriptionTwo = (faker.lorem.paragraphs(2));
  const descriptionThree = (faker.lorem.paragraphs(4));
  return {
    editorial_text_one: editorialOne,
    editorial_text_two: editorialTwo,
    description_text_one: descriptionOne,
    description_text_two: descriptionTwo,
    description_text_three: descriptionThree,
  };
};

// const linkTableIDs = (callback) => {
//   for (let i = 1; i < 101; i += 1) {
//     const countUp = i;
//     const countDown = 101 - i;
//     {name_id, descriptions_id, rules_id, addresses_id};
//     db.query('INSERT INTO `full_listing` (name_id, descriptions_id, rules_id, addresses_id) VALUES (?, ?, ?, ?)', [countUp, countDown, countUp, countDown], callback);
//   }
// };

module.exports = {
  getHostel,
  getRule,
  getAddress,
  getDescription,
};
