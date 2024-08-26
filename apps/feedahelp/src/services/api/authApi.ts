import { JWT } from "next-auth/jwt";


export async function refreshAccessToken(token: JWT) {
  console.log("Refreshing access token", token);
  try {    
      console.log("Bearer token", `Bearer ${token.refreshToken}`);

      const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_BACKEND_BASE_URL}auth/refresh`, {
          method: 'POST',  
          headers: {
              "Authorization": `Bearer ${token.refreshToken}`,
          },
          body: JSON.stringify({ token: token.refreshToken })
      });

      console.log(response);

      if (!response.ok) {
          const errorText = await response.text();
          console.log("Error response", errorText);
          throw new Error(`Failed to refresh token: ${response.statusText}`);
      }

      const tokens = await response.json();
      console.log(tokens);

      return {
          ...token,
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken ?? token.refreshToken,
      };
  } catch (error) {
      console.error("Error refreshing access token:", error);
      await logout(token);
      return {
          ...token,
          error: "RefreshAccessTokenError",
      };
  }
}

export async function logout(token: JWT) {
    console.log("test")
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_BACKEND_BASE_URL}auth/logout`, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token.refreshToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: token.refreshToken })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.log("Error response during logout", errorText);
      throw new Error(`Failed to logout: ${response.statusText}`);
    }
    console.log("Successfully logged out on the backend");

  } catch (error) {
    console.error("Error during backend logout:", error);
  }
}