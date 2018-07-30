import { isNumber, isEmpty } from '@abhaydgarg/is';

export function validateLat (lat) {
  if (!isNumber(lat)) {
    return 0;
  }
  return lat;
}

export function validateLon (lon) {
  if (!isNumber(lon)) {
    return 0;
  }
  return lon;
}

export function validateLocation (location) {
  if (isEmpty(location)) {
    return null;
  }
  return location;
}
