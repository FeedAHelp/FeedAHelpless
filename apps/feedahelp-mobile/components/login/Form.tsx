import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputWrapper}>
        <Ionicons name="mail-outline" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ef8d77"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Ionicons name="lock-closed-outline" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ef8d77"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log in and remember Password</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.linkText}>Log in without remembering Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 20
  },
  icon: {
    marginRight: 10,
    color: 'grey'
  },
  input: {
    flex: 1,
    height: 25,
    fontSize: 16,
    color: '#e06464',
  },
  button: {
    backgroundColor: '#e06464',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#e06464',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});
