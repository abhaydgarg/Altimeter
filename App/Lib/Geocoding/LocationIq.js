import { isEmpty } from '@abhaydgarg/is';

import Config from '../../Config';

function reverse (lat, lon, cb) {
  // setTimeout(() => {
  //   // cb('Invalid key');
  //   cb(null, 'Lower Ram Nagar, Ram Nagar, Dharamshala, Kangra, Himachal Pradesh, 176200, India');
  // }, 1000);
  let endpoint = `${Config.locationiq.endpoints.reverse}?key=${Config.locationiq.key}&lat=${lat}&lon=${lon}&format=json`;
  fetch(endpoint, {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  }).then(function (json) {
    if (json.error) {
      cb(json.error);
    } else {
      cb(null, formatAddress(json.address));
    }
  }).catch(function (error) {
    cb(error.message);
  });
}

function formatAddress (address) {
  let formattedAddress = [];
  if (!isEmpty(address.road)) {
    formattedAddress.push(address.road);
  }
  if (!isEmpty(address.suburb)) {
    formattedAddress.push(address.suburb);
  } else {
    if (!isEmpty(address.neighbourhood)) {
      formattedAddress.push(address.neighbourhood);
    }
  }
  if (!isEmpty(address.village)) {
    formattedAddress.push(address.village);
  }
  if (!isEmpty(address.town)) {
    formattedAddress.push(address.town);
  }
  if (!isEmpty(address.city)) {
    formattedAddress.push(address.city);
  }
  if (!isEmpty(address.state)) {
    formattedAddress.push(address.state);
  }
  if (!isEmpty(address.country)) {
    formattedAddress.push(address.country);
  }
  return formattedAddress.join(', ');
}

export default {
  reverse
};
