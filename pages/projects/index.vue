<template>
  <div class="projects">
    <PageHeader
      title="Projects"
      subtitle="All the projects by the team and community"
    />
    <PageContainer>
      <h2
        v-if="teamProjects.length > 0"
        class="projects__heading"
      >
        Team Projects
      </h2>
      <div class="projects__teamProjects">
        <ProjectItem
          v-for="project in teamProjectOrder"
          :key="project.slug"
          :project="project"
        />
      </div>

      <h2
        v-if="communityProjects.length > 0"
        class="projects__heading"
      >
        Community Projects
      </h2>
      <div class="projects__communityProjects">
        <ProjectItem
          v-for="project in communityProjectOrder"
          :key="project.slug"
          :project="project"
        />
      </div>
    </PageContainer>
  </div>
</template>

<script>
import ProjectItem from '@/pages/projects/-components/ProjectItem'

export default {
  components: {
    ProjectItem
  },

  async asyncData ({ $content, error }) {
    const page = await $content('project')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    let teamProjects = await $content('projects/team', { deep: true })
      .sortBy('createdAt', 'asc')
      .fetch()
      .catch(() => {})

    let communityProjects = await $content('projects/community', { deep: true })
      .sortBy('createdAt', 'asc')
      .fetch()
      .catch(() => {})

    if (!teamProjects) {
      teamProjects = []
    }

    if (!communityProjects) {
      communityProjects = []
    }

    return {
      page,
      teamProjects,
      communityProjects
    }
  },

  computed: {
    teamProjectOrder () {
      return this.sortArray(this.teamProjects, this.page.projects)
    },

    communityProjectOrder () {
      return this.sortArray(this.communityProjects, this.page.communityProjects)
    }
  },

  methods: {
    sortArray (original, sortBy) {
      if (!original || !sortBy) {
        return original
      }

      const sortedList = []
      sortBy.forEach((sort) => {
        const existing = original.filter(item => item.name === sort)
        if (existing.length > 0) {
          sortedList.push(existing[0])
        }
      })

      const remainder = original.filter(e => !sortBy.includes(e.name))

      return [...sortedList, ...remainder]
    }
  }
}
</script>

<style lang="scss" scoped>
.projects {
  &__heading {
    text-align: center;
    font-size: 2em;
    margin-bottom: 1em;
  }
}
</style>
