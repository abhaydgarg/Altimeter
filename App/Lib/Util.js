import altitudes from '../Data/altitudes';

export default class Util {
  // empty function
  static emptyFunc = () => { }

  static getAltitudeLevelColor (level) {
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

  static getMiddleValue (numOne, numTwo) {
    return (numOne + numTwo) / 2;
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
}
