import { makeAutoObservable } from "mobx";

export default class GlobalStore {
  open = false;

  toggleOpen = () => {
    this.open = !this.open;
  };

  constructor() {
    makeAutoObservable(this);
  }
}
