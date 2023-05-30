import { makeAutoObservable } from "mobx";
import User from "../models/User";
import pb from "../pocketbase/pb";

export default class UserStore {
  user: User | null = null;
  loadingUser = true;

  constructor() {
    makeAutoObservable(this);
  }

  get isLoggedIn() {
    return !!this.user;
  }

  private setLoadingUser = (value: boolean) => {
    this.loadingUser = value;
  };

  authenticate = () => {
    if (pb.authStore.isValid) {
      const u: User = {
        id: pb.authStore.model!.id,
        email: pb.authStore.model!.email,
        avatar: pb.authStore.model!.avatar,
        name: pb.authStore.model!.name,
        created: pb.authStore.model!.created,
        username: pb.authStore.model!.username,
      };
      this.user = u;
      this.setLoadingUser(false);
      return;
    }
    this.setLoadingUser(false);
    // this.setLoadingUser(false);
  };
}
