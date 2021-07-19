import { LOG_IN } from '../constants';

export const setUser2 = ({user}) => {
  return {
      type: LOG_IN,
      data:user
  }
}

export const setUser = (data) => {
  return {
      type: LOG_IN,
      data
  }
}