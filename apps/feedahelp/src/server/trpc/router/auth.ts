import authController from "../controller/auth.controller";
import { router, publicProcedure, protectedProcedure } from "../trpc";

export const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
  verifyOtp: authController.verifyOtp,
  resetOtp: authController.resetOtp,
  resetPassword: authController.setNewPassword
});
