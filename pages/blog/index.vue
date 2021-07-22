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

    const posts = await $content(`blog/${defaultLocale}`)
      .only([
        'title',
        'description',
        'thumbnailImage',
        'category',
        'createdAt',
        'slug',
        'dir'
      ])
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    if (currentLocale !== defaultLocale) {
      const postsTranslated = await $content(`blog/${currentLocale}`)
        .only([
          'title',
          'description',
          'thumbnailImage',
          'category',
          'createdAt',
          'dir',
          'slug'
        ])
        .sortBy('createdAt', 'desc')
        .fetch()
        .catch(() => {})

      if (postsTranslated) {
        const postSlugs = posts.reduce((slug, post, index) => {
          slug[post.slug] = index
          return slug
        }, Object.create(null))

        postsTranslated.forEach((post) => {
          const defaultPost = posts.find(x => x.slug === post.slug)
          Object.assign(posts[postSlugs[post.slug]], { ...defaultPost, ...post })
        })
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
