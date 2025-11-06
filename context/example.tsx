import { create } from "zustand";

interface ExampleState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useExample = create<ExampleState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
