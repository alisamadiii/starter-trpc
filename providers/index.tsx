import { Suspense } from "react";
import { TRPCReactProvider } from "@/trpc/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Toaster } from "@/components/ui/sonner";

import { NextThemeProviders } from "./next-theme";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TRPCReactProvider>
      <NextThemeProviders>
        {children} <Toaster />
      </NextThemeProviders>
      <ReactQueryDevtools />
    </TRPCReactProvider>
  );
};
