import { Ionicons } from "@expo/vector-icons";
import { View, TextInput } from "react-native";
import React from "react";
import { StyleSheet } from 'react-native';
import { Colors } from '../styles/global';

const InputField = ({ icon, placeholder, value, onChangeText, secureTextEntry = false, keyboardType = 'default' }) => (
    <View style={styles.inputWrapper}>
      <Ionicons name={icon} size={20} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.grey}
        keyboardType={keyboardType}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );


  const styles = StyleSheet.create({
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 15,
      marginBottom: 20,
    },
    icon: {
      marginRight: 10,
      color: Colors.grey,
    },
    input: {
      flex: 1,
      height: 25,
      fontSize: 16,
      color: Colors.primary,
    },
  });

  
export default InputField
