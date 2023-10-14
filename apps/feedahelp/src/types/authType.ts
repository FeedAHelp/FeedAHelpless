import { type Session } from "next-auth/core/types";
import { type JWT } from "next-auth/jwt";

export type User = {
  id: string;
  email: string;
  name: string;
  userType: string;
  accessToken: string;
  image: string;
  registerId: string;
  password: string;
  error: string;
  role: string;
  verified: boolean;
};

export type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  recaptcha: string;
  // policy: boolean;
};
export type SessionCallbackParams = {
  session: {
    user: User;
  };
  token: JWT & {
    id: string;
    email: string;
    name: string;
    userType: string;
    image: string;
    role: string;
    accessToken: string;
    error: string;
  };
};
export type JWTCallbackParams = {
  token: JWT & {};
  user: User;
  profile?: object; // Adjust the type of the profile object if necessary
  trigger?: "signIn" | "signUp" | "update" | undefined;
  isNewUser?: boolean;
  session?: Session;
};
