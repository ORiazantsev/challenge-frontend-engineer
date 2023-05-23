<script setup>
import { ref } from "vue";
import { RULE } from "@/domain/password/rules";
import { useStrongPasswordStore } from "@/stores/strong-password.js";
import {
  StrengthOption,
  StrengthOptionLabel,
} from "@/domain/password/strength-options";
import PasswordHint from "@/components/PasswordHint.vue";

const passwordStore = useStrongPasswordStore();

const password = ref("");
const summary = ref("Please, enter your password");

const checkPassword = () => {
  const val = password.value;
  const valLength = password.value.length;

  let list = passwordStore.rules.map((item) => {
    if (
      item.rule?.test(val) ||
      (item.name === RULE.LongerThan4 && valLength > 4) ||
      (item.name === RULE.LongerThan8 && valLength > 8) ||
      (item.name === RULE.LongerThan12 && valLength > 12)
    ) {
      return { ...item, passed: true };
    } else {
      return { ...item, passed: false };
    }
  });
  passwordStore.updateRulesList(list);

  countPassedRules();
};

const countPassedRules = () => {
  let count = 0;

  passwordStore.rules.forEach((item) => {
    if (item.passed) count++;
  });

  if (count >= 5) {
    summary.value = StrengthOptionLabel[StrengthOption.Strong];
  } else if (count < 1) {
    summary.value = "This field can't be empty";
  } else {
    summary.value = StrengthOptionLabel[StrengthOption.Weak];
  }
};
</script>

<template>
  <div class="password-field">
    <p class="password-field__summary" data-test="validation-summary">
      {{ summary }}
    </p>
    <input
      v-model="password"
      class="password-field__input"
      type="password"
      autocomplete="off"
      placeholder="Password"
      data-test="password-field"
      @input="checkPassword"
    />

    <div class="password-field__rules">
      <PasswordHint
        v-for="item in passwordStore.rules"
        :key="`${item.name}-rule`"
        :rule="item"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.password-field {
  &__summary {
    color: $greyDark;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  &__input {
    width: 100%;
    color: $greyDark;
    font-size: 1.1rem;
    padding: 0.6rem 1rem;
    border: 1px solid $greyDark;
    border-radius: 10px;
    margin-bottom: 2rem;

    &:focus {
      outline: none;
    }
  }

  &__rules {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
}
</style>
