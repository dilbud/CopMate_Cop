import { LOGIN, SIGNUP, LOGOUT } from '../actions/AuthAction';

const initialState = {
  userId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return initialState;
    case LOGIN:
      console.log(action.payload);
      return initialState;
    default:
      return state;
  }
};
