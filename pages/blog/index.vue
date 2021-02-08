<template>
  <div class="blogPosts">
    <PageHeader
      title="Blog"
      subtitle="Featured progress, new developments and feature updates"
    />
    <PageContainer class="blogPosts__container">
      <PostItem
        v-for="(post, index) in posts"
        :key="index"
        :class="{ 'blogPosts__feature': index === 0 }"
        :post="post"
      />
    </PageContainer>
  </div>
</template>

<script>
import PostItem from '@/pages/blog/-components/PostItem'

export default {
  components: {
    PostItem
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
      .sortBy('createdAt', 'desc')
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
