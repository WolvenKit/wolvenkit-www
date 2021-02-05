<template>
  <div class="index">
    <FullpageLander :index-data="index" />
    <LatestPost :latest-post="latestPost" />
    <div class="index__section">
      <h2>Community</h2>
    </div>
    <div class="index__section">
      <h2>Contribute</h2>
    </div>
    <div class="index__section">
      <h2>More Posts</h2>
    </div>
  </div>
</template>

<script>
import FullpageLander from '@/pages/index/-components/FullpageLander'
import LatestPost from '@/pages/index/-components/LatestPost'

export default {
  components: {
    FullpageLander,
    LatestPost
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
      .sortBy('createdAt', 'asc')
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
