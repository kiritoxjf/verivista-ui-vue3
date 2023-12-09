import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", {
	// other options...
	state: () => {
    return {
      name: "Verivista",
    }
  }
});
