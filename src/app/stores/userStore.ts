import { makeAutoObservable, runInAction } from "mobx";
import User from "../models/User";
import pb from "../pocketbase/pb";
import { router } from "../router/Routes";
import toast from "react-hot-toast";
import Post from "../models/Post";

export default class UserStore {
  user: User | null = null;
  loadingUser = true;
  userPostList = new Map<string, Post>();

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
    this.setLoadingUser(true);
    if (pb.authStore.isValid) {
      this.user = {
        id: pb.authStore.model!.id,
        email: pb.authStore.model!.email,
        avatar: pb.authStore.model!.avatar,
        name: pb.authStore.model!.name,
        created: pb.authStore.model!.created,
        username: pb.authStore.model!.username,
        followed: pb.authStore.model!.followed,
        followers: pb.authStore.model!.followers,
      };
      console.log(this.user);
      this.setLoadingUser(false);
      return;
    }
    this.setLoadingUser(false);
  };

  login = async (values: { emailOrUsername: string; password: string }) => {
    try {
      const user = await pb
        .collection("users")
        .authWithPassword(values.emailOrUsername, values.password)
        .catch((e) => {
          throw e;
        });
      runInAction(() => {
        console.log(user);
        this.authenticate();
        toast.success("Logged in successfully");
        router.navigate("/");
      });
    } catch (e) {
      runInAction(() => {
        console.log(e);
        throw e;
      });
    }
  };

  register = async (values: {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
    username: string;
  }) => {
    try {
      const user = await pb
        .collection("users")
        .create(values)
        .catch((e) => {
          throw e;
        });

      toast.success("Registered successfully");
      runInAction(
        async () =>
          await this.login({
            emailOrUsername: values.email,
            password: values.password,
          })
      );
    } catch (e) {
      runInAction(() => {
        throw e;
      });
    }
  };

  logout = () => {
    pb.authStore.clear();
    this.authenticate();
    router.navigate(0);
  };

  getPosts = async (min: number, max: number) => {
    try {
      const posts = await pb.collection("posts").getList(min, max, {
        filter: `creatorId = "${this.user?.id}"`,
        sort: "-created",
      });
      runInAction(() => {
        posts.items.forEach((p) => {
          this.userPostList.set(p.id, {
            id: p.id,
            content: p.content,
            created: p.created,
            creatorId: p.creatorId,
            media: p.media,
            postId: p.postId,
          });
        });

        console.log(posts);
        console.log(this.userPostList);
      });
    } catch (e) {
      throw e;
    }
  };
}
