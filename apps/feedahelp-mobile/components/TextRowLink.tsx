import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';



const TextRowLink = ({ text, linkText, onPress }) => {
  return (
    <View style={styles.textRow}>
      <Text style={styles.footerText}>{text}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.linkText}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    textRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      footerText: {
        fontSize: 14,
        color: '#999',
      },
      linkText: {
        fontSize: 14,
        color: '#e06464',
        fontWeight: 'bold',
      },
    });

export default TextRowLink;
