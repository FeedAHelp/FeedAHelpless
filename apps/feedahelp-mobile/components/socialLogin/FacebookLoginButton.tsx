import React, { useEffect, useState } from 'react';
import { View, Button, Alert } from 'react-native';
import * as AuthSession from 'expo-auth-session';

interface FacebookLoginButtonProps {
  onLoginSuccess?: (userInfo: any) => void;
  onLoginError?: (error: any) => void;
}

const facebookClientId = process.env.EXPO_PUBLIC_FACEBOOK_ID || '';

export default function FacebookLoginButton({
  onLoginSuccess = (userInfo) => {
    console.log('Login successful! User info:', userInfo); // Log success to terminal
  },
  onLoginError = (error) => console.error('Login error:', error),
}: FacebookLoginButtonProps) {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  if (!facebookClientId) {
    console.error('Facebook Client ID is missing. Please add it to the environment variables.');
    return null;
  }

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: facebookClientId,
      redirectUri: AuthSession.makeRedirectUri({
        native: 'fb{EXPO_PUBLIC_FACEBOOK_ID}://authorize',
      }),
      scopes: ['public_profile', 'email'],
    },
    {
      authorizationEndpoint: 'https://www.facebook.com/v10.0/dialog/oauth',
    }
  );

  useEffect(() => {
    if (response?.type === 'success' && response.params?.code) {
      const { code } = response.params;
      fetchAccessToken(code);
    }
  }, [response]);

  async function fetchAccessToken(code: string) {
    try {
      const tokenResponse = await fetch(
        `https://graph.facebook.com/v10.0/oauth/access_token?client_id=${process.env.EXPO_PUBLIC_FACEBOOK_ID}&client_secret=${process.env.EXPO_PUBLIC_FACEBOOK_SECRET}&redirect_uri=${AuthSession.makeRedirectUri()}&code=${code}`
      );
      const data = await tokenResponse.json();

      if (data.access_token) {
        setAccessToken(data.access_token);
        fetchUserInfo(data.access_token);
      } else {
        throw new Error('Access token is missing from the response');
      }
    } catch (error) {
      onLoginError(error);
    }
  }

  async function fetchUserInfo(token: string) {
    try {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email`
      );
      const user = await response.json();
      if (user && user.name) {
        onLoginSuccess(user); // Call success handler
      } else {
        throw new Error('Failed to fetch user info');
      }
    } catch (error) {
      onLoginError(error);
    }
  }

  return (
    <View>
      <Button
        disabled={!request}
        title="Login with Facebook"
        onPress={() => {
          if (request) {
            promptAsync();
          } else {
            Alert.alert('Error', 'Failed to start the Facebook login process.');
          }
        }}
      />
    </View>
  );
}
