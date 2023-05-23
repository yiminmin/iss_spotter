//index.js
// Import the 'nextISSTimesForMyLocation' function from the 'iss' module.
const { nextISSTimesForMyLocation } = require('./iss');

// Function to format and print the ISS pass times.
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

// Use the imported function to fetch the next ISS pass times and print them.
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  // If there was no error, print the pass times.
  printPassTimes(passTimes);
});