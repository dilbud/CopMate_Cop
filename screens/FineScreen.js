import React, { useEffect, useState } from 'react';
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

const list_ori = [
  { id: '1', state: 'රිය පැදවීමේදී ආරක්ෂිත හිස් ආවරණ පැළඳීමට අසමත් වීම  දඩ ගාස්තුව', amount: '1000', check: false },
  { id: '2', state: 'චලනය වන වාහනයකින් දැන්වීම් බෙදා හැරීම තහනම් කිරීම දඩ ගාස්තුව', amount: ' 1000', check: false },
  { id: '3', state: 'වාහනයකින් ශබ්දය අධික ලෙස භාවිතා කිරීම තහනම් දඩ ගාස්තුව', amount: '1000', check: false },
  { id: '4', state: 'පොලිස් නිලධාරීන්ගේ උපදෙස් වලට කීකරු වීමට අපොහොසත් වීම දඩ ගාස්තු', amount: '2000', check: false },
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
  const [List, setList] = useState(list_ori);
  const dispatch = useDispatch();
  const available = useSelector((state) => state);


  useEffect(() => {
    console.log(List);
  }, [List])
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
          onPress={() => {
            const aa = [...List];
            const a = aa.reduce((pr, cr) => {
              return (pr | cr.check);
            }, false);
            if (!!!a) {
            } else {
              navigation.navigate('submit', { fine: List })
            }
          }}
        />
      ),
    });
  }, [navigation, List]);

  const renderItem = ({ item, index }) => {
    return <TouchableOpacity
      onPress={() => {
        let list = [...List];
        if (item.check) {
          list[index] = { ...list[index], check: false };
        } else {
          list[index] = { ...list[index], check: true };
        }
        setList(list);
      }}
    >
      <ListItem title={`Amount: ${item.amount}`} subtitle={`${item.state}`} bottomDivider checkBox={{ checked: item.check }} />
    </TouchableOpacity>;
  };

  return (
    <FlatList
      data={List}
      refreshing={true}
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
