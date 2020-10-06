import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// navigation imports
import { navigationRef } from '../RootNavigation';
import UserNavigation from './UserNavigation';
import AuthNavigation from './AuthNavigation';
import { useDispatch, useSelector } from 'react-redux';

export default PathNavigation = () => {
  const [isSignedIn, setisSignedIn] = useState(false);
  const auth = useSelector((state) => state.Auth);
  useEffect(() => {

    if (auth.userId) {
      console.log(auth);
      setisSignedIn(true);
    } else {
      console.log(auth, '//////////////////////');
      setisSignedIn(false);
    }
  }, [auth])
  return (
    <NavigationContainer ref={navigationRef}>
      {isSignedIn ? (
        <>
          <UserNavigation />
        </>
      ) : (
          <>
            <AuthNavigation />
          </>
        )}
    </NavigationContainer>
  );
};
