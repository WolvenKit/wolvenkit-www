<template>
  <div
    class="pageHeader"
    :style="{ background: color ?
      `linear-gradient(to right, rgb(${color}), var(--color-bg))` :
      'linear-gradient(to right, var(--color-primary), var(--color-primary-light))'
    }"
  >
    <div
      v-if="image"
      v-lazy-container="{ selector: 'img' }"
      class="pageHeader__imageContainer"
    >
      <img
        :data-src="image.image"
        :data-loading="image.placeholder"
        alt=""
      >
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
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: null
    },
    image: {
      type: Object,
      default: null
    },
    color: {
      type: String,
      default: null
    }
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
      filter: blur(15px);
      transform: scale(1.1);
      opacity: 0.5;
      transition: all 0.2s ease;

      &[lazy=loaded] {
        transform: scale(1.05);
        filter: blur(5px);
      }
    }
  }

  &__container {
    text-align: center;
    max-width: var(--max-width-lg);
    padding: 5em 0;
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
