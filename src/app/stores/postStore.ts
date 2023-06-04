import { makeAutoObservable } from "mobx";
import Post from "../models/Post";

export default class PostStore {
  postList = new Map<string, Post>();

  getUserPosts = (userId: string) => {};

  constructor() {
    makeAutoObservable(this);
  }
}
