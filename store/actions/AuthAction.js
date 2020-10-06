export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
import axios from '../../api/axios';
import { Alert } from 'react-native';
import { navigate } from '../../RootNavigation';

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

export const QrValidation = (data, email, password) => {
  return (dispatch, getState) => {
    console.log(data, email, password);
    const current = getState();
    axios
      .post('/cop/update', { data, email, password })
      .then((res) => {
        console.log('output', res.data.msg);
        if (res.data.msg) {
          dispatch({
            type: LOGIN,
            payload: { id: res.data.msg._id, user: res.data.msg },
          });
          navigate('Login');
        } else {
          Alert.alert('User Not Found', 'User Not Found');
          dispatch({
            type: LOGOUT,
          });
          navigate('SignUp');
        }
      })
      .catch((error) => {
        Alert.alert('User Error', 'Error Pass');
        dispatch({
          type: LOGOUT,
        });
        navigate('SignUp');
      });
  };
};
