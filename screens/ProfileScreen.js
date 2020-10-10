import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "react-native-elements";

export default HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const available = useSelector((state) => state.Auth.user);
  return (
    <View style={styles.container}>
      <View style={{
        width: '100%',
        padding: 18,
        backgroundColor: '#ecff6a5c',
      }}>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 15,
        }}>
          <Text style={{ fontSize: 20 }}>Name:</Text><Text style={{ fontSize: 20 }}>{`${available.lastName} ${available.firstName}`}</Text>
        </View>

        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5
        }}>
          <Text style={{ fontSize: 20 }}>Email:</Text><Text style={{ fontSize: 20 }}>{available.email}</Text>
        </View>
      </View>
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
          title="Home"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    </View>
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
