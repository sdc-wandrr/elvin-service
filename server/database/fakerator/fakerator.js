const Fakerator = require('fakerator');

const fakerator = Fakerator();

/* ========== RULES TABLE========== */

// needed for check_in_start, check_in_end, and check_out
// mySQL TIME format: HH:MM:SS or 'hhmmss'. 103000 = 10:30am; 230000 = 11:00pm

const checkInStart = () => {
  const minArray = [0, 15, 30, 45];
  let hour = fakerator.random.number(5, 13);
  let minutes = fakerator.arrayElement(minArray);

  hour = hour < 10 ? 0 + hour.toString() : hour.toString();
  minutes = minutes === 0 ? 0 + minutes.toString() : minutes.toString();

  return `${hour}${minutes}00`;
};

const checkInEnd = () => {
  const minArray = [0, 15, 30, 45];
  let hour = fakerator.random.number(14, 23);
  let minutes = fakerator.arrayElement(minArray);

  hour = hour < 10 ? 0 + hour.toString() : hour.toString();
  minutes = minutes === 0 ? 0 + minutes.toString() : minutes.toString();

  return `${hour}${minutes}00`;
};

const checkOut = () => {
  const minArray = [0, 15, 30, 45];
  let hour = fakerator.random.number(23);
  let minutes = fakerator.arrayElement(minArray);

  hour = hour < 10 ? 0 + hour.toString() : hour.toString();
  minutes = minutes === 0 ? 0 + minutes.toString() : minutes.toString();

  return `${hour}${minutes}00`;
};

const kidFriendly = fakerator.random.boolean() === true ? 1 : 0;

const creditCards = fakerator.random.boolean() === true ? 1 : 0;

const ageRestriction = fakerator.random.boolean() === true ? 1 : 0;

const curfew = fakerator.random.boolean() === true ? 1 : 0;

const lockOut = fakerator.random.boolean() === true ? 1 : 0;

const nonSmoking = fakerator.random.boolean() === true ? 1 : 0;

const petFriendly = fakerator.random.boolean() === true ? 1 : 0;

const taxesIncluded = fakerator.random.boolean() === true ? 1 : 0;
