<template>
  <div class="projects">
    <PageHeader :title="$t('projects.pageTitle')" :subtitle="$t('projects.pageDescription')" />
    <PageContainer>
      <h2 v-if="teamProjects.length > 0" class="projects__heading">
        {{ $t('projects.teamProjects') }}
      </h2>
      <div class="projects__teamProjects">
        <ProjectItem
          v-for="project in teamProjectOrder"
          :key="project.slug"
          :project="project"
          :members="membersOfProject(project)"
        />
      </div>

      <h2 v-if="communityProjects.length > 0" class="projects__heading">
        {{ $t('projects.communityProjects') }}
      </h2>
      <div class="projects__communityProjects">
        <ProjectsItem
          v-for="project in communityProjectOrder"
          :key="project.slug"
          :project="project"
          :members="membersOfProject(project)"
        />
      </div>
    </PageContainer>
  </div>
</template>

<script>

export default {
  async asyncData ({ $content, error, app, env }) {
    const currentLocale = app.i18n.locale
    const defaultLocale = env.DEFAULT_LOCALE

    const page = await $content('project')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    let teamProjects = await $content('projects/team', { deep: true })
      .sortBy('createdAt', 'asc')
      .where({
        slug: defaultLocale
      })
      .fetch()
      .catch(() => {})

    let communityProjects = await $content('projects/community', { deep: true })
      .sortBy('createdAt', 'asc')
      .where({
        slug: defaultLocale
      })
      .fetch()
      .catch(() => {})

    if (currentLocale !== defaultLocale) {
      const slug = currentLocale

      let teamProjectsTranslated = await $content('projects/team', { deep: true })
        .sortBy('createdAt', 'asc')
        .where({
          slug
        })
        .fetch()
        .catch(() => {})

      if (!teamProjectsTranslated) {
        teamProjectsTranslated = []
      }

      const teamProjectDirs = teamProjects.reduce((dir, project, index) => {
        dir[project.dir] = index
        return dir
      }, Object.create(null))

      for (const project of teamProjectsTranslated) {
        Object.assign(teamProjects[teamProjectDirs[project.dir]], project)
      }

      let communityProjectsTranslated = await $content('projects/community', { deep: true })
        .sortBy('createdAt', 'asc')
        .where({
          slug
        })
        .fetch()
        .catch(() => {})

      if (!communityProjectsTranslated) {
        communityProjectsTranslated = []
      }

      const communityProjectDirs = communityProjects.reduce((dir, project, index) => {
        dir[project.dir] = index
        return dir
      }, Object.create(null))

      for (const project of communityProjectsTranslated) {
        Object.assign(communityProjects[communityProjectDirs[project.dir]], project)
      }
    }

    let teamMembers = await $content('teamMembers', { deep: true })
      .sortBy('createdAt', 'asc')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    if (!teamProjects) {
      teamProjects = []
    }

    if (!communityProjects) {
      communityProjects = []
    }

    if (!teamMembers) {
      teamMembers = []
    }

    return {
      page,
      teamProjects,
      communityProjects,
      teamMembers
    }
  },

  head: {
    title: 'Projects'
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
    },

    membersOfProject (project) {
      return this.teamMembers.filter(m => m.projects.includes(project.name))
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
