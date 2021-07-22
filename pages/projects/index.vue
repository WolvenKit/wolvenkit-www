<template>
  <div class="projects">
    <PageHeader :title="$t('projects.pageTitle')" :subtitle="$t('projects.pageDescription')" />
    <PageContainer>
      <div class="projects__projectList">
        <ProjectsItem
          v-for="project in projects"
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

    const projects = await $content(`projects/${defaultLocale}`)
      .sortBy('createdAt', 'asc')
      .fetch()
      .catch(() => {})

    if (currentLocale !== defaultLocale) {
      const projectsTranslated = await $content(`projects/${currentLocale}`)
        .sortBy('createdAt', 'asc')
        .fetch()
        .catch(() => {})

      if (projectsTranslated) {
        const projectSlugs = projects.reduce((slug, project, index) => {
          slug[project.slug] = index
          return slug
        }, Object.create(null))

        projectsTranslated.forEach((project) => {
          const defaultPost = projects.find(x => x.slug === project.slug)
          Object.assign(projects[projectSlugs[project.slug]], { ...defaultPost, ...project })
        })
      }
    }

    const team = await $content('team')
      .fetch()
      .catch(() => {})

    return {
      page,
      projects,
      team
    }
  },

  head: {
    title: 'Projects'
  },

  methods: {
    membersOfProject (project) {
      if (this.team) {
        return this.team.filter(member => member.projects && member.projects.includes(project.name))
      }
      return []
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
