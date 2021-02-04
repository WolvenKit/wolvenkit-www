<template>
  <div class="nav">
    <div
      class="nav__background"
      :class="{ 'nav__background--scrolled': scrolled }"
    />
    <div class="nav__container">
      <div class="nav__navLeft">
        <nuxt-link
          to="/"
          class="nav__navLogo"
        >
          wolvenkit logo
        </nuxt-link>
        <nuxt-link
          to="/blog"
          class="nav__navItem"
        >
          Blog
        </nuxt-link>
        <nuxt-link
          to="/projects"
          class="nav__navItem"
        >
          Projects
        </nuxt-link>
        <nuxt-link
          to="/team"
          class="nav__navItem"
        >
          Team
        </nuxt-link>
        <nuxt-link
          to="/"
          class="nav__navItem"
        >
          Wiki
        </nuxt-link>
      </div>
      <div class="nav__navRight">
        <nuxt-link
          to="/"
          class="nav__navItem"
        >
          <GithubIcon />
        </nuxt-link>
        <nuxt-link
          to="/"
          class="nav__navItem"
        >
          <DiscordIcon />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import GithubIcon from 'vue-material-design-icons/Github.vue'
import DiscordIcon from 'vue-material-design-icons/Discord.vue'

export default {
  components: {
    GithubIcon,
    DiscordIcon
  },

  data () {
    return {
      scrolled: false
    }
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll () {
      const currentPos = window.pageYOffset || document.documentElement.scrollTop

      if (currentPos >= 1) {
        this.scrolled = true
      } else {
        this.scrolled = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  height: 4em;
  transition: all 0.2s ease;

  &__background {
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(#000, 0.8);
    opacity: 0.5;
    z-index: -1;
    transition: all 0.5s ease;
    pointer-events: none;
    backdrop-filter: blur(30px);

    &--scrolled {
      top: 0;
      opacity: 1;
    }
  }

  &__container {
    max-width: calc(var(--max-width-lg) + 200px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  &__navLeft,
  &__navRight {
    display: flex;
  }

  &__navLogo,
  &__navItem {
    padding: 1.25em 1em;
    margin-right: 0.5em;
    text-decoration: none;
    color: var(--color-text);
    font-weight: 600;
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      text-shadow: 0 0 4px rgba(255, 255, 255, 0.25);
    }
  }
}
</style>
