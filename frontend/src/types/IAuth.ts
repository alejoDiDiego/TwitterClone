import { User } from "@supabase/supabase-js";

interface IAuth {
  user: User | null;
  register: (email: string, password: string) => void;
}

export default IAuth;
