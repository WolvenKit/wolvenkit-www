<template>
  <div class="team">
    <PageHeader
      title="Team"
      subtitle="Showcasing our extensive team who make everything possible"
    />
    <div class="team__container">
      <div class="team__list">
        <TeamMember
          v-for="(member, index) in team.members"
          :key="index"
          :member="member"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import TeamMember from '@/components/TeamMember'

export default {
  components: {
    PageHeader,
    TeamMember
  },

  async asyncData ({ $content, error }) {
    const team = await $content('team')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      team
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
}
</style>
