import { create } from "zustand";

interface appState {
  score: number;
  setScore: (score: number) => void;
  userPick: "r" | "p" | "s" | null;
  setUserPick: (userPick: "r" | "p" | "s" | null) => void;
  computerPick: "r" | "p" | "s" | null;
  setComputerPick: (computerPick: "r" | "p" | "s" | null) => void;
  modalVisibility: boolean;
  showModal: () => void;
  hideModal: () => void;
  showResult: boolean;
  setShowResult: (showResult: boolean) => void;
  result: string | null;
  setResult: (result: string) => void;
}

const initialState = {
  score: 0,
  userPick: null,
  computerPick: null,
  modalVisibility: false,
  showResult: false,
  result: null,
};

export const reset = () => {
  const score = useStore.getState().score;
  useStore.setState({ ...initialState });
  useStore.getState().setScore(score);
};

export const useStore = create<appState>((set) => ({
  ...initialState,
  setScore: (score: number) => set({ score }),
  setUserPick: (userPick: "r" | "p" | "s" | null) => set({ userPick }),
  setComputerPick: (computerPick: "r" | "p" | "s" | null) =>
    set({ computerPick }),
  showModal: () => set({ modalVisibility: true }),
  hideModal: () => set({ modalVisibility: false }),
  setShowResult: (showResult: boolean) => set({ showResult }),
  setResult: (result: string) => set({ result }),
}));
