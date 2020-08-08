const faker = require('faker');

faker.seed(8675309);

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

module.exports.checkInStartHelper = checkInStartHelper;
module.exports.checkInEndHelper = checkInEndHelper;
module.exports.checkOutHelper = checkOutHelper;
