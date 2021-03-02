<template>
  <div class="lander">
    <transition
      name="fade"
      mode="out-in"
    >
      <div
        v-if="Object.keys(images).length !== 0"
        :key="currentTool"
        v-lazy-container="{ selector: 'img' }"
        class="lander__imageContainer"
      >
        <img
          :key="currentTool"
          :data-src="images[indexData.tools[currentTool].name].background.image"
        >
      </div>
    </transition>

    <div class="lander__mainContainer">
      <span class="lander__spacer" />
      <h1 class="lander__title">
        {{ indexData.title }}
      </h1>

      <ul class="lander__toolNav">
        <li
          v-for="(tool, index) in indexData.tools"
          :key="index"
          class="lander__toolNavItem"
          :class="{ 'lander__toolNavItem--active': currentTool === index }"
          @click="changeTool(index)"
        >
          {{ tool.name }}
        </li>
      </ul>

      <p class="lander__toolDescription">
        {{ $t(indexData.tools[currentTool].description) }}
      </p>

      <div class="lander__toolLinks">
        <nuxt-link
          :to="localePath(indexData.tools[currentTool].pageLink)"
          class="lander__toolLink"
        >
          {{ $t('general.getStarted') }}
        </nuxt-link>
        <a
          class="lander__toolLink"
          href="#"
        >
          <GithubIcon />
          GitHub
        </a>
      </div>

      <transition
        name="fade"
        mode="out-in"
      >
        <div
          v-if="Object.keys(images).length !== 0"
          :key="currentTool"
          v-lazy-container="{ selector: 'img' }"
          class="lander__toolPreview"
        >
          <img
            :key="currentTool"
            :data-src="images[indexData.tools[currentTool].name].feature.image"
            :data-loading="images[indexData.tools[currentTool].name].feature.placeholder"
          >
        </div>
      </transition>
    </div>
    <div class="lander__scrollDown">
      <ChevronDown class="lander__scrollDownIcon" />
    </div>
  </div>
</template>

<script>
import GithubIcon from 'vue-material-design-icons/Github.vue'
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'

export default {
  components: {
    GithubIcon,
    ChevronDown
  },

  props: {
    indexData: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      currentTool: 0,
      images: {}
    }
  },

  mounted () {
    for (const tool of this.indexData.tools) {
      this.$set(this.images, tool.name, {
        background: this.getImage(tool.name, true),
        feature: this.getImage(tool.name)
      })
    }
  },

  methods: {
    changeTool (index) {
      this.currentTool = index
    },

    getImage (toolName, isBackground = false) {
      try {
        return {
          image: require(`~/content/indexImages/${toolName}_${isBackground ? 'Background' : 'Feature'}.jpg`),
          placeholder: isBackground ? null : require(`~/content/indexImages/${toolName}_Feature.jpg?lqip`)
        }
      } catch (err) {
        return null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.lander {
  position: relative;
  mask-image: linear-gradient(to top, transparent, #000 15vh);

  &__scrollDown {
    position: sticky;
    bottom: 5em;
    display: flex;
    justify-content: center;
    z-index: 10;
    height: 0;
  }

  &__scrollDownIcon {
    height: 5em;
    animation-name: bounce;
    animation-duration: 2.5s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;

    ::v-deep svg {
      height: 100%;
      width: 100%;
      filter: drop-shadow(0 0 5px rgba(0, 0, 0, 1));
    }
  }

  &__mainContainer {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: calc(var(--max-width-lg) + 180px);
    margin: 0 auto;
    padding: 0 4vmin;

    &::before {
      content: '';
      height: 4em;
    }
  }

  &__imageContainer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      opacity: 0;
      transform: scale(1.05);
      filter: blur(8px);
      transition: opacity 0.3s ease;

      &[lazy=loaded] {
        opacity: 0.3;
      }
    }
  }

  &__spacer {
    margin-top: 25vmin;
  }

  &__title {
    font-weight: 700;
    font-size: 4em;
    text-align: center;
  }

  &__toolDescription {
    text-align: center;
  }

  &__toolNav {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 1em 0;
  }

  &__toolNavItem {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1em;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:not(:last-of-type) {
      margin-right: 0.5em;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 0.25em;
      left: 50%;
      width: 90%;
      transform: translate(-50%, 500%);
      height: 2px;
      background: var(--color-text);
      opacity: 0;
      transition: all 0.2s ease-in-out;
    }

    &::after {
      content: attr(data-text);
      content: attr(data-text) / "";
      height: 0;
      visibility: hidden;
      overflow: hidden;
      user-select: none;
      pointer-events: none;
      font-weight: 600;
    }

    &--active {
      font-weight: 600;

      &::before {
        transform: translate(-50%, 100%);
        opacity: 1;
      }
    }
  }

  &__toolLinks {
    display: flex;
    margin-bottom: 2em;
  }

  &__toolLink {
    height: 3em;
    display: flex;
    align-items: center;
    background: var(--color-primary);
    color: var(--color-text);
    padding: 0.5em 2em;
    margin-top: 3vh;
    border-radius: 0.25em;
    font-weight: 600;
    text-decoration: none;

    &:not(:last-of-type) {
      margin-right: 1em;
    }

    > .github-icon {
      height: 100%;
      width: 2em;
      margin-right: 0.5em;

      ::v-deep svg {
        height: 100%;
        width: 100%;
      }
    }
  }

  &__toolPreview {
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: auto;
    border-radius: 0.5em 0.5em 0 0;
    overflow: hidden;

    &::before {
      content: "";
      display: block;
      height: 0;
      width: 0;
      padding-top: calc(100% * (9 / 16));
    }

    > img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      filter: blur(25px);
      transform: scale(1.1);
      transition: all 0.2s ease;

      &[lazy=loaded] {
        transform: scale(1);
        filter: none;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0 !important;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-0.5em);
  }

  60% {
    transform: translateY(-0.15em);
  }
}
</style>
