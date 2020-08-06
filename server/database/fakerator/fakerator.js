var Fakerator = require('fakerator');
var fakerator = Fakerator();

fakerator.random.boolean();


/*========== RULES TABLE==========*/

// needed for check_in_start, check_in_end, and check_out
// mySQL TIME format: HH:MM:SS or 'hhmmss'. 103000 = 10:30am; 230000 = 11:00pm
fakerator.random.number(max);
fakerator.random.number(min, max);

const checkInStart = () => {
  var minArray = [0, 15, 30, 45];
  var hour = fakerator.random.number(5, 13);
  var minutes = fakerator.arrayElement(minArray);

  if (hour < 10) {
    hour = 0 + hour.toString();
  } else if (hour >= 10) {
    hour = hour.toString();
  }

  if (minutes === 0) {
    minutes = 0 + minutes.toString();
  } else if (minutes !== 0) {
    minutes = minutes.toString();
  }
};
