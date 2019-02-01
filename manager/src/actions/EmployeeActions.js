import {
  EMPLOYEE_UPDATE
} from './types';

// one action to update any input - prop: value
export function employeeUpdate({ prop, value }) {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
}
