import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import type { Session } from "next-auth";

import { getServerAuthSession } from "../common/get-server-auth-session";
import { prisma } from "../db/client";
import { IncomingMessage, ServerResponse } from "http";

type CreateContextOptions = {
  session: Session | null;
  remoteAddress?: string;
  req?: IncomingMessage;
  res?: ServerResponse;
};

/** Use this helper for:
 * - testing, so we dont have to mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://create.t3.gg/en/usage/trpc#-servertrpccontextts
 **/
export const createContextInner = async (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    prisma,
    remoteAddress: opts.remoteAddress,
    req: opts.req,
    res: opts.res
  };
};

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;

  // Get the session from the server using the unstable_getServerSession wrapper function
  const session = await getServerAuthSession({ req, res });
  const remoteAddress = req.socket.remoteAddress

  return await createContextInner({
    session,
    remoteAddress,
    req,
    res
  });
};

export type Context = inferAsyncReturnType<typeof createContext>;
