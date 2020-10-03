import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Input, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const list = [
  { id: '1', state: '01', amount: '2500', check: false },
  { id: '2', state: '02', amount: '1500', check: false },
  { id: '3', state: '03', amount: '3500', check: false },
  { id: '4', state: '04', amount: '4500', check: false },
  { id: '5', state: '05', amount: '500', check: false },
  { id: '6', state: '06', amount: '200', check: false },
  { id: '7', state: '07', amount: '2500', check: false },
  { id: '8', state: '08', amount: '1500', check: false },
  { id: '9', state: '09', amount: '3500', check: false },
  { id: '10', state: '10', amount: '4500', check: false },
  { id: '11', state: '11', amount: '500', check: false },
  { id: '12', state: '12', amount: '200', check: false },
];

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

  const renderItem = ({ item }) => {
    return <TouchableOpacity></TouchableOpacity>;
  };

  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
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
