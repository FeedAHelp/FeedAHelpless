import React from "react";
import { View, Text, TouchableOpacity, Image} from "react-native";
import { authorize } from "react-native-app-auth";
import { styles } from "../socialMediaStyles/DiscordButtonStyle";

// Need the env file and the url
const discordConfig = {
  issuer: "https://discord.com",
  clientId: "YOUR_DISCORD_CLIENT_ID",
  clientSecret: "YOUR_DISCORD_CLIENT_SECRET",
  redirectUrl: "", 
  scopes: ["identify", "email"], 
  serviceConfiguration: {
    authorizationEndpoint: "https://discord.com/api/oauth2/authorize",
    tokenEndpoint: "https://discord.com/api/oauth2/token",
  },
};

const DiscordLoginButton = () => {
  const handleDiscordLogin = async () => {
    try {
      const result = await authorize(discordConfig);
      console.log("Login success", result);
      
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleDiscordLogin}>
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/2111/2111370.png" }}
          style={styles.logo}/>
        <Text style={styles.buttonText}>Sign in with Discord</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DiscordLoginButton;
