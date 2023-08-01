import ICommon from "@/types/ICommon";
import { StateCreator } from "zustand";

const createCommonSlice: StateCreator<ICommon> = (set, get) => ({
  open: false,
  toggleOpen() {
    set((state) => ({
      open: !state.open,
    }));
  },
});

export default createCommonSlice;
