import { create } from "zustand";
import IAuth from "@/types/IAuth";
import createAuthSlice from "./authSlice";
import createCommonSlice from "./commonSlice";
import ICommon from "@/types/ICommon";

const useStore = create<IAuth & ICommon>()((...a) => ({
  ...createAuthSlice(...a),
  ...createCommonSlice(...a),
}));

export default useStore;
