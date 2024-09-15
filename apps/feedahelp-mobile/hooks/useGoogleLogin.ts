import { useState, useEffect } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import { TokenResponse } from 'expo-auth-session';
import Login from '@/pages/login/Login';

WebBrowser.maybeCompleteAuthSession();

export const useLogIn = () => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "256410877766-3qovgc91v542gh0hsamnsc36b4bi77kf.apps.googleusercontent.com",
    iosClientId: "256410877766-vdm6l09fkok7cum5m1v8992o9375ign7.apps.googleusercontent.com",
    webClientId: "256410877766-r038aolc3u71hui65u3n4fulf3d1l0lm.apps.googleusercontent.com",
    scopes: ['profile', 'email'],
  });

  useEffect(() => {
    if (response?.type === 'success' && response.authentication) {
      handleLogInSuccess(response.authentication);
    }
  }, [response]);

  const handleLogInSuccess = async (auth: TokenResponse) => {
    try {
      const userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${auth.accessToken}` },
      });

      const data = await userInfoResponse.json();
      setUserInfo(data);
      await AsyncStorage.setItem('userInfo', JSON.stringify(data));
    } catch (err) {
      setError('Failed to fetch user info');
    }
  };

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem('userInfo');
      setUserInfo(null);
    } catch (err) {
      setError('Error signing out');
    }
  };

  return { userInfo, error, Login: () => promptAsync(), logOut };
};
