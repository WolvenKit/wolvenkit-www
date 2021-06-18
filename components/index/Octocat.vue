<template>
  <canvas
    ref="riveOctocat"
    class="octocat-canvas"
    width="340"
    height="340"
  />
</template>

<script>
import { Rive } from 'rive-js'

export default {
  data () {
    return {
      rive: null
    }
  },
  mounted () {
    this.rive = new Rive({
      buffer: require('@/assets/rive/octocat.riv'),
      canvas: this.$refs.riveOctocat,
      autoplay: true
    })
  }
}
</script>

<style lang="scss">
.octocat-canvas {
  @media (max-width: 660px) {
    display: none;
  }
}
</style>
