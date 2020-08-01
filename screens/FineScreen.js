import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const list = [{}, {}, {}, {}, {}, {}];

export default FineScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const availableMeals = useSelector((state) => state);
  useEffect(() => {
    navigation.setOptions({
      title: 'Fine',
      headerRight: () => (
        <Icon.Button
          style={{ marginLeft: 15 }}
          name="ios-arrow-forward"
          size={25}
          backgroundColor="transparent"
          color="black"
          onPress={() => navigation.navigate('submit')}
        />
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Input placeholder="BASIC INPUT" />
      <Input placeholder="BASIC INPUT" />
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
