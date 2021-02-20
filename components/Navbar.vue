<template>
  <div
    class="nav"
    :class="{ 'nav--open': menuOpen }"
  >
    <div
      class="nav__mobileBackground"
      @click="menuOpen = false"
    />
    <div
      class="nav__background"
      :class="{'nav__background--scrolled': scrolled }"
    />
    <div
      class="nav__container"
      @click="menuOpen = false"
    >
      <div class="nav__navLeft">
        <div class="nav__top">
          <nuxt-link
            to="/"
            class="nav__navLogo"
          >
            <img src="/logo_temp.png">
          </nuxt-link>
          <div
            class="nav__closeMenuContainer"
            @click.stop="menuOpen = !menuOpen"
          >
            <svg
              class="nav__closeMenu"
              viewBox="0 0 100 100"
            >
              <path
                class="line top"
                d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
              />
              <path
                class="line middle"
                d="m 70,50 h -40"
              />
              <path
                class="line bottom"
                d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
              />
            </svg>
          </div>
        </div>
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
        <a
          href="https://wiki.cybermods.net"
          class="nav__navItem"
        >
          Wiki
        </a>
      </div>
      <div class="nav__navRight">
        <a
          href="https://github.com/WolvenKit/"
          class="nav__navItem"
        >
          <GithubIcon />
        </a>
        <a
          href="https://discord.gg/cp77modding"
          class="nav__navItem"
        >
          <DiscordIcon />
        </a>
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
      scrolled: false,
      menuOpen: false
    }
  },

  watch: {
    $route () {
      this.menuOpen = false
    }
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    handleScroll () {
      const currentPos = window.pageYOffset || document.documentElement.scrollTop

      if (currentPos >= 1) {
        this.scrolled = true
      } else {
        this.scrolled = false
      }
    },

    handleResize () {
      if (window.innerWidth > 620) {
        this.menuOpen = false
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
  height: max-content;
  max-height: 4em;
  transition: all 0.2s ease, max-height 0.35s ease;
  overflow: hidden;

  &__mobileBackground {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(#000, 0.5);
    backdrop-filter: blur(5px);
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    transition: all 0.35s ease;
  }

  &__background {
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(#000, 0.7);
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
    max-width: calc(var(--max-width-lg) + 180px);
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  &__navLeft,
  &__navRight {
    display: flex;
    transition: all 0.2s ease;
  }

  &__top {
    display: flex;
    align-items: center;
    height: 4em;
  }

  &__closeMenu {
    display: none;
    height: 3em;
    max-height: 100%;
    padding-right: 0.85em;
    -webkit-tap-highlight-color: transparent;
    transition: transform 0.4s;
    user-select: none;
    cursor: pointer;

    .line {
      fill: none;
      transition: stroke-dasharray 0.4s, stroke-dashoffset 0.4s;
      stroke: var(--color-text);
      stroke-width: 5.5;
      stroke-linecap: round;
    }

    .top {
      stroke-dasharray: 40 121;
    }

    .bottom {
      stroke-dasharray: 40 121;
    }
  }

  &__navLogo {
    height: 100%;
    padding: 0.85em;
    margin-right: 0.5em;
    transition: all 0.2s ease;

    > img {
      height: 100%;
    }

    &:hover {
      transform: translateY(-2px);
    }
  }

  &__navItem {
    display: flex;
    align-items: center;
    padding: 1em;
    margin-right: 0.5em;
    text-decoration: none;
    color: var(--color-text);
    font-weight: 600;
    transition: all 0.2s ease;
    z-index: 2;

    > .material-design-icon {
      display: flex;
    }

    &:hover {
      transform: translateY(-2px);
      text-shadow: 0 0 4px rgba(255, 255, 255, 0.25);
    }
  }

  @media (max-width: 620px) {
    &__container {
      flex-direction: column;
    }

    &__navLeft {
      flex-direction: column;
    }

    &__navItem,
    &__navRight {
      justify-content: center;
      opacity: 0;
    }

    &__top {
      justify-content: space-between;
    }

    &__closeMenu {
      display: initial;
    }
  }

  &--open {
    max-height: 800px;
  }

  &--open & {
    &__mobileBackground {
      opacity: 1;
      visibility: visible;
    }

    &__background {
      top: 0;
      opacity: 1;
      border-bottom: 2px solid var(--color-primary);
    }

    &__closeMenu {
      transform: rotate(45deg);

      .top {
        stroke-dashoffset: -68px;
      }

      .bottom {
        stroke-dashoffset: -68px;
      }
    }

    &__navItem,
    &__navRight {
      opacity: 1;
    }
  }
}
</style>
