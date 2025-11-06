"use client";

import React from "react";
import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
  type QueryKey,
} from "@tanstack/react-query";

declare module "@tanstack/react-query" {
  interface Register {
    mutationMeta?: {
      invalidateQuery?: QueryKey;
      successMessage?: string;
      errorMessage?: string;
    };
  }
}

interface Props {
  children: React.ReactNode;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 20, // 20 minutes
    },
  },
  mutationCache: new MutationCache({
    onSuccess: (data: any) => {
      // If the data has an error, throw an error
      if (data.error) {
        throw new Error(data.error);
      }
    },
  }),
});

export function QueryClientProviders({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
