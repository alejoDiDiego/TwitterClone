import { createContext, useContext } from "react";
import PostStore from "./postStore";
import GlobalStore from "./globalStore";
import UserStore from "./userStore";

interface Store {
  postStore: PostStore;
  globalStore: GlobalStore;
  userStore: UserStore;
}

export const store: Store = {
  postStore: new PostStore(),
  globalStore: new GlobalStore(),
  userStore: new UserStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
