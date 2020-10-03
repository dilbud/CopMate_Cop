import {
  SET_FORM,
  // SET_IMAGE,
  SET_FINE,
  SET_STATE,
  SUBMIT,
  RESET,
} from '../actions/FineAction';

const initialState = {
  nic: '',
  licenseId: '',
  name: '',
  // image: null,
  fine: [],
  state: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM:
      return {
        ...state,
        nic: action.payload.nic,
        licenseId: action.payload.licenseId,
        name: action.payload.name,
      };
    // case SET_IMAGE:
    //   return { ...state, image: action.payload };
    case SET_FINE:
      return { ...state, fine: action.payload };
    case SET_STATE:
      return { ...state, state: action.payload };
    case SUBMIT:
      return initialState;
    case RESET:
      return state;
    default:
      return state;
  }
};
