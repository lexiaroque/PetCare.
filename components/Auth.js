import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Login from './Login';
import SignUp from './SignUp';

const Auth = ({ route, navigation }) => {
  const isLogin = route.name === 'Login';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Text style={[styles.heading, { color: '#D14E86', alignSelf: 'flex-start' }]} </Text> */}
      </View>
      {isLogin ? <Login navigation={navigation} /> : <SignUp navigation={navigation} />}
      {/* Other common UI elements */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // You can change the background color as needed
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  // heading: {
  //   fontSize: 30,
  //   fontWeight: 'bold',
  // },
  // Add any other styles you need for common UI elements here
});

export default Auth;

