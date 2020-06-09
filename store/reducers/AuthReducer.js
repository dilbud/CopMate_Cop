import { LOGOUT } from '../actions/auth';

const initialState = {
  userId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
