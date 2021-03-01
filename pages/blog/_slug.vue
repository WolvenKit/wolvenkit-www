<template>
  <div class="blogPost">
    <PageHeader
      :title="post.title"
      :subtitle="post.description"
      :image="bannerImage"
      :color="post.headerColor"
    />
    <PageContainer blog>
      <nuxt-content
        class="blogPost__post"
        :document="post"
      />
    </PageContainer>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error, app }) {
    const currentLocale = app.i18n.locale
    const isEnglish = currentLocale === 'en'
    let [post] = await $content('blog', { deep: true })
      .where({
        dir: isEnglish ? `/blog/${params.slug}` : `/blog/${params.slug}/locales`,
        slug: isEnglish ? 'index' : currentLocale
      })
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    if (!isEnglish && !post) {
      [post] = await $content('blog', { deep: true })
        .where({
          dir: `/blog/${params.slug}`
        })
        .fetch()
        .catch(() => {
          error({ statusCode: 404, message: 'Page not found' })
        })
    }

    return {
      post
    }
  },

  data () {
    return {
      bannerImage: null,
      thumbnailImage: null
    }
  },

  head () {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE_URL || 'http://localhost:3000'}${this.thumbnailImage}`
        }
      ]
    }
  },

  created () {
    this.bannerImage = this.getBannerImage()
    this.thumbnailImage = this.getThumbnailImage()
  },

  methods: {
    getBannerImage () {
      if (this.post.headerImage) {
        try {
          return {
            image: require(`~/content/${this.post.dir.substring(1)}/${this.post.headerImage}`),
            placeholder: require(`~/content/${this.post.dir.substring(1)}/${this.post.headerImage}?lqip`)
          }
        } catch (err) {
          return null
        }
      } else {
        try {
          return {
            image: require(`~/content/${this.post.dir.substring(1)}/header.jpg`),
            placeholder: require(`~/content/${this.post.dir.substring(1)}/header.jpg?lqip`)
          }
        } catch (err) {
          return null
        }
      }
    },

    getThumbnailImage () {
      if (this.post.thumbnailImage) {
        try {
          return require(`~/content/${this.post.dir.substring(1)}/${this.post.thumbnailImage}`)
        } catch (err) {
          return null
        }
      } else {
        try {
          return require(`~/content/${this.post.dir.substring(1)}/thumbnail.jpg`)
        } catch (err) {
          return null
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.blogPost {
  ::v-deep &__post {
    line-height: 1.8em;

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
      margin-bottom: 1em;
      color: var(--color-text-semidark);
    }

    ul,
    ol {
      margin-bottom: 1.2em;
      color: var(--color-text-semidark);
    }

    blockquote {
      padding: 0 1em;
      border-left: 0.25em solid var(--color-primary);

      * {
        color: var(--color-text-dark);
      }
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
