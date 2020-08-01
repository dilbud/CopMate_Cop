import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { setForm } from '../store/actions/FineAction';

export default FormScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const fine = useSelector((state) => state.Fine);

  const [nic, setNic] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');

  const next = () => {
    dispatch(setForm(nic, licenseNumber, setNic, setLicenseNumber));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: '80%' }}>
        <Input placeholder="NIC" onChangeText={setNic} value={nic} />
        <Input
          placeholder="License Number"
          onChangeText={setLicenseNumber}
          keyboardType="phone-pad"
          value={licenseNumber}
        />
        <View
          style={{
            width: '100%',
          }}
        >
          <Button style={{}} title="Next" onPress={() => next()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
