<template>
  <component
    :is="as"
    :to="to"
    class="button"
    :class="{
      primary: variant === 'primary',
      secondary: variant === 'secondary',
      small: size === 'small',
      large: size === 'large',
    }"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  variant: { type: String, default: "default" }, // default | primary | secondary
  size: { type: String, default: "default" }, // default | small | large
  as: { type: [String, Object], default: "button" }, // 'button', 'a', RouterLink
  to: { type: String, default: null }, // only for RouterLink
});
</script>

<style scoped>
.button {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem 0.9rem;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  background: var(--brand);
  color: #0b0c10;
  border: none;
}

.button.primary {
  background: var(--accent);
}

.button.secondary {
  background: #2a2c36;
  color: var(--text);
}

.button.small {
  padding: 0.3rem 0.6rem;
  font-size: 0.9rem;
}

.button.large {
  padding: 0.7rem 1.2rem;
  font-size: 1.1rem;
}
</style>
