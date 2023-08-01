import { create } from "zustand";
import IAuth from "@/types/IAuth";
import createAuthSlice from "./authSlice";

const useStore = create<IAuth>()((...a) => ({
  ...createAuthSlice(...a),
}));

export default useStore;
