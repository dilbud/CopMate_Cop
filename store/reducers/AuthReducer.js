import { LOGIN, SIGNUP, LOGOUT } from '../actions/AuthAction';

const initialState = {
  userId: null,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return initialState;
    case LOGIN:
      return { ...state, userId: action.payload.id, user: action.payload.user };
    default:
      return state;
  }
};
