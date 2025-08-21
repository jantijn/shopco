import { defineStore } from "pinia";

export const useProductStore = defineStore("products", {
  state: () => ({
    items: [],
    totalCount: 0,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        const res = await fetch("http://localhost:9000/api/products");
        if (!res.ok) throw new Error("Failed to load products");
        const data = await res.json(); // <-- use data.items
        this.items = data.items || [];
        this.totalCount = Number(data.count) || this.items.length;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
    async fetchProduct(id) {
      this.error = null;
      try {
        // try cache first
        const cached = this.items.find((p) => p.id === id);
        if (cached) return cached;

        const res = await fetch(`http://localhost:9000/api/products/${id}`);
        if (!res.ok) throw new Error("Product not found");
        return await res.json(); // backend returns a single product object
      } catch (err) {
        this.error = err.message;
        return null;
      }
    },
  },
});
