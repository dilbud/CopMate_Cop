export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const signup = (email, password) => {
  return {
    type: SIGNUP,
    payload: {},
  };
};

export const signout = () => {
  return {
    type: LOGOUT,
    payload: {},
  };
};

export const login = (email, password) => {
  return (dispatch, getState) => {
    // async action
    dispatch({
      type: LOGIN,
      payload: {
        token: 'token',
      },
    });
  };
};

export const QrValidation = (data) => {
  return (dispatch, getState) => {
    console.log(data);
    dispatch({
      type: LOGIN,
      payload: {
        token: 'token',
      },
    });
  };
};
