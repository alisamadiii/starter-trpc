import { createTRPCContextForRoute } from "@/trpc/init";
import { appRouter } from "@/trpc/routers/_app";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (request: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext: () => createTRPCContextForRoute(),
    onError({ error }) {
      if (process.env.NODE_ENV !== "production") {
        console.error("tRPC error", error);
      }
    },
  });
};

export { handler as GET, handler as POST };
