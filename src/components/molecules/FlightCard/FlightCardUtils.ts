export const getFlightLogo = (flightName: string) => {
  let logo;
  switch (flightName) {
    case 'JetSpice':
      logo = require('../../../../assets/images/spicejet.png');
      break;
    case 'Air India':
      logo = require('../../../../assets/images/airindia.png');
      break;
    default:
      logo = require('../../../../assets/images/airindia.png');
  }
  return logo;
};
