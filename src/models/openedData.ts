import { proxy } from "valtio";

export const openedData = proxy({
  open: false,
  toggle() {
    this.open = !this.open;
  },
  close() {
    this.open = false;
  }
});