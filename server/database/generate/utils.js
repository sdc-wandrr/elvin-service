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

const getParagraphs = (count, size) => {
  const paragraphs = [];
  for (let i = 0; i < count; i += 1) {
    paragraphs.push(faker.lorem.paragraphs(size));
  }
  return paragraphs;
};

const getSentences = (count, size) => {
  const sentences = [];
  for (let i = 0; i < count; i += 1) {
    sentences.push(faker.lorem.sentences(size));
  }
  return sentences;
};

const paragraphs1 = getParagraphs(1000, 1);
const paragraphs2 = getParagraphs(1000, 2);
const paragraphs3 = getParagraphs(1000, 3);
const paragraphs4 = getParagraphs(1000, 4);
const paragraphs5 = getParagraphs(1000, 5);
const sentences3 = getSentences(1000, 3);
const sentences4 = getSentences(1000, 4);

const getRecord = (id = 1) => {
  const i = Math.floor(Math.random() * 100);
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
  const cancellation = faker.random.arrayElement(sentences3);
  const importantNotesOne = faker.random.arrayElement(paragraphs3);
  const importantNotesTwo = faker.random.arrayElement(paragraphs4);
  const importantNotesThree = faker.random.arrayElement(paragraphs2);
  const importantNotesFour = faker.random.arrayElement(paragraphs5);
  const importantNotesFive = faker.random.arrayElement(paragraphs1);
  const streetAddress = faker.address.streetAddress();
  const state = faker.address.stateAbbr();
  const zipPlus = faker.address.zipCode();
  const zip = zipPlus.slice(0, 5);
  const country = faker.address.country();
  const countryCode = faker.address.countryCode();
  const latitude = constants.coordinates[i].lat;
  const longitude = constants.coordinates[i].lng;
  const editorialOne = faker.random.arrayElement(sentences4);
  const editorialTwo = faker.random.arrayElement(paragraphs4);
  const descriptionOne = faker.lorem.sentence(3, 12);
  const descriptionTwo = faker.random.arrayElement(paragraphs2);
  const descriptionThree = faker.random.arrayElement(paragraphs4);
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
