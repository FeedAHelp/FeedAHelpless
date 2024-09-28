import React from "react";
import { View, Text, TouchableOpacity, Image} from "react-native";
import { authorize } from "react-native-app-auth";
import { styles } from "../InstagramButtonStyle";

// Need the env file and the url
const instagramConfig = {
  issuer: "https://instagram.com/",
  clientId: "YOUR_INSTAGRAM_CLIENT_ID",
  clientSecret: "YOUR_INSTAGRAM_CLIENT_SECRET",
  redirectUrl: "", 
  scopes: ["identify", "email"], 
  serviceConfiguration: {
    authorizationEndpoint: "https://instagram.com/api/oauth2/authorize",
    tokenEndpoint: "https://instagram.com/api/oauth2/token",
  },
};

const InstagramLoginButton = () => {
  const handleInstagramLogin = async () => {
    try {
      const result = await authorize(instagramConfig);
      console.log("Login success", result);

    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleInstagramLogin}>
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/2111/2111370.png" }}
          style={styles.logo}/>
        <Text style={styles.buttonText}>Sign in with Instagram</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InstagramLoginButton;

