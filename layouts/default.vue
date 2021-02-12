<template>
  <div class="layout">
    <Navbar />
    <Nuxt class="layout__content" />
    <PageFooter />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

html {
  font-family:
    'Poppins',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__content {
    flex: 1;
  }
}
</style>
