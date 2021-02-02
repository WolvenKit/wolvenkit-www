<template>
  <div class="index">
    <div class="index__imageContainer">
      <transition
        name="fade"
        mode="out-in"
      >
        <img
          :key="currentTool"
          :src="page.tools[currentTool].backgroundImage"
        >
      </transition>
    </div>
    <div class="index__mainContainer">
      <span class="index__spacer" />
      <h1 class="index__title">
        {{ page.title }}
      </h1>

      <ul class="index__toolNav">
        <li
          v-for="(tool, index) in page.tools"
          :key="index"
          class="index__toolNavItem"
          :class="{ 'index__toolNavItem--active': currentTool === index }"
          @click="changeTool(index)"
        >
          {{ tool.name }}
        </li>
      </ul>

      <p class="index__toolDescription">
        {{ page.tools[currentTool].description }}
      </p>

      <div class="index__toolLinks">
        <router-link
          :to="page.tools[currentTool].pageLink"
          class="index__toolLink"
        >
          Get Started
        </router-link>
        <a
          class="index__toolLink"
          href="#"
        >
          <GithubIcon />
          Github
        </a>
      </div>

      <div class="index__toolPreview">
        <transition
          name="fade"
          mode="out-in"
        >
          <img
            :key="currentTool"
            :src="page.tools[currentTool].featureImage"
          >
        </transition>
      </div>
    </div>
    <div>
      <h1>yeeeeet</h1>
    </div>
  </div>
</template>

<script>
import GithubIcon from 'vue-material-design-icons/Github.vue'

export default {
  components: {
    GithubIcon
  },

  async asyncData ({ $content, error }) {
    const page = await $content('index')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    const currentTool = 0

    return {
      page,
      currentTool
    }
  },

  methods: {
    changeTool (index) {
      this.currentTool = index
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  min-height: 100vh;

  &__mainContainer {
    position: relative;
    height: 115vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: var(--max-width-lg);
    margin: 0 auto;
    padding: 0 4vmin;

    &::before {
      content: '';
      height: 8vmin;
    }
  }

  &__imageContainer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 115vh;
    z-index: -1;
    overflow: hidden;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      filter: blur(5px);
      transform: scale(1.05);
      opacity: 0.3;
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
    width: 100%;
    height: 100%;
    margin-top: 3vmin;
    border-radius: 0.5em 0.5em 0 0;
    overflow: hidden;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
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
