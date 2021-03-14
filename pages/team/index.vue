<template>
  <div class="team">
    <PageHeader :title="$t('team.pageTitle')" :subtitle="$t('team.pageDescription')" />
    <PageContainer>
      <p class="team__description">
        {{ $t('team.teamDescription') }}
      </p>
      <div class="team__filter">
        <FilterIcon
          v-if="projectFilter"
          class="team__filter__iconFilled"
          title="Clear filters"
          @click="projectFilter = null"
        />
        <FilterOutlineIcon v-else class="team__filter__icon" />
        <p>{{ $t('team.projectFilter.label') }}: </p>
        <select v-model="projectFilter" class="team__filter__select">
          <option :value="null">
            {{ $t('team.projectFilter.all') }}
          </option>
          <option v-for="project in projectList" :key="project" :value="project">
            {{ project }}
          </option>
        </select>
      </div>
      <div class="team__list">
        <TeamMember
          v-for="(member, index) in memberOrder"
          :key="index+member.name"
          :member="member"
          :project-filter="projectFilter"
        />
      </div>
    </PageContainer>
  </div>
</template>

<script>
import FilterIcon from 'vue-material-design-icons/Filter.vue'
import FilterOutlineIcon from 'vue-material-design-icons/FilterOutline.vue'

export default {
  components: {
    FilterIcon,
    FilterOutlineIcon
  },

  async asyncData ({ $content, error }) {
    const team = await $content('team')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    const teamMembers = await $content('teamMembers', { deep: true })
      .sortBy('createdAt', 'asc')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      team,
      teamMembers
    }
  },

  data () {
    return {
      projectFilter: null
    }
  },

  head: {
    title: 'Team'
  },

  computed: {
    memberOrder () {
      // TODO: find another name/way to differentiate teamMembers and team.members
      const original = this.teamMembers
      const sortBy = this.team.members

      if (!original || !sortBy) {
        return original
      }

      const sortedList = []
      sortBy.forEach((sort) => {
        const existing = original.filter(member => member.name === sort)
        if (existing.length > 0) {
          sortedList.push(existing[0])
        }
      })

      const remainder = original.filter(member => !sortBy.includes(member.name))

      let finalList = [...sortedList, ...remainder]
      if (this.projectFilter != null) {
        finalList = finalList.filter(m => m.projects.includes(this.projectFilter))
      }

      return finalList
    },

    projectList () {
      const projects = []
      this.teamMembers.forEach(member => projects.push(...member.projects))

      return [...new Set(projects)].sort()
    }
  }
}
</script>

<style lang="scss" scoped>
.team {
  &__container {
    max-width: var(--max-width-lg);
    margin: 0 auto;
    padding: 4vmin;
  }

  &__description {
    width: 60%;
    text-align: center;
    margin: 0 auto 37px auto;
  }

  &__filter {
    margin: 40px 0;

    &__icon {
      float: left;
    }

    &__iconFilled {
      float: left;
      cursor: pointer;
      transition: 150ms;

      &:hover {
        color: var(--color-primary-light);
      }
    }

    p {
      float: left;
      margin: 0 20px 0 10px;
    }

    &__select {
      background-color: var(--color-bg);
      color: var(--color-text);
      padding: 4px 2px;
      cursor: pointer;
      border-width: 0 0 2px 0;
      outline: none;

      &:hover {
        color: var(--color-primary);
      }

      &:focus {
        color: var(--color-text);
      }
    }
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    // flex-wrap: wrap;
    // justify-content: space-between;
  }

  @media (max-width: 1100px) {
    &__list {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
}
</style>
