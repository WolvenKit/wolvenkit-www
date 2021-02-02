<template>
  <div class="blogPost">
    <PageHeader
      :title="post.title"
      :subtitle="post.description"
      :image="post.headerImage"
      :color="post.headerColor"
    />
    <div class="blogPost__container">
      <nuxt-content :document="post" />
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  components: {
    PageHeader
  },

  async asyncData ({ $content, params, error }) {
    const post = await $content('blog', params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      post
    }
  }
}
</script>

<style lang="scss" scoped>
.blogPost {
  &__container {
    max-width: var(--max-width-lg);
    margin: 0 auto;
    padding: 4vmin;
  }
}
</style>
