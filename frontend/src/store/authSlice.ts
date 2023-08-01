import { supabase } from "@/supabase/supabase";
import IAuth from "@/types/IAuth";
import { StateCreator } from "zustand";

const createAuthSlice: StateCreator<IAuth> = (set, get) => ({
  user: null,
  async register(email, password) {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      alert("Error");
      console.log(error);
      return;
    }

    set((state) => ({
      user: data.user,
    }));
  },
});

export default createAuthSlice;

// counter: 10,
// increment() {
//   set((state) => ({
//     counter: state.counter + 1,
//   }));
// },
