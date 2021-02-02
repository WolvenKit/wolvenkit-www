<template>
  <div class="nav">
    <div class="nav__container">
      <div class="nav__navLeft">
        <router-link
          to="/"
          class="nav__navLogo"
        >
          wolvenkit logo
        </router-link>
        <router-link
          to="/news"
          class="nav__navItem"
        >
          News
        </router-link>
        <router-link
          to="/"
          class="nav__navItem"
        >
          Projects
        </router-link>
        <router-link
          to="/"
          class="nav__navItem"
        >
          Team
        </router-link>
        <router-link
          to="/"
          class="nav__navItem"
        >
          Wiki
        </router-link>
      </div>
      <div class="nav__navRight">
        <router-link
          to="/"
          class="nav__navItem"
        >
          <GithubIcon />
        </router-link>
        <router-link
          to="/"
          class="nav__navItem"
        >
          <DiscordIcon />
        </router-link>
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
  }
}
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);
  height: 6em;

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
