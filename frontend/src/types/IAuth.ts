import { User } from "@supabase/supabase-js";
import IUser from "./IUser";

interface IAuth {
  user: User | null;
  register: (
    email: string,
    password: string,
    username: string,
    name: string
  ) => Promise<void | Error>;
  autoLogin: () => void;
}

export default IAuth;
