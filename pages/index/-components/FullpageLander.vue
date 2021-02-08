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
          :data-loading="images[indexData.tools[currentTool].name].background.placeholder"
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
        {{ indexData.tools[currentTool].description }}
      </p>

      <div class="lander__toolLinks">
        <nuxt-link
          :to="indexData.tools[currentTool].pageLink"
          class="lander__toolLink"
        >
          Get Started
        </nuxt-link>
        <a
          class="lander__toolLink"
          href="#"
        >
          <GithubIcon />
          Github
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
  </div>
</template>

<script>
import GithubIcon from 'vue-material-design-icons/Github.vue'

export default {
  components: {
    GithubIcon
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
          placeholder: require(`~/content/indexImages/${toolName}_${isBackground ? 'Background' : 'Feature'}.jpg?lqip`)
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

  &__mainContainer {
    position: relative;
    min-height: 115vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: var(--max-width-lg);
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
      opacity: 0.3;
      filter: blur(25px);
      transform: scale(1.1);
      transition: all 0.2s ease;

      &[lazy=loaded] {
        transform: scale(1.05);
        filter: blur(8px);
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
  }

  &__toolLink {
    height: 3em;
    display: flex;
    align-items: center;
    background: var(--color-primary);
    color: var(--color-text);
    padding: 0 2em;
    margin-top: 3vh;
    border-radius: 0.25em;
    font-weight: 600;
    text-decoration: none;

    &:not(:last-of-type) {
      margin-right: 1em;
    }

    > .github-icon {
      height: 60%;
      width: 100%;
      margin-right: 0.5em;

      > svg {
        height: 100%;
        width: 100%;
      }
    }
  }

  &__toolPreview {
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 3vmin;
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
</style>
