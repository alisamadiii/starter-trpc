import { cache } from "react";
import { headers } from "next/headers";
import { initTRPC, TRPCError } from "@trpc/server";

const createTRPCContextInner = async () => {
  return {};
};

export const createTRPCContext = cache(createTRPCContextInner);
export const createTRPCContextForRoute = createTRPCContextInner;

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  // transformer: superjson,
});
// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;

// Infer the context type from createTRPCContextInner
type Context = Awaited<ReturnType<typeof createTRPCContextInner>>;

export const baseProcedure = t.procedure;
