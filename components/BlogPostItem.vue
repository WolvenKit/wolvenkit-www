<template>
  <router-link
    class="blogPostItem"
    :to="post.path"
  >
    <div class="blogPostItem__imageContainer">
      <img :src="post.image">
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
  </router-link>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>

<style lang="scss" scoped>
.blogPostItem {
  width: 100%;
  background: var(--color-bg-alt);
  border-radius: 1em;
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1em;
  color: var(--color-text);
  text-decoration: none;

  &__imageContainer {
    width: 100%;
    border-radius: 1em;
    overflow: hidden;

    > img {
      width: 100%;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
