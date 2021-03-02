<template>
  <div class="blogPosts">
    <PageHeader
      :title="$t('blog.pageTitle')"
      :subtitle="$t('blog.pageDescription')"
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

  async asyncData ({ $content, error, app }) {
    const currentLocale = app.i18n.locale
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
        slug: 'index'
      })
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    if (currentLocale !== 'en') {
      const slug = currentLocale
      let postsTranslated = await $content('blog', { deep: true })
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

      postsTranslated = postsTranslated.map((post) => {
        return Object.assign({}, post, {
          dir: post.dir.substr(0, post.dir.lastIndexOf('/'))
        })
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
