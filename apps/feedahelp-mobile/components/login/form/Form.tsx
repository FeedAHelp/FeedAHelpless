import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './form.style';
import InputField from '../../InputField';

export default function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.formContainer}>
      <InputField
        icon="person-outline"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        keyboardType="default"
      />
      <InputField
        icon="lock-closed-outline"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log in and Save Password</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.linkText}>Log in without Saving Password</Text>
      </TouchableOpacity>
    </View>
  );
}
