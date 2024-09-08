import React from 'react';
import { View } from 'react-native';
import Header from '../components/login/Header';
import Avatar from '../components/login/Avatar';
import Form from '../components/login/Form';
import Footer from '../components/login/Footer';

export default function Login() {
  return (
    <View>
      <Header />
      <Avatar />
      <Form />
      <Footer />
    </View>
  );
}
