<template>
  <div class="index">
    <FullpageLander :index-data="index" />
    <LatestPost :latest-post="latestPost[0]" />
    <Community />
    <Contribute />
  </div>
</template>

<script>
import FullpageLander from '@/pages/index/-components/FullpageLander'
import LatestPost from '@/pages/index/-components/LatestPost'
import Community from '@/pages/index/-components/Community'
import Contribute from '@/pages/index/-components/Contribute'

export default {
  components: {
    FullpageLander,
    LatestPost,
    Community,
    Contribute
  },

  async asyncData ({ $content, error }) {
    const index = await $content('index')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    const latestPost = await $content('blog', { deep: true })
      .only([
        'title',
        'description',
        'image',
        'category',
        'createdAt',
        'dir'
      ])
      .sortBy('createdAt', 'desc')
      .limit(1)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      index,
      latestPost
    }
  }
}
</script>
