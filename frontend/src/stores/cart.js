import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: JSON.parse(localStorage.getItem("shopco_cart") || "[]"),
  }),
  getters: {
    count: (state) => state.items.reduce((n, it) => n + it.qty, 0),
    total: (state) =>
      state.items.reduce((sum, it) => sum + it.price * it.qty, 0),
  },
  actions: {
    persist() {
      localStorage.setItem("shopco_cart", JSON.stringify(this.items));
    },
    add(item) {
      const existing = this.items.find((i) => i.id === item.id);
      if (existing) existing.qty += item.qty;
      else this.items.push(item);
      this.persist();
    },
    updateQty(id, qty) {
      const it = this.items.find((i) => i.id === id);
      if (it) it.qty = Math.max(1, qty);
      this.persist();
    },
    remove(id) {
      this.items = this.items.filter((i) => i.id !== id);
      this.persist();
    },
  },
});
