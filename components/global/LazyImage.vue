<template>
  <div class="lazyImage">
    <div
      v-if="lazyImage"
      v-lazy-container="{ selector: 'img' }"
      class="lazyImage__container"
    >
      <img
        :data-src="lazyImage.image"
        :data-loading="lazyImage.placeholder"
        :src="lazyImage.placeholder"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      lazyImage: null
    }
  },

  created () {
    this.lazyImage = this.getImage()
  },

  methods: {
    getImage () {
      try {
        return {
          image: require(`~/content/${this.$route.path.substring(1)}/img/${this.src}`),
          placeholder: require(`~/content/${this.$route.path.substring(1)}/img/${this.src}?lqip&inline`)
        }
      } catch (err) {
        return null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.lazyImage {
  padding: 0 2em;
  margin: 2em 0;

  &:first-child {
    margin-top: 0;
  }

  &__container {
    width: max-content;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;

    img {
      max-width: 100%;
      animation-duration: 5s;
      animation-name: blurrer;
      animation-iteration-count: infinite;
      transform: scale(1.1);
      transition: all 0.2s ease;

      &[lazy=loaded] {
        transform: scale(1) !important;
        filter: none !important;
      }
    }
  }
}

@keyframes blurrer {
  0% {
    filter: blur(20px);
    transform: scale(1.1);
  }

  50% {
    filter: blur(28px);
    transform: scale(1.15);
  }

  100% {
    filter: blur(20px);
    transform: scale(1.1);
  }
}
</style>
