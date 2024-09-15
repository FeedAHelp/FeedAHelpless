import React from 'react';
import { View, Text } from 'react-native';
import TextRowLink from '@/components/TextRowLink';
import styles from './footer.style';
export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <TextRowLink text={"Forgot your login details? "} linkText={"Get help signing in."} onPress={undefined}></TextRowLink>
      <Text style={styles.orText}>Or</Text>
      <TextRowLink text={"Don't have an account yey? "} linkText={"Sign up here."} onPress={undefined}></TextRowLink>
    </View>
  );
}
