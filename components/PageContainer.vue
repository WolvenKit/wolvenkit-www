<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: var(--max-width-lg);
  width: 100%;
  margin: 0 auto;
  padding: 4vmin;
}
</style>
