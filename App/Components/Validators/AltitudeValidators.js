import { isNumber, isEmpty } from '@abhaydgarg/is';

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
  return accuracy;
}

export function validateLevel (level) {
  if (isEmpty(level)) {
    return null;
  }
  return level;
}
