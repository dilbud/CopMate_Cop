import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from 'react-native-elements';

export default SubmitScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const availableMeals = useSelector((state) => state);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>'dddddddddd'</Text>
      </View>
      <View style={styles.button}>
        <Button title="Submit" onPress={() => {}} />
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
