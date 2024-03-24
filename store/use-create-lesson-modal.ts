import { create } from "zustand";

type CreateLessonModal = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useCreateLessonModal = create<CreateLessonModal>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
