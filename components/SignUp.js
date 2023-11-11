import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    console.log('Signing up with username:', username, 'email:', email, 'and password:', password);
    console.log('Confirming password:', confirmPassword);
    navigation.navigate('Splash2');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create an account</Text>
      <View style={styles.signContainer}>
        <Text style={styles.signText}>
          Enter your account details or
        </Text>
        <Text onPress={() => navigation.navigate('Login')} style={styles.loginText}>
          Login Now
        </Text>
      </View>
      <Text style={styles.label}>Username</Text>
      <TextInput
        placeholder="Enter your username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
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
  signContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signText: {
    fontSize: 14,
    color: '#D14E86',
    paddingRight: 5,
    paddingBottom: 30,
  },
  loginText: {
    textDecorationLine: 'underline',
    color: '#D14E86',
    fontWeight: 'bold',
    fontSize: 14,
    paddingBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: 300,
    fontSize: 16,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#D14E86',
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignUp;
