import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Login from './Login';
import SignUp from './SignUp';

const Intro = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../Images/logo.png')}
        style={styles.logo}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.createAccountButton} // Use a separate style for "Create an Account" button
        onPress={() => navigation.navigate('Signup')} // Navigate to Signup screen
      >
        <Text style={styles.createAccountText}>Create an Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 350,
    height: 350,
  },
  button: {
    backgroundColor: '#D14E86',
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createAccountButton: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#D14E86',
    marginBottom: 10,
    marginTop: 5,
  },
  createAccountText: {
    color: '#D14E86',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Intro;