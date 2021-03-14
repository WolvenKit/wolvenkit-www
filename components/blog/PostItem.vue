<template>
  <nuxt-link
    class="blogPostItem"
    :to="localePath(post.dir.substr(0, post.dir.lastIndexOf('/')))"
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
        alt="Blog post thumbnail/preview image"
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
        {{ $t('blog.published') }} {{ post.createdAt | formatDate }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
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
      const blogRoot = this.post.dir.substring(1).substr(0, this.post.dir.lastIndexOf('/') - 1)

      if (this.post.thumbnailImage) {
        try {
          return {
            image: require(`~/content/${blogRoot}/${this.post.thumbnailImage}`),
            placeholder: require(`~/content/${blogRoot}/${this.post.thumbnailImage}?lqip`)
          }
        } catch (err) {
          return null
        }
      } else {
        try {
          return {
            image: require(`~/content/${blogRoot}/thumbnail.jpg`),
            placeholder: require(`~/content/${blogRoot}/thumbnail.jpg?lqip`)
          }
        } catch (err) {
          return null
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.blogPostItem {
  width: 100%;
  min-width: 0;
  border-radius: 1em;
  display: flex;
  align-items: center;
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
    min-width: 350px;
    border-radius: 1em;
    overflow: hidden;
    background: var(--color-bg-alt);
    flex: 2;
    margin-bottom: 1em;
    border: 3px solid var(--color-bg-alt);
    box-shadow: 0 0.25em 15px 0 rgba(0, 0, 0, 0.2);

    &::before {
      content: "";
      display: block;
      height: 0;
      width: 100%;
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
    margin-left: 1.5em;
    margin-right: 1.5em;
    flex: 1;
    min-width: 350px;
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
