import { isEmpty } from '@abhaydgarg/is';

export function validatePercentage (percentage) {
  if (isEmpty(percentage)) {
    return null;
  }
  return percentage;
}
