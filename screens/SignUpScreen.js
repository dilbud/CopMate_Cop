import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default SignUpScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>SignUp Screen</Text>
            </View>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});