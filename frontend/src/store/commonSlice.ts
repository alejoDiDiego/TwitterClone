import ICommon from "@/types/ICommon";
import { StateCreator } from "zustand";

const createCommonSlice: StateCreator<ICommon> = (set, get) => ({
  open: false,
  toggleOpen() {
    set((state) => ({
      open: !state.open,
    }));
  },
  loading: true,
  toggleLoading() {
    set((state) => ({
      loading: !state.loading,
    }));
  },
});

export default createCommonSlice;
