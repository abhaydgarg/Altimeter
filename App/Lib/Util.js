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

  static getAltitudeData (altitude) {
    for (let node of altitudes) {
      if (node.altitude >= altitude) {
        return node;
      }
    }
    return {};
  }

}
