export const SET_FORM = 'SET_FORM';
export const SET_IMAGE = 'SET_IMAGE';
export const SET_FINE = 'SET_FINE';
export const SET_STATE = 'SET_STATE';
export const SUBMIT = 'SUBMIT';
export const RESET = 'RESET';

import { Alert } from 'react-native';
import { navigate } from '../../RootNavigation';
import axios from '../../api/axios';

export const setForm = (nic, licenseId) => {
  return (dispatch, getState) => {
    const current = getState();
    axios
      .post('/fine/validLicense', { nic, licenseId })
      .then((res) => {
        console.log('output', res.data.msg);
        if (res.data.msg) {
          dispatch({
            type: SET_FORM,
            payload: { nic, licenseId, name: res.data.name },
          });
          navigate('fine');
        } else {
          Alert.alert('licence validation', 'licence not found');
          dispatch({
            type: RESET,
          });
          navigate('form');
        }
      })
      .catch((error) => {
        console.log('form : ', error);
        dispatch({
          type: RESET,
        });
        navigate('form');
      });
  };
};

// export const setImage = () => {
//   return {
//     type: SET_IMAGE,
//     payload: {},
//   };
// };

export const setFine = () => {
  return {
    type: SET_FINE,
    payload: {},
  };
};

export const setState = (email, password) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_STATE,
      payload: {
        token: 'token',
      },
    });
  };
};
