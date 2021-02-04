<template>
  <nuxt-link
    class="blogPostItem"
    :to="post.dir"
  >
    <!-- TODO: Better handling/design of non image blog posts -->
    <div
      v-if="thumbnailImage"
      v-lazy-container="{ selector: 'img' }"
      class="blogPostItem__imageContainer"
    >
      <img
        :data-src="thumbnailImage.image"
        :data-loading="thumbnailImage.placeholder"
      >
    </div>
    <div
      v-else
      class="blogPostItem__imageContainerNone"
    >
      <div class="blogPostItem__color" />
    </div>

    <div class="blogPostItem__info">
      <p class="blogPostItem__category">
        {{ post.category ? post.category : 'Uncategorized' }}
      </p>
      <h2 class="blogPostItem__title">
        {{ post.title }}
      </h2>
      <p class="blogPostItem__excerpt">
        {{ post.description }}
      </p>
      <p class="blogPostItem__date">
        Published {{ post.createdAt | formatDate }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: Object
  },

  data () {
    return {
      thumbnailImage: null
    }
  },

  created () {
    this.thumbnailImage = this.getThumbnailImage()
  },

  methods: {
    getThumbnailImage () {
      try {
        return {
          image: require(`~/content${this.post.dir}/thumbnail.jpg`),
          placeholder: require(`~/content${this.post.dir}/thumbnail.jpg?lqip`)
        }
      } catch (err) {
        return null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.blogPostItem {
  width: 100%;
  border-radius: 1em;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  // grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  color: var(--color-text);
  text-decoration: none;
  padding: 0 1em 1em;

  &__imageContainer,
  &__imageContainerNone {
    position: relative;
    width: 100%;
    height: max-content;
    min-width: 300px;
    border-radius: 1em;
    overflow: hidden;
    background: var(--color-bg-alt);
    flex: 1;
    margin-bottom: 1em;

    &::before {
      content: "";
      display: block;
      height: 0;
      width: 0;
      padding-top: calc(100% * (9 / 16));
    }

    img {
      position: absolute;
      top: -1px;
      left: -1px;
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      object-fit: cover;
      object-position: center;
      filter: blur(25px);
      transform: scale(1.1);
      transition: all 0.2s ease;

      &[lazy=loaded] {
        transform: scale(1);
        filter: none;
      }
    }
  }

  &__color {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: var(--color-primary);
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1em;
    margin-right: 1em;
  }

  &__category {
    text-transform: uppercase;
    font-size: 0.8em;
  }

  &__title {
    font-size: 2em;
  }

  &__excerpt {
    color: var(--color-text-dark);
    line-height: 1.5em;
  }

  &__date {
    padding: 1em 0;
    color: var(--color-text-dark);
  }
}
</style>
