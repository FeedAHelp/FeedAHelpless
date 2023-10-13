import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import FacebookProvider from "next-auth/providers/facebook";
import InstagramProvider from "next-auth/providers/instagram";
import TwitterProvider from "next-auth/providers/twitter";
import DiscordProvider from 'next-auth/providers/discord'
import {
  type User,
  type SessionCallbackParams,
} from "../../../types/authType";
import { type NextAuthOptions } from "next-auth";
import { postMethod } from "../../../utils/api/postMethod";
import { endPoints } from "../../../utils/api/route";
import CredentialsProvider from "next-auth/providers/credentials";

const scopes = ['identify'].join(' ')

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
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
      authorization: {
        params: { scope: 'openid profile email' },
      },
      issuer: 'https://www.linkedin.com',
      jwks_endpoint: 'https://www.linkedin.com/oauth/openid/jwks',
      profile(profile, tokens) {
        const defaultImage =
          'https://cdn-icons-png.flaticon.com/512/174/174857.png';
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture ?? defaultImage,
        };
      },
    }),
    DiscordProvider({
      clientId: `${process.env.DISCORD_CLIENT_ID}`,
      clientSecret: `${process.env.DISCORD_CLIENT_SECRET}`,
      authorization: {params: {scope: scopes}},
    }),
    CredentialsProvider({
      name: "credentials",
      type: "credentials",
      credentials: {},
      async authorize(credentials: any) {
        if (!credentials.email || !credentials.password) {
          return null;
        }
        return { email: credentials.email, id: credentials.password };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user && (user.id || user.name)) {
        await postMethod(endPoints.auth.register, {
          name: user.name || "Not found",
          email: user.email,
          password: user.id || user.id,
          image: user.image || "Not found",
          role: user.roles,
          verified: true,
        })
          .then((res) => {
            const data: User = res.data;
            token.id = data.id;
            token.email = data.email;
            token.name = data.name;
            token.userType = data.registerId;
            token.image = data.image;
            token.accessToken = data.accessToken;
            token.verified = data.verified
          })
          .catch(async (error) => {
           /*  await postMethod(endPoints.auth.login, {
              email: user.email,
              password: user.id,
            })
              .then((res) => {
                const data: User = res.data;
                token.id = data.id;
                token.email = data.email;
                token.name = data.name;
                token.userType = data.registerId;
                token.image = data.image;
                token.accessToken = data.accessToken;
                token.verified = data.verified
              })
              .catch((error) => {
                token.error = error.response.data.message;
              });
            token.error = error.response.data.message; */
          });
      }
      return token;
    },

    async session({ session, token }: SessionCallbackParams) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.userType = token.userType;
        session.user.image = token.picture
          ? token.picture
          : (token.image as string);
        session.user.accessToken = token.accessToken;
        session.user.error = token.error;
        session.user.verified = token.verified as boolean;
        session.user.roles = token.roles;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
