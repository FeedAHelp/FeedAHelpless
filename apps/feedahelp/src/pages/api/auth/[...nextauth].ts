import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import FacebookProvider from "next-auth/providers/facebook";
import InstagramProvider from "next-auth/providers/instagram";
import TwitterProvider from "next-auth/providers/twitter";
import Discord from "next-auth/providers/discord";
import { type NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    providers: [
      GoogleProvider({
        clientId: `${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`,
        clientSecret: `${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET}`,
      }),
      FacebookProvider({
        clientId: `${process.env.NEXT_PUBLIC_FACEBOOK_ID}`,
        clientSecret: `${process.env.NEXT_PUBLIC_FACEBOOK_SECRET}`,
      }),
      InstagramProvider({
        clientId: `${process.env.NEXT_PUBLIC_INSTAGRAM_ID}`,
        clientSecret: `${process.env.NEXT_PUBLIC_INSTAGRAM_SECRET}`,
      }),
      TwitterProvider({
        clientId: `${process.env.NEXT_PUBLIC_TWITTER_ID}`,
        clientSecret: `${process.env.NEXT_PUBLIC_TWITTER_SECRET}`,
      }),
      LinkedInProvider({
        clientId: `${process.env.NEXT_PUBLIC_LINKEDIN_ID}`,
        clientSecret: `${process.env.NEXT_PUBLIC_LINKEDIN_SECRET}`,
      }),
      Discord({
        clientId: `${process.env.DISCORD_CLIENT_ID}`,
        clientSecret: `${process.env.DISCORD_CLIENT_SECRET}`,
      })
    ]
  };
  
export default NextAuth(authOptions);
