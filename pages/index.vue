<template>
  <div class="index">
    <IndexFullpageLander :index-data="index" />
    <IndexLatestPost :latest-post="latestPost" />
    <IndexCommunity />
    <IndexContribute />
    <IndexPatreon />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, error, app, env }) {
    const currentLocale = app.i18n.locale
    const defaultLocale = env.DEFAULT_LOCALE

    const index = await $content('index')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    let [latestPost] = await $content(`blog/${defaultLocale}`)
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
      .limit(1)
      .fetch()
      .catch(() => {})

    if (currentLocale !== defaultLocale) {
      const latestPostTranslated = await $content(`blog/${currentLocale}/${latestPost.slug}`)
        .only([
          'title',
          'description',
          'thumbnailImage',
          'category',
          'createdAt',
          'dir',
          'slug'
        ])
        .fetch()
        .catch(() => {})

      if (latestPostTranslated) {
        latestPost = { ...latestPost, ...latestPostTranslated }
      }
    }

    return {
      index,
      latestPost
    }
  }
}
</script>
