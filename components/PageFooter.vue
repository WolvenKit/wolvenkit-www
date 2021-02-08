<template>
  <div
    v-if="footer"
    class="footer"
  >
    <PageContainer>
      <div class="footer__columns">
        <div
          v-for="column in footer.columns"
          :key="column.title"
          class="footer__column"
        >
          <p class="footer__columnTitle">
            {{ column.title }}
          </p>
          <ul class="footer__columnList">
            <li
              v-for="item in column.items"
              :key="item.link"
              class="footer__columnItem"
            >
              <nuxt-link
                v-if="item.link.startsWith('/')"
                :to="item.link"
              >
                {{ item.name }}
              </nuxt-link>
              <a
                v-else
                :href="item.link"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p class="footer__title">
        {{ footer.title }}
      </p>
    </PageContainer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footer: null
    }
  },

  /*
    Unable to use asyncData in components or layout files.
    This works, but won't work on client side, it will fail.
    Although, it should never run client side, worst case the footer
    just won't render. No biggie ¯\_(ツ)_/¯
  */
  async fetch () {
    this.footer = await this.$content('footer')
      .fetch()
      .catch(() => {})
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background: #000;

  &__title {
    font-weight: 700;
    font-size: 2em;
  }

  &__columns {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 2em;
    margin-bottom: 2em;
    border-bottom: 1px solid var(--color-bg-alt);
  }

  &__column {
    flex: 1;
    margin-right: 1em;
    min-width: 200px;
    margin-bottom: 2em;
  }

  &__columnTitle {
    font-weight: 700;
    margin-bottom: 0.25em;
    padding-bottom: 0.25em;
    border-bottom: 1px solid var(--color-bg-alt);
  }

  &__columnList {
    padding: 0;
    list-style: none;
  }

  &__columnItem {
    line-height: 2;
    font-weight: 600;

    > a {
      color: var(--color-text-dark);
    }
  }
}
</style>
