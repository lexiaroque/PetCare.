import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with email:', email, 'and password:', password);
    navigation.navigate('Splash2');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome back!</Text>
      <Text style={styles.loginText}>
        Login below or
        <Text onPress={() => navigation.navigate('Signup')} style={styles.createAccountText}>
          {' create an account'}
        </Text>
      </Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.emailInput}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.passwordInput}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 100,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#D14E86',
    marginBottom: 10,
  },
  loginText: {
    fontSize: 14,
    color: '#D14E86',
    paddingBottom: 30,
  },
  createAccountText: {
    textDecorationLine: 'underline',
    color: '#D14E86',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  emailInput: {
    width: 300,
    fontSize: 16,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  passwordInput: {
    width: 300,
    fontSize: 16,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#D14E86',
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;
