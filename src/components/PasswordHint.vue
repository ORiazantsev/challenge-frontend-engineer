<script setup>
defineProps({
  rule: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <div class="password-hint">
    <div v-if="rule.passed" class="password-hint__success-icon"></div>
    <div v-else class="password-hint__fail-icon"></div>

    <p
      class="password-hint__rule"
      :class="{
        'password-hint__rule--pass': rule.passed,
        'password-hint__rule--fail': !rule.passed,
      }"
      :data-test-rule-indicator="rule.name"
    >
      {{ rule.hint }}
    </p>
  </div>
</template>

<style scoped lang="scss">
$line-width: 2px;

.password-hint {
  display: flex;
  align-items: center;

  &__success-icon {
    display: inline-block;
    position: relative;
    border: $line-width solid currentColor;
    border-radius: 50%;
    font-size: 0.4px;
    width: 50em;
    height: 50em;
    color: $green;
    transform: rotate(40deg);
    margin-right: 10px;

    &::before,
    &::after {
      content: "";
      background-color: currentColor;
      position: absolute;
      width: $line-width;
      border-radius: 3px;
    }

    &::before {
      height: 25em;
      left: 50%;
      top: 50%;
      margin-left: 1em;
      margin-top: -15em;
    }

    &::after {
      height: 10em;
      transform: rotate(90deg);
      top: 50%;
      left: 50%;
      margin-top: 3em;
      margin-left: -5em;
    }
  }

  &__fail-icon {
    display: inline-block;
    position: relative;
    border: $line-width solid currentColor;
    border-radius: 50%;
    font-size: 0.4px;
    width: 50em;
    height: 50em;
    color: $red;
    margin-right: 10px;

    &::before,
    &::after {
      content: "";
      width: $line-width;
      height: 25em;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-top: -12em;
      margin-left: -2em;
      background-color: currentColor;
      border-radius: 3px;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }

  &__rule {
    font-size: 1rem;
    color: $grey;

    &--pass {
      color: $green;
    }
  }
}
</style>
