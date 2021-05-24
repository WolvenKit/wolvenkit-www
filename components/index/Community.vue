<template>
  <div class="community">
    <PageContainer>
      <IndexWumpus />
      <div class="community__info">
        <h2 class="community__title">
          {{ $t('index.community') }}
        </h2>
        <p>
          {{ $t('index.communityParagraph') }}
        </p>
        <a
          href="https://discord.gg/Epkq79kd96"
          class="community__button"
        >
          {{ $t('index.communityJoinButton') }}
        </a>
      </div>
    </PageContainer>
  </div>
</template>

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
