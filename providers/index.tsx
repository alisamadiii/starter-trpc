import { Suspense } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Toaster } from "@/components/ui/sonner";

import { NextThemeProviders } from "./next-theme";
import { QueryClientProviders } from "./react-query";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense>
      <QueryClientProviders>
        <NextThemeProviders>
          {children} <Toaster />
        </NextThemeProviders>
        <ReactQueryDevtools />
      </QueryClientProviders>
    </Suspense>
  );
};
