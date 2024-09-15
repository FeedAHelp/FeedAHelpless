import React from 'react';
import { View, Text, Button } from 'react-native';
import Header from '../../components/login/Header';
import Avatar from '../../components/login/Avatar';
import Form from '../../components/login/Form';
import Footer from '../../components/login/footer/Footer';
import styles from './login.style';
import LinkedInButton from '@/components/LinkedInButton';
import { useLogIn } from '../../hooks/useGoogleLogin';
import GoogleButton from '@/components/GoogleButton';

export default function Login() {
  const { userInfo, error, Login, logOut } = useLogIn();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Avatar />
        <Form />
        {userInfo ? (
          <View>
            <Text>Welcome, {userInfo.name}</Text>
            <Button title="Sign Out" onPress={logOut} />
          </View>
        ) : (
          <>
            <GoogleButton text="Sign In with Google" onPress={Login} />
          </>
        )}
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}
