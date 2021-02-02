<template>
  <div
    class="pageHeader"
    :style="{ background: color ?
      `linear-gradient(to right, rgb(${color}), var(--color-bg))` :
      'linear-gradient(to right, var(--color-primary), var(--color-bg))'
    }"
  >
    <div
      v-if="image"
      class="pageHeader__imageContainer"
    >
      <img :src="image">
    </div>
    <div class="pageHeader__container">
      <h1 class="pageHeader__title">
        {{ title }}
      </h1>
      <h2 class="pageHeader__subtitle">
        {{ subtitle }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    image: String,
    color: String
  }
}
</script>

<style lang="scss" scoped>
.pageHeader {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    height: 4em;
  }

  &__imageContainer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      filter: blur(5px);
      transform: scale(1.05);
      opacity: 0.5;
    }
  }

  &__container {
    text-align: center;
    max-width: var(--max-width-lg);
    padding: 8vmin 0;
    z-index: 1;
  }

  &__title {
    font-size: 3em;
  }

  &__subtitle {
    font-weight: 500;
    margin-top: 1em;
  }
}
</style>
