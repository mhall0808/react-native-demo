import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const validatePassword = (password) => {
  if (!password) {
    return ' ';
  }
  if (password.length < 8) {
    return 'Password must be at least 8 characters long';
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return 'Password must contain at least one symbol';
  }
  if (!/[A-Z]/.test(password)) {
    return 'Password must contain at least one capitalized letter';
  }
  return ''; // No errors
};

const TextScreen = ({ name }) => {
  const [inputPassword, setInputPassword] = useState('');
  const validationError = validatePassword(inputPassword);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardAppearance="light"
        secureTextEntry={true}
        onChangeText={setInputPassword}
      />
      {validationError ? (
        <Text style={styles.error}>{validationError}</Text>
      ) : (
        <Text style={styles.text}>Your password is valid!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default TextScreen;
