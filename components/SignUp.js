import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    console.log('Signing up with email:', email, 'and password:', password);
    console.log('Confirming password:', confirmPassword);
    navigation.navigate('Splash2');
  };

  return (
    <View style={styles.container}>
      {/* Your sign-up UI */}
      {/* ... */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
    // Add styles for your sign-up UI elements here
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
    // Add any other styles you need for sign-up UI elements
  });
  
  export default SignUp;
