export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

export const signup = (email, password) => {
    dispatch({ type: SIGNUP });
}

export const LOGIN = (email, password) => {
    dispatch({ type: LOGIN,  });
}