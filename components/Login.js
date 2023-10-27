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
      {/* Your login UI */}
      {/* ... */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
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
    // Add styles for your login UI elements here
    input: {
      width: '80%',
      fontSize: 16,
      marginBottom: 20,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    button: {
      backgroundColor: '#D14E86',
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      borderRadius: 5,
      marginTop: 20, // Adjust the margin as needed
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    // Add any other styles you need for login UI elements
  });
  
  export default Login;
  
