<template>
  <div class="team">
    <PageHeader
      :title="team.title"
      :subtitle="team.subtitle"
    />
    <PageContainer>
      <p class="team__description">
        {{ team.description }}
      </p>
      <div class="team__list">
        <TeamMember
          v-for="(member, index) in memberOrder"
          :key="index+member.name"
          :member="member"
        />
      </div>
    </PageContainer>
  </div>
</template>

<script>
import TeamMember from '@/pages/team/-components/TeamMember'

export default {
  components: {
    TeamMember
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

  head: {
    title: 'Team'
  },

  computed: {
    memberOrder () {
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

      return [...sortedList, ...remainder]
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

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
