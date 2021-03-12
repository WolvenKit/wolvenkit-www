<template>
  <div class="index">
    <FullpageLander :index-data="index" />
    <LatestPost :latest-post="latestPost" />
    <Community />
    <Contribute />
    <Patreon />
  </div>
</template>

<script>
import FullpageLander from '@/pages/index/-components/FullpageLander'
import LatestPost from '@/pages/index/-components/LatestPost'
import Community from '@/pages/index/-components/Community'
import Contribute from '@/pages/index/-components/Contribute'
import Patreon from '@/pages/index/-components/Patreon'

export default {
  components: {
    FullpageLander,
    LatestPost,
    Community,
    Contribute,
    Patreon
  },

  async asyncData ({ $content, error, app, env }) {
    const currentLocale = app.i18n.locale
    const defaultLocale = env.DEFAULT_LOCALE

    const index = await $content('index')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    let [latestPost] = await $content('blog', { deep: true })
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
      .limit(1)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    if (currentLocale !== defaultLocale) {
      const slug = currentLocale

      const [latestPostTranslated] = await $content('blog', { deep: true })
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
        .limit(1)
        .fetch()
        .catch(() => {})

      if (latestPost.dir === latestPostTranslated.dir) {
        latestPost = latestPostTranslated
      }
    }

    return {
      index,
      latestPost
    }
  }
}
</script>
