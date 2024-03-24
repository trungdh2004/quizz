import { create } from "zustand";

interface PropsToggleAudio {
  isOpen: boolean;
  onChecked: () => void;
}

export const useToggleAudio = create<PropsToggleAudio>((set) => ({
  isOpen: true,
  onChecked: () => set((state) => ({ isOpen: !state.isOpen })),
}));
