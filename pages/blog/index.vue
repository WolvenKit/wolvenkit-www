<template>
  <div class="blogPosts">
    <PageHeader
      :title="$t('blog.pageTitle')"
      :subtitle="$t('blog.pageDescription')"
    />
    <PageContainer class="blogPosts__container">
      <BlogPostItem
        v-for="(post, index) in posts"
        :key="index"
        :class="{ 'blogPosts__feature': index === 0 }"
        :post="post"
      />
    </PageContainer>
  </div>
</template>

<script>
export default {

  async asyncData ({ $content, error, app, env }) {
    const currentLocale = app.i18n.locale
    const defaultLocale = env.DEFAULT_LOCALE

    const posts = await $content('blog', { deep: true })
      .only([
        'title',
        'description',
        'thumbnailImage',
        'category',
        'createdAt',
        'dir'
      ])
      .where({
        slug: defaultLocale
      })
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    if (currentLocale !== defaultLocale) {
      const slug = currentLocale
      const postsTranslated = await $content('blog', { deep: true })
        .only([
          'title',
          'description',
          'thumbnailImage',
          'category',
          'createdAt',
          'dir'
        ])
        .where({
          slug
        })
        .sortBy('createdAt', 'desc')
        .fetch()
        .catch(() => {
          error({ statusCode: 404, message: 'Page not found' })
        })

      const postDirs = posts.reduce((dir, post, index) => {
        dir[post.dir] = index
        return dir
      }, Object.create(null))

      for (const post of postsTranslated) {
        Object.assign(posts[postDirs[post.dir]], post)
      }
    }

    return {
      posts
    }
  },

  head: {
    title: 'Blog'
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
