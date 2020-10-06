import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import { Input, Button, ListItem } from 'react-native-elements';

export default SubmitScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const available = useSelector((state) => state.Fine);

  const renderItem = ({ item, index }) => {
    return <ListItem title={`Amount: ${item.amount}`} subtitle={`${item.state}`} bottomDivider checkBox={{ checked: item.check }} />
  };

  return (
    <>
      <View style={{
        width: '100%',
        padding: 18,
        backgroundColor: '#ecff6a5c',
      }}>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5,
        }}>
          <Text style={{ fontSize: 18 }}>Name:</Text><Text style={{ fontSize: 18 }}>{available.name}</Text>
        </View>

        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5
        }}>
          <Text style={{ fontSize: 18 }}>LicenseId:</Text><Text style={{ fontSize: 18 }}>{available.licenseId}</Text>
        </View>

        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5
        }}>
          <Text style={{ fontSize: 18 }}>NIC:</Text><Text style={{ fontSize: 18 }}>{available.nic}</Text>
        </View>
      </View>
      <FlatList
        data={route.params.fine.filter((v, i) => {
          return v.check;
        })}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={{
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Button
          buttonStyle={{ borderRadius: 20 }}
          containerViewStyle={{ width: '100%', marginLeft: 0, marginRight: 0 }}
          title="SUBMIT"
          onPress={() => {
          }}
        />
      </View>
    </>

  );
};
