import { defineStore } from "pinia";

export const useStrongPasswordStore = defineStore("strong_password", {
  state: () => {
    return {
      rules: [
        {
          name: "OneLetter",
          hint: "Has at least one letter",
          rule: /[a-zA-Z]/,
        },
        {
          name: "UpperAndLower",
          hint: "Has at least one lower and one upper case letter",
          rule: /(?=.*[a-z])(?=.*[A-Z])/,
        },
        { name: "OneNumber", hint: "Has at least one number", rule: /\d/ },
        {
          name: "SpecialSymbol",
          hint: "Has at least one special symbol",
          rule: /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
        },
        { name: "LongerThan4", hint: "Has length > 4" },
        { name: "LongerThan8", hint: "Has length > 8" },
        { name: "LongerThan12", hint: "Has length > 12" },
      ],
    };
  },
  actions: {
    updateRulesList(list) {
      this.rules = list;
    },
  },
});
