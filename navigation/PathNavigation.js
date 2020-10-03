import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// navigation imports
import { navigationRef } from '../RootNavigation';
import UserNavigation from './UserNavigation';
import AuthNavigation from './AuthNavigation';

export default PathNavigation = () => {
  const [isSignedIn, setisSignedIn] = useState(true);
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
