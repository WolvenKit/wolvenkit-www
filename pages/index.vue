<template>
  <div class="container">
    <div>
      <h1 class="title">
        {{ page.title }}
      </h1>
      <div class="links">
        <p
          v-for="tool in page.tools"
          :key="tool"
        >
          {{ tool }}
        </p>
      </div>
      <nuxt-content :document="page" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, error }) {
    const page = await $content('index')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      page
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
