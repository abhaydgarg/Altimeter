import DeviceInfo from 'react-native-device-info';
import SunCalc from 'suncalc';
import { showMessage } from 'react-native-messages';
import { isDate } from '@abhaydgarg/is';
import geodist from 'geodist';

import Config from '../Config';
import altitudes from '../Data/altitudes';

export default class Util {
  // empty function
  static emptyFunc = () => { }

  static isSimulator () {
    return DeviceInfo.isEmulator();
  }

  static getMiddleValue (numOne, numTwo) {
    return (numOne + numTwo) / 2;
  }

  static formatTime (date) {
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  static getDistance (lat1, lon1, lat2, lon2) {
    return geodist({ lat: lat1, lon: lon1 }, { lat: lat2, lon: lon2 }, { unit: 'meters', exact: true });
  }

  static getAltitudeLevelColorIdentifier (level) {
    switch (level) {
      case 'Low':
        return 'low';
      case 'Medium':
        return 'medium';
      case 'High':
        return 'high';
      case 'Very High':
        return 'veryhigh';
      case 'Extreme':
        return 'extreme';
      case 'Ultra':
        return 'ultra';
      default:
        return null;
    }
  }

  static getAltitudeData (altitude) {
    let total = altitudes.length;
    if (altitude <= 0) {
      return altitudes[0];
    }
    if (altitude >= 8839) {
      return altitudes[total - 1];
    }
    let next = 0;
    for (let count = 0; count < total; count++) {
      next = count + 1;
      if (altitude > altitudes[count].altitude && altitude < altitudes[next].altitude) {
        let middleValue = Util.getMiddleValue(altitudes[count].altitude, altitudes[next].altitude);
        if (altitude <= middleValue) {
          return altitudes[count];
        } else {
          return altitudes[next];
        }
      }
    }
    return {};
  }

  static getLocation (cb) {
    navigator.geolocation.getCurrentPosition(function (position) {
      if (__DEV__ && Util.isSimulator()) {
        // Dharamshala
        position.coords.altitude = 1530;
        position.coords.latitude = 32.2190441111111111;
        position.coords.longitude = 76.323402111111111;
      }
      // setTimeout to view animation
      setTimeout(() => {
        // cb(new Error('GPS error'));
        cb(null, position);
      }, 1500);
    }, function (error) {
      cb(error);
    }, Config.locationOptions);
  }

  static getSunriseSunset (lat, lon) {
    let times = SunCalc.getTimes(new Date(), lat, lon);
    return {
      sunrise: isDate(times.sunrise) ? Util.formatTime(times.sunrise) : null,
      sunset: isDate(times.sunset) ? Util.formatTime(times.sunset) : null
    };
  }

  static getGeocodingErrorMessage (message) {
    let error = 'Unknown location';
    if (__DEV__) {
      showMessage(message, {
        duration: 15000
      });
    }
    if (message === 'Network request failed') {
      error = 'No internet connection';
    }
    return error;
  }

  static handleLocationError (error) {
    let message = 'Unable to get GPS location';
    if (__DEV__) {
      message = error.message;
    }
    showMessage(message, {
      duration: 15000
    });
  }

  static handleCheckLocationPermissionError (error) {
    let message = 'Unable to detrmine location permission\'s status';
    if (__DEV__) {
      message = error.message;
    }
    showMessage(message, {
      duration: 15000
    });
  }

  static handleRequestLocationPermissionError (error) {
    let message = 'Unable to request location permission';
    if (__DEV__) {
      message = error.message;
    }
    showMessage(message, {
      duration: 15000
    });
  }

  static handleOpenMapError (error) {
    let message = 'Unable to open in map';
    if (__DEV__) {
      message = error.message;
    }
    showMessage(message, {
      duration: 15000
    });
  }
}
