import { isEmpty } from '@abhaydgarg/is';

export function validateTime (time) {
  if (isEmpty(time)) {
    return '0:00';
  }
  return time;
}
