<template>
  <canvas
    ref="riveWumpus"
    class="wumpus-canvas"
    width="300px"
    height="300px"
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
      buffer: require('@/assets/rive/wumpus.riv'),
      canvas: this.$refs.riveWumpus,
      autoplay: true
    })
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
