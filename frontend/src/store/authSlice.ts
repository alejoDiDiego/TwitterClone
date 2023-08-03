import { supabase } from "@/supabase/supabase";
import IAuth from "@/types/IAuth";
import { User } from "@supabase/supabase-js";
import { StateCreator } from "zustand";

const createAuthSlice: StateCreator<IAuth> = (set, get) => ({
  user: null,
  async register(email, password, username, name) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            profile_photo:
              "https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png",
            background_photo:
              "https://th.bing.com/th/id/R.172cd157ef572c72733b5de1eed9aa33?rik=jzZ5nAeCqMt3Ew&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2fwhite%2fwhite-08.jpg&ehk=g9vbi0yL9Y8UX0cDssJDLyEVGw7UcgnGLrMmtEyL9lU%3d&risl=&pid=ImgRaw&r=0",
            public_name: name,
            username: username,
          },
        },
      });

      console.log(data);

      if (error) {
        console.log(error.message);
        throw error;
      }

      console.log(data);

      set((state) => ({
        user: data.user,
      }));
    } catch (e) {
      throw e;
    }
  },
  async autoLogin() {
    let u = (await supabase.auth.getSession()).data.session?.user;

    set(() => ({
      user: u,
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
