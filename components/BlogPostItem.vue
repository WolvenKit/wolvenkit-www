<template>
  <nuxt-link
    class="blogPostItem"
    :to="post.dir"
  >
    <div
      v-lazy-container="{ selector: 'img' }"
      class="blogPostItem__imageContainer"
    >
      <img
        :data-src="require(`~/content${post.dir}/thumbnail.jpg`)"
        :data-loading="require(`~/content${post.dir}/thumbnail.jpg?lqip`)"
      >
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

  methods: {
    imgSrc (file) {
      try {
        return require(`~/content/blog/img/${file}`)
      } catch (err) {
        return null
      }
    },

    imgSrcLowRes (file) {
      try {
        return require(`~/content/blog/img/${file}?lqip`)
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

  &__imageContainer {
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
