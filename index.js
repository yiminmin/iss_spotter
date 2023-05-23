// index.js

// The code below is temporary and can be commented out.
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  fetchCoordsByIP(ip, (error, coords) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }

    fetchISSFlyOverTimes(coords, (error, passes) => {
      if (error) {
        console.log("It didn't work!" , error);
        return;
      }
    
      console.log("It worked! Returned passes:", passes);
    });
  });

  

});
