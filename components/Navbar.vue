<template>
  <div
    class="nav"
    :class="{
      'nav--open': menuOpen,
      'nav--mobile': small
    }"
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
      <div ref="navLeft" class="nav__navLeft">
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
        <template v-for="item in navItems">
          <nuxt-link
            v-if="item.link && item.link.startsWith('/')"
            :key="item.name"
            :to="item.link"
            class="nav__navItem"
          >
            {{ item.name }}
          </nuxt-link>
          <a
            v-else-if="item.link"
            :key="item.name"
            :href="item.link"
            class="nav__navItem"
          >
            {{ item.name }}
          </a>
          <div
            v-else-if="item.subItems"
            :key="item.name"
            class="nav__navItem nav__navItem--hasSub"
          >
            <p>{{ item.name }}</p>
            <div class="nav__subItemContainer">
              <template v-for="subItem in item.subItems">
                <nuxt-link
                  v-if="subItem.link && subItem.link.startsWith('/')"
                  :key="subItem.name"
                  :to="subItem.link"
                  class="nav__navSubItem"
                >
                  {{ subItem.name }}
                </nuxt-link>
                <a
                  v-else-if="subItem.link"
                  :key="subItem.name"
                  :href="subItem.link"
                  class="nav__navSubItem"
                >
                  {{ subItem.name }}
                </a>
              </template>
            </div>
          </div>
        </template>
      </div>
      <div ref="navRight" class="nav__navRight">
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
      menuOpen: false,
      navMaxWidth: null,
      small: false,
      navItems: [
        {
          name: 'Blog',
          link: '/blog'
        },
        {
          name: 'Projects',
          link: '/projects'
        },
        {
          name: 'Team',
          link: '/team'
        },
        {
          name: 'Wiki',
          subItems: [
            {
              name: 'CET',
              link: 'https://wiki.cybermods.net/cyber-engine-tweaks/'
            },
            {
              name: 'WolvenKit',
              link: 'https://github.com/WolvenKit/Wolvenkit/wiki'
            }
          ]
        },
        {
          name: 'Resources',
          subItems: [
            {
              name: 'Doxygen',
              link: 'https://doxygen.redmodding.org/'
            },
            {
              name: 'Redscript',
              link: 'https://redscript.redmodding.org/'
            }
          ]
        }
      ]
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

    const navLeftWidth = this.$refs.navLeft.clientWidth
    const navRightWidth = this.$refs.navRight.clientWidth

    this.navMaxWidth = navLeftWidth + navRightWidth + 100
    this.handleResize()
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
      if (window.innerWidth > this.navMaxWidth) {
        this.menuOpen = false
        this.small = false
      } else {
        this.small = true
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
  transition: max-height 0.35s ease;

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
    position: relative;
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

    &--hasSub {
      transform: translateY(0) !important;
      text-shadow: none !important;

      &:hover {
        > p {
          text-shadow: 0 0 4px rgba(255, 255, 255, 0.25);
        }
      }
    }

    &:hover {
      transform: translateY(-2px);
      text-shadow: 0 0 4px rgba(255, 255, 255, 0.25);

      .nav__subItemContainer {
        opacity: 1;
        transform: translate(-50%, 0);
        visibility: visible;
      }
    }
  }

  &__subItemContainer {
    position: absolute;
    top: 100%;
    left: 50%;
    display: flex;
    flex-direction: column;
    padding: 1em 0;
    opacity: 0;
    transform: translate(-50%, -10px);
    transition: opacity 0.2s ease, transform 0.2s ease;
    visibility: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0.5em;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(#000, 0.7);
      z-index: -1;
      transition: all 0.5s ease;
      pointer-events: none;
      backdrop-filter: blur(30px);
      border-radius: 0.5em;
    }
  }

  &__navSubItem {
    text-decoration: none;
    color: var(--color-text);
    font-weight: 600;
    padding: 0.5em 1em;
    padding-right: 2em;
    transition: text-shadow 0.2s ease, transform 0.2s ease;

    &:hover {
      transform: translateX(2px);
      text-shadow: 0 0 4px rgba(255, 255, 255, 0.25);
    }
  }

  &--mobile {
    overflow: hidden;
  }

  &--mobile & {
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

    &__navItem {
      flex-direction: column;
    }

    &__subItemContainer {
      padding: 1em;
      padding-bottom: 0;
      text-align: center;
      position: initial;
      opacity: 1;
      visibility: visible;
      transform: translateY(0) !important;

      &::before {
        display: none;
      }
    }

    &__navSubItem {
      padding: 0.5em 1em;
      color: var(--color-text-dark);

      &:hover {
        transform: translateY(-2px);
        color: var(--color-text-semidark);
      }

      &:last-child {
        padding-bottom: 0;
      }
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
