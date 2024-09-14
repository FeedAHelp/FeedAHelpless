import React from 'react';
import { View, Text } from 'react-native';
import DiscordLoginButton from '../socialMedia/DiscordLoginButton';

export default function Footer() {
  return (
    <View>
      <Text>
        Footer
        <DiscordLoginButton />
      </Text>
    </View>
  );
}
