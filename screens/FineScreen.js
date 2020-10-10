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
  { id: '1', state: 'රිය පැදවීමේදී ආරක්ෂිත හිස් ආවරණ පැළඳීමට අසමත් වීම  දඩ ගාස්තුව: 1000', amount: '1000', state1: 'Failure to where wear protective helmets when driving', check: false },
  { id: '2', state: 'චලනය වන වාහනයකින් දැන්වීම් බෙදා හැරීම තහනම් කිරීම දඩ ගාස්තුව: 1000', amount: ' 1000', state1: 'Prohibition to distribute advertisements from a vehicle in motion', check: false },
  { id: '3', state: 'වාහනයකින් ශබ්දය අධික ලෙස භාවිතා කිරීම තහනම් දඩ ගාස්තුව: 1000', amount: '1000', state1: 'Prohibit excessive use of noise from a vehicle', check: false },
  { id: '4', state: 'ආදායම් බලපත්‍රයේ විධිවිධානවලට පටහැනිව මෝටර් රථය භාවිතා කිරීම තහනම් කිරීම දඩ ගාස්තුව: 500', amount: '500', state1: 'Revenue Licence to be displayed on motor vehicles and produced when required', check: false },
  { id: '5', state: 'විමෝචන සහතිකය හෝ යෝග්‍යතා සහතිකය වාහනයේ රැගෙන යාමට අපොහොසත් වීම දඩ ගාස්තුව: 500', amount: '500', state1: 'Failure to carry the emission certificate or the fitness certificate in the vehicle', check: false },
  { id: '6', state: 'ටැංකියට ඉන්ධන බැහැර කිරීමේදී පූර්වාරක්ෂාව ගැනීමට අපොහොසත් වීම දඩ ගාස්තුව: 1000', amount: '1000', state1: 'Failure to take precautions when discharging fuel into the tank', check: false },
  { id: '7', state: 'මෝටර් වාහනය නවත්වන විට හෝ නොපෙනී යන විට හෝ මාර්ගයක අක්‍රීය වූ විට ගත යුතු පියවර කඩකිරීම දඩ ගාස්තුව: 2000', amount: '2000', state1: 'Precautions to be taken when motor vehicle is halted or left unattended or disabled on a road', check: false },
  { id: '8', state: 'බලයලත් සංඛ්‍යාවට වඩා වැඩි ප්‍රමාණයක් හෝ පුද්ගලික ගමන් මලු හැර වෙනත් භාණ්ඩ ප්‍රවාහනය කිරීම දඩ ගාස්තුව: 500', amount: '500', state1: 'Carriage of persons or passengers in excess of authorized number and of goods other than personal luggage', check: false },
  { id: '9', state: 'රෙගුලාසි උල්ලන්ගනය කිරීම දඩ ගාස්තුව: 1000', amount: '1000', state1: 'Violation of regulations', check: false },
  { id: '10', state: 'ආදායම් බලපත්‍රය මෝටර් රථවල ප්‍රදර්ශනය කර අවශ්‍ය විටෙක ඉදිරිපත්  කිරීම දඩ ගාස්තුව: 1000', amount: '1000', state1: 'Revenue Licence to be displayed on motor vehicles and produced when required', check: false },
  { id: '11', state: 'පොලිස් නිලධාරීන්ගේ උපදෙස් හා සං වලට කීකරු වීමට අපොහොසත් වීම දඩ ගාස්තුව: 2000', amount: '2000', state1: 'Failure to obey directions and signals of police officers', check: false },
  { id: '12', state: 'මාර්ග සං signs ා වලට අනුකූල නොවීම දඩ ගාස්තුව: 1000', amount: '1000', state1: 'Non-compliance with traffic signs', check: false },
];



export default FineScreen = ({ navigation }) => {
  const [List, setList] = useState(list_ori);
  const dispatch = useDispatch();
  const available = useSelector((state) => state);

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
