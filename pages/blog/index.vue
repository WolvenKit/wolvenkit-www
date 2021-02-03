<template>
  <div class="blogPosts">
    <PageHeader
      title="Blog"
      subtitle="Featured progress, new developments and feature updates"
    />
    <div class="blogPosts__container">
      <BlogPostItem
        v-for="(post, index) in posts"
        :key="index"
        :class="{ 'blogPosts__feature': index === 0 }"
        :post="post"
      />
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import BlogPostItem from '@/components/BlogPostItem'

export default {
  components: {
    PageHeader,
    BlogPostItem
  },

  async asyncData ({ $content, error }) {
    const posts = await $content('blog', { deep: true })
      .only([
        'title',
        'description',
        'image',
        'category',
        'createdAt',
        'dir'
      ])
      .sortBy('createdAt', 'asc')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      posts
    }
  }
}
</script>

<style lang="scss" scoped>
.blogPosts {
  &__container {
    max-width: var(--max-width-lg);
    margin: 0 auto;
    padding: 4vmin;
    display: grid;
    grid-template-columns: 1fr 1fr;
    // grid-gap: 1em;
    grid-auto-flow: dense;

    @media (max-width: 720px) {
      display: flex;
      flex-direction: column;
    }
  }

  &__feature {
    grid-column: 1 / -1;
  }
}
</style>
