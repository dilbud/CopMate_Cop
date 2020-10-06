import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useDispatch } from 'react-redux';
import { Button } from 'react-native-elements';
import { HeaderBackButton } from '@react-navigation/stack';
import { QrValidation } from '../store/actions/AuthAction';

export default function QrScreen({ navigation, route }) {
  const [HasPermission, setHasPermission] = useState(null);
  const [Scanned, setScanned] = useState(false);
  const [Toggle, setToggle] = useState(false);

  const [Input, setInput] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props) => (
        <HeaderBackButton
          {...props}
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      ),
    });
    navigation.setOptions({
      title: 'VALIDATE QR',
      headerStyle: {
        backgroundColor: '#dffff0',
      },
    });
  }, [navigation, route]);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    if (type === 256) {
      setScanned(true);
      dispatch(QrValidation(data, route.params.Email, route.params.Password));
    } else {
      setScanned(false);
    }
  };

  if (HasPermission === null || HasPermission === false) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <View style={{ width: '50%', marginBottom: 50, alignSelf: 'center' }}>
          <Button
            buttonStyle={{ borderRadius: 20 }}
            containerViewStyle={{
              width: '100%',
              marginLeft: 0,
              marginRight: 0,
            }}
            title="Go Back"
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={Scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {Scanned && (
          <View style={{ width: '50%', marginBottom: 50, alignSelf: 'center' }}>
            <Button
              buttonStyle={{ borderRadius: 20 }}
              containerViewStyle={{
                width: '100%',
                marginLeft: 0,
                marginRight: 0,
              }}
              title="Scan Again"
              onPress={() => {
                setScanned(false);
              }}
            />
          </View>
        )}
        <View style={{ width: '50%', marginBottom: 50, alignSelf: 'center' }}>
          <Button
            buttonStyle={{ borderRadius: 20 }}
            containerViewStyle={{
              width: '100%',
              marginLeft: 0,
              marginRight: 0,
            }}
            title="Go Back"
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    paddingTop: 40,
  },
});