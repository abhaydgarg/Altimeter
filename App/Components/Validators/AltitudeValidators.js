import { isNumber, isEmpty } from '@abhaydgarg/is';
import formatNumber from 'simple-format-number';

export function validateAltitude (altitude) {
  if (!isNumber(altitude)) {
    return 0;
  }
  return altitude;
}

export function validateAccuracy (accuracy) {
  if (!isNumber(accuracy)) {
    return 0;
  }
  if (accuracy % 1 !== 0) {
    return formatNumber(accuracy, {
      fractionDigits: 2,
      useGrouping: false
    });
  }
  return accuracy;
}

export function validateLevel (level) {
  if (isEmpty(level)) {
    return null;
  }
  return level;
}
