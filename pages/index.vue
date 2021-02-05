<template>
  <div class="index">
    <FullpageLander :index-data="index" />
    <div>
      <h1>yeeeeet</h1>
    </div>
  </div>
</template>

<script>
import FullpageLander from '@/pages/index/-components/FullpageLander'

export default {
  components: {
    FullpageLander
  },

  async asyncData ({ $content, error }) {
    const index = await $content('index')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      index
    }
  }
}
</script>
