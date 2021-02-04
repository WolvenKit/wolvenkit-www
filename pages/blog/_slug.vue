<template>
  <div class="blogPost">
    <PageHeader
      :title="post.title"
      :subtitle="post.description"
      :image="post.headerImage"
      :color="post.headerColor"
    />
    <div class="blogPost__container">
      <nuxt-content
        class="blogPost__post"
        :document="post"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const [post] = await $content('blog', { deep: true })
      .where({ dir: `/blog/${params.slug}` })
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

  ::v-deep &__post {
    h1 {
      margin: 0.5em 0 1em;
    }

    h2 {
      margin: 0.5em 0 1em;
    }

    h3 {
      margin: 0.5em 0 0.8em;
    }

    p {
      line-height: 1.6em;
      margin-bottom: 1em;
    }

    ul,
    ol {
      margin-bottom: 1.2em;
    }

    blockquote {
      padding: 0 1em;
      border-left: 0.25em solid var(--color-primary);
      color: var(--color-text-dark);
    }

    .nuxt-content-highlight pre {
      background: var(--color-bg-alt);
      color: var(--color-text-dark);
      border-radius: 0.5em;
      text-shadow: none;
      margin-bottom: 1.2em;
    }

    *:not(pre) > code {
      background: var(--color-bg-alt);
      padding: 0.2em 0.4em;
      border-radius: 0.25em;
      font-size: 0.9em;
    }
  }
}
</style>
