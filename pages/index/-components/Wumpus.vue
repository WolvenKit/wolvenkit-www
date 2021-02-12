<template>
  <canvas ref="riveWumpus" class="wumpus-canvas" width="300px" height="300px" />
</template>

<script>
export default {
  head () {
    return {
      script: [
        {
          hid: 'rive',
          src: 'https://unpkg.com/rive-js/dist/rive.js',
          callback: () => {
            // eslint-disable-next-line no-new, no-undef
            new RiveAnimation({
              src: '/rive/wumpus.riv',
              canvas: this.$refs.riveWumpus,
              autoplay: true
            })
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.wumpus-canvas {
  transform: rotate(-3deg);

  @media (max-width: 660px) {
    display: none;
  }
}
</style>
