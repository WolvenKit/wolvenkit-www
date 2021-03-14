<template>
  <div class="patreon">
    <PageContainer>
      <div class="patreon__image">
        <PatreonLogo class="patreon__logo" />
      </div>
      <div class="patreon__info">
        <h2 class="patreon__title">
          {{ $t('index.patreon') }}
        </h2>
        <p>
          {{ $t('index.patreonParagraph') }}
        </p>
        <a href="https://www.patreon.com/RedModdingTools" class="patreon__button">
          {{ $t('index.patreonButton') }}
        </a>
      </div>
    </PageContainer>
  </div>
</template>

<script>
import PatreonLogo from 'vue-material-design-icons/Patreon.vue'

export default {
  components: {
    PatreonLogo
  }
}
</script>

<style lang="scss" scoped>
.patreon {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(45deg, rgb(121, 30, 30), rgb(219, 72, 80));

  ::v-deep .container {
    display: flex;
    align-items: center;
  }

  &__icon {
    font-size: 30vmin;

    ::v-deep svg {
      width: 1em;
      height: 1em;
      filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.2));
    }

    @media (max-width: 660px) {
      display: none;
    }
  }

  &__image {
    flex: 1;
    max-width: 350px;
    max-height: 350px;

    img {
      width: 100%;
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
      color: rgb(255, 66, 77);
      box-shadow: 0 0.25em 15px 0 rgba(0, 0, 0, 0.2);
    }
  }

  &__logo {
    ::v-deep svg {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
