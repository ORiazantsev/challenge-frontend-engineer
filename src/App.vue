<script setup>
import PasswordField from "@/components/PasswordField.vue";
</script>

<template>
  <div class="app">
    <form class="app__form">
      <PasswordField />
    </form>
  </div>
</template>

<style scoped lang="scss">
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  &__form {
    max-width: 65%;
    padding: 5rem 2.5rem;
    border-radius: 10px;
    box-shadow: $shadowBase;
  }
}
</style>
