import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const GoogleButton = ({ onPress, text}) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageBox}>
        <Image 
          style={styles.image}
          source={require('@/assets/images/google-logo.png')}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textBox}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBox: {
    width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#4285F4',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  image: {
    width: 25,
    height: 25,
  },
  textBox: {
    width: 200,
    height: 50,
    backgroundColor: '#4285F4',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GoogleButton;
