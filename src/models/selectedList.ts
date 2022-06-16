import { proxy } from "valtio";

export const selectedList = proxy({
  _data: [] as string[],
  add(v: string) {
    const index = this._data.indexOf(v);
    if (index == -1) this._data.push(v);
  },
  remove(v: string) {
    const index = this._data.indexOf(v);
    if (index != -1) this._data.splice(index, 1);
  },
  clear() {
    this._data.splice(0);
  },
  toggle(v: string) {
    if (this.has(v)) {
      this.remove(v);
    } else {
      this.add(v);
    }
  },
  has(v: string): boolean {
    return this._data.indexOf(v) != -1;
  }
});