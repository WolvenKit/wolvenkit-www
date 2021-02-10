<template>
  <div
    class="container"
    :class="{ 'container--blog': blog }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: var(--max-width-lg);
  width: 100%;
  margin: 0 auto;
  padding: 4vmin;

  &--blog {
    max-width: var(--max-width-blog);
  }
}
</style>
