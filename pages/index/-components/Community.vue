<template>
  <div class="community">
    <PageContainer>
      <DiscordIcon class="community__icon" />
      <div class="community__info">
        <h2 class="community__title">
          Join The Community!
        </h2>
        <p>Come and join our Discord and become a part of the community. Find all the latest discussion, guides and support on modding tools, or simply discuss anything and everything.</p>
        <a
          href="https://discord.gg/cp77modding"
          class="community__button"
        >
          Join Server
        </a>
      </div>
    </PageContainer>
  </div>
</template>

<script>
import DiscordIcon from 'vue-material-design-icons/Discord.vue'

export default {
  components: {
    DiscordIcon
  }
}
</script>

<style lang="scss" scoped>
.community {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(45deg, darken(#7289da, 35), darken(#99aab5, 35));

  ::v-deep .container {
    display: flex;
    align-items: center;
  }

  &__icon {
    display: flex;
    justify-content: center;
    font-size: 30vmin;
    flex: 1;

    ::v-deep svg {
      width: 1em;
      height: 1em;
      filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.2));
    }

    @media (max-width: 660px) {
      display: none;
    }
  }

  &__info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 1em;
    flex: 1;
  }

  &__title {
    font-size: 3em;
    margin-bottom: 0.5em;
  }

  &__button {
    width: max-content;
    margin-top: 1em;
    padding: 0.85em 2em;
    color: inherit;
    border-radius: 0.25em;
    border: 2px solid #fff;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      background: #fff;
      color: #7289da;
      box-shadow: 0 0.25em 15px 0 rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
