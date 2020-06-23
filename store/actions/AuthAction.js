export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

export const signup = (email, password) => {
    return {
        type: SIGNUP, payload: {

        }
    };
}

export const login = (email, password) => {
    return (dispatch, getState) => {
        // async action 
        dispatch({
            type: LOGIN,
            payload: {
                token: 'token'
            }
        });
    }
}